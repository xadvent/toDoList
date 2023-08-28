import { projectContainer } from "../task_controls/taskManagers";
import { addNew } from "../content_tabs/form_tab/addNew";

const getTaskByTitle = (current) => {
    const infoTitle = current.parentElement.parentElement.firstChild.textContent;
    const mainTask = projectContainer.allTaskManager.getTask(infoTitle);

    const taskProject = projectContainer.findProjectByTask(infoTitle)

    return {
        mainTask,
        taskProject,
        projectTask: taskProject ? taskProject.taskManager.getTask(infoTitle) : null
    };
};


export const clickFinish = function () {
    const taskToFinish = getTaskByTitle(this);
    if (taskToFinish) {
        if (taskToFinish.mainTask) {
            taskToFinish.mainTask.toggleCompletion();

        }
        if (taskToFinish.projectTask) {
            taskToFinish.projectTask.toggleCompletion();
        }
        projectContainer.allTaskManager.refresh();
        projectContainer.storeProjects()
    } else {
        console.error("Task not found.");
    }
};


export const clickDelete = function () {
    const taskToRemove = getTaskByTitle(this);
    if (taskToRemove) {
        taskToRemove.mainTask.removeFromList(projectContainer.allTaskManager.tasklist)
        taskToRemove.projectTask.removeFromList(taskToRemove.taskProject.taskManager.tasklist)
        projectContainer.allTaskManager.refresh();
    } else {
        console.error('Task not found.');
    }
};

export const editTask = function(){
    addNew()
    document.querySelector('.new-form-tab h1').textContent = 'Edit Task'

    const holder = getTaskByTitle(this)

    document.querySelectorAll('.form-info')

    holder.mainTask.removeFromList(projectContainer.allTaskManager.tasklist)
    holder.projectTask.removeFromList(holder.taskProject.taskManager.tasklist)
}