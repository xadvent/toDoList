import { projectContainer } from "../task_controls/taskManagers";

const getTaskByTitle = (current) => {
    const infoTitle = current.parentElement.firstChild.textContent;
    const changingTask = projectContainer.allTaskManager.getTask(infoTitle);

    const changingProject = projectContainer.findProjectByTask(infoTitle)

    console.log(changingProject)

    return {
        changingTask,
        changingProject,
        changingProjectTask: changingProject ? changingProject.taskManager.getTask(infoTitle) : null
    };
};


export const clickFinish = function () {
    const taskToFinish = getTaskByTitle(this);
    if (taskToFinish) {
        if (taskToFinish.changingTask) {
            taskToFinish.changingTask.toggleCompletion();

        }
        if (taskToFinish.changingProjectTask) {
            taskToFinish.changingProjectTask.toggleCompletion();
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
        taskToRemove.changingTask.removeFromList(projectContainer.allTaskManager.tasklist)
        taskToRemove.changingProjectTask.removeFromList(taskToRemove.changingProject.taskManager.tasklist)
        projectContainer.allTaskManager.refresh();
    } else {
        console.error('Task not found.');
    }
};
