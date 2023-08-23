import { Holder } from "./objectHolders";
import { TaskManager } from "./objectHolders"; // Assuming TaskManager is defined in objectHolders
import { allTaskManager } from "./objectHolders";


class ProjectContainer {
    constructor() {
        this.projectList = [];
    }

    displayProjects() {
        const content = document.querySelector('#content');
        this.projectList.forEach(project => {
            const card = document.createElement('div');
            card.id = project.name;
            card.classList.add('project-card');

            const title = document.createElement('h1');
            title.textContent = project.name

            const review = document.createElement('h3');
            const incompleted = project.getIncompleted();
            const completed = project.getCompleted();

            review.textContent = `${incompleted} tasks to do. ${completed} tasks finished!`;

            card.appendChild(title);
            card.appendChild(review);
            content.appendChild(card);
            return
        });
    }

    addProject(project) {
        this.projectList.push(project);
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.taskManager = new TaskManager();
        this.allTaskManager = allTaskManager;
    }

    addTask(title, description, importance, date) {
        this.taskManager.addItem(title, description, importance, date);
        this.allTaskManager.addItem(title, description, importance, date);
    }

    getIncompleted() {
        const amount = this.taskManager.tasklist.filter(task => !task.completed).length;
        return amount ? amount : 0
    }

    getCompleted() {
        const amount = this.taskManager.tasklist.filter(task => task.completed).length;
        return amount ? amount : 0
    }
}


// Create a project container
export const projectContainer = new ProjectContainer();

// Create and add projects
const project1 = new Project('Living Life');
const project2 = new Project('Trying Hard');
const project3 = new Project('General Tasks')
projectContainer.addProject(project1);
projectContainer.addProject(project2);
projectContainer.addProject(project3)

project1.addTask('Affirm Baby', 'tell vero she\'s beautiful', 'high-priority', 'NaN-NaN')
// Display projects
