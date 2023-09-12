import { getDifference } from './getDate';
import taskItemHover from '../task_buttons/taskItemHover';

export class Task {
    constructor(title, description, importance, date, completed) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.completed = completed ? completed : false;
        this.date = date;
    }

    toggleCompletion() {
        return this.completed = !this.completed;
    }

    removeFromList(tasklist) {
        const index = tasklist.indexOf(this);
        if (index !== -1) {
            tasklist.splice(index, 1);
        }
    }

    static fromJSON(data){
        const task = new Task(data.title, data.description, data.importance, data.date, data.completed);
        return task;
    }
}

class TaskManager {
    constructor() {
        this.tasklist = [];
    }

    clear() {
        const taskItems = document.querySelectorAll('.task-item');
        taskItems.forEach(taskItem => taskItem.remove());
    }

    getTask(title) {
        return this.tasklist.find(task => task.title === title);
    }

    refresh() {
        const content = document.querySelector('#content');
        this.clear();
        if (this.tasklist.length < 1) return;
    
        this.tasklist.forEach(task => {
            const createdTask = document.createElement('div');
            createdTask.classList.add('task-item');
    
            for (const [key, value] of Object.entries(task)) {
                const info = document.createElement('h3');
    
                switch (key) {
                    case 'importance':
                        createdTask.classList.add(value);
                        break;
    
                    case 'completed':
                        value ? createdTask.classList.add('finished') : null;
                        break;
    
                    case 'date':
                        info.textContent = getDifference(value);
                        info.classList.add('task-info', key);
                        createdTask.appendChild(info);
                        break;
    
                    case 'project':
                        break;
    
                    default:
                        info.classList.add('task-info', key);
                        info.textContent = value;
                        createdTask.appendChild(info);
                        break;
                }
            }
            content.appendChild(createdTask);
        });
    
        // Attach event listeners to the task items
        taskItemHover();
    }
    

    addTask(title, description, importance, date, completed) {
        const newTask = new Task(title, description, importance, date, completed);
        this.clear();
        this.tasklist.push(newTask);
    }
    static fromJSON(data) {
        const project = new Project(data.name);
        project.taskManager = TaskManager.fromJSON(data.taskManager); // Convert the TaskManager from JSON
        return project;
    }

    toJSON() {
        return {
            tasklist: this.tasklist,
        };
    }
    store(){
        storeStuff('tasks', this.tasklist)
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.taskManager = new TaskManager();
    }

    addTask(title, description, importance, date) {
        this.taskManager.addTask(title, description, importance, date);
    }

    removeTask(title) {
        const taskToRemove = this.taskManager.getTask(title);
        if (taskToRemove) {
            taskToRemove.removeFromList(this.taskManager.tasklist);
        }
        else {
            console.error('Task not found: ' + title)
        }
    }

    toggleCompletionInTask(title){
        const taskToComplete = this.taskManager.getTask(title);
        if (taskToComplete) {
            taskToComplete.toggleCompletion();
            return taskToComplete.completed
        }
    }

    display() {
        this.taskManager.refresh();
    }

    getIncompleted() {
        return this.taskManager.tasklist.filter(task => !task.completed).length;
    }

    getCompleted() {
        return this.taskManager.tasklist.filter(task => task.completed).length;
    }

    toJSON() {
        return {
            name: this.name,
            taskManager: this.taskManager
        }
    }

    static fromJSON(data) {
        const project = new Project(data.name);
        
        if (data.taskManager) {
            const taskManager = new TaskManager();
            data.taskManager.tasklist.forEach(task =>{
                const newTask = Task.fromJSON(task)
                taskManager.tasklist.push(newTask)
            })
            project.taskManager = taskManager;
        }
        
        return project;
    }
    
}

class ProjectContainer {
    constructor() {
        this.projectList = [];
        this.allTaskManager = new TaskManager()
    }

    displayProjects() {
        const content = document.querySelector('#content');
        if (!this.projectList) return
        this.projectList.forEach(project => {
            const card = document.createElement('div');
            card.id = project.name;
            card.classList.add('project-card');

            const title = document.createElement('h1');
            title.textContent = project.name;

            const review = document.createElement('h3');
            const incompleted = project.getIncompleted();
            const completed = project.getCompleted();

            // Add: task(s) instead of just tasks
            const incompletedSentence = `${incompleted && incompleted != 1 ? incompleted + ' tasks to do. ' : incompleted ? incompleted + ' task to do. ' : '' }`
            const completedSentence = `${completed && completed != 1 ? completed + ' tasks finished!': completed ? completed + ' task finished!' : ''} `;

            review.textContent = incompletedSentence + completedSentence
            card.appendChild(title);
            card.appendChild(review);
            content.appendChild(card)
            return
        });
    }

    findProjectByTask(name) {
        const foundProject = this.projectList.find(project => {
            const task = project.taskManager.getTask(name);
            if (task && task.title) {
                return task.title === name;
            }
            return false;
        });
    
        return foundProject;
    }

    displayOverview(){
        this.allTaskManager.refresh()
    }

    addProject(name) {
        const project = new Project(name);
        this.projectList.push(project);
        this.storeProjects()
        return 
    }

    addTaskToProject(projectName, title, description, importance, date){
        const project = this.projectList.find(project => projectName === project.name)
        project.taskManager.addTask(title, description, importance, date)
        this.allTaskManager.addTask(title, description, importance, date)
        this.storeProjects()
    }

    storeProjects() {
        this.projectList.forEach((project, index) => {
            storeStuff(`project-${index}`, project);
            this.allTaskManager.store()
        });
    }

    displayChosenProject(name) {
        const chosenProject = this.projectList.find(project => project.name === name);
        if (chosenProject) {
            chosenProject.display();
        } else {
            console.error('Project not found.');
        }
    }
    
    checkIfData(){
        checkGetStored()
        this.allTaskManager.refresh()
    }
}

const storeStuff = function (name, value) {
    try {
        window.localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
        console.error('Error storing data:', error);
    }
};

export const projectContainer = new ProjectContainer();

const loadProjectsFromLocalStorage = () => {
    // Loop through all items in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with "project-" to identify project-related data
        if (key.startsWith("project-")) {
            const projectAsString = localStorage.getItem(key);

            // Parse the JSON data into a JavaScript object
            const projectData = JSON.parse(projectAsString);

            if (projectData && projectData.name) {
                const project = Project.fromJSON(projectData);
                projectContainer.projectList.push(project);
                project.taskManager.tasklist.forEach(task => {
                    const newTask = Task.fromJSON(task)
                    projectContainer.allTaskManager.tasklist.push(newTask)
                })
            }
        } 
        projectContainer.allTaskManager.refresh()
    }
}


export const checkGetStored = function(){
    if (localStorage.getItem('tasks') !== null) {
        loadProjectsFromLocalStorage()
    } else {
        projectContainer.addProject('Homework')
        projectContainer.addTaskToProject('Homework', 'Daily Assignment', 'Do the daily assignment for whatever class it is you\'re taking right now. Everybody knows that it is dumb, but what can you do.', 'high-priority', 'Never')
        const message = 'Finish my paper regarding the legality of cloning T-rex\'s.'
        projectContainer.addTaskToProject('Homework', "Paper", message, 'high-priority', 'Never')

        projectContainer.addProject('Writing pages')
        projectContainer.addTaskToProject('Writing pages', 'Script One', 'Write hella pages of script 4 and come up with a good ending.', 'medium-priority', '2023-08-30')
        projectContainer.addTaskToProject('Writing pages', 'Script Two', 'Finish Script 5 by the deadline.', 'medium-priority', '2023-09-20')
    }
}


//  Stop items from unfinishing in CSS when complete or reloaded 