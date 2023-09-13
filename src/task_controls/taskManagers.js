/* eslint-disable no-nested-ternary */
/* eslint-disable max-classes-per-file */
import getDifferenceDate from './getDifferenceDate';
import taskItemHover from '../task_buttons/taskItemHover';

const storeStuff = function (name, value) {
    try {
        window.localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
        console.error('Error storing data:', error);
    }
};

export class Task {
    constructor(title, description, importance, date, completed) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.completed = completed || false;
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
                        info.textContent = getDifferenceDate(value);
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

    toJSON() {
        return {
            tasklist: this.tasklist,
        };
    }

    store(){
        storeStuff('tasks', this.tasklist)
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
            console.error(`Task not found: ${  title}`)
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
            const incompletedSentence = `${incompleted && incompleted !== 1 ? `${incompleted  } tasks to do. ` : incompleted ? `${incompleted  } task to do. ` : '' }`
            const completedSentence = `${completed && completed !== 1 ? `${completed  } tasks finished!`: completed ? `${completed  } task finished!` : ''} `;

            review.textContent = incompletedSentence + completedSentence
            card.appendChild(title);
            card.appendChild(review);
            content.appendChild(card)
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
    }

    addTaskToProject(projectName, title, description, importance, date){
        // eslint-disable-next-line no-shadow
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

    // getAllWeekly(){
    //     const allWeekly = []
    //     this.projectList.forEach(project =>{
    //         if (project.date.split)
    //         allWeekly.push()
    //     })
    // }
}


export const projectContainer = new ProjectContainer();