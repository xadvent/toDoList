import { getDifference } from './getDate';
import taskItemHover from '../task_buttons/taskItemHover';

class Task {
    constructor(title, description, importance, date) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.completed = false;
        this.date = date;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    removeFromList(tasklist) {
        const index = tasklist.indexOf(this);
        if (index !== -1) {
            tasklist.splice(index, 1);
        }
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
        if (this.tasklist.length < 1) return

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
                        value ? createdTask.classList.add('finished'): null;
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

        taskItemHover();
        storeStuff('tasks', this.tasklist);
    }

    addTask(title, description, importance, date) {
        const newTask = new Task(title, description, importance, date);
        this.clear();
        this.tasklist.push(newTask);
    }
}

export class Project {
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
}

const storeStuff = function (name, value) {
    try {
        window.localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
        console.error('Error storing data:', error);
    }
};
const getStored = function(){
    window.localStorage.forEach(project =>{
        projectAsString = localStorage.getItem(project)
        const projectAsObject = JSON.parse(projectAsString)
    })
}

export const projectContainer = new ProjectContainer();