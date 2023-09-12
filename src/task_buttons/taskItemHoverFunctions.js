/* eslint-disable func-names */
// Arrow functions stop all usability of task-buttons
import { projectContainer } from "../task_controls/taskManagers"
import addNew from "../content_tabs/form_tab/addNew";
import { submitFunction } from "../content_tabs/form_tab/addNewFunctions"
import { overview } from "../content_tabs/sidebar_elements/sidebarTabCreation"

const getTaskByTitle = (current) => {
    const infoTitle = current.parentElement.parentElement.firstChild.textContent
    const mainTask = projectContainer.allTaskManager.getTask(infoTitle)

    const taskProject = projectContainer.findProjectByTask(infoTitle)
    console.log(infoTitle, mainTask, taskProject)

    return {
        mainTask,
        taskProject,
        projectTask: taskProject ? taskProject.taskManager.getTask(infoTitle) : null
    };
};

const displayTab = function() {
    const projectH1 = document.querySelector('#project-showing')
    if (projectH1) {
        projectContainer.displayChosenProject(projectH1.textContent)
    } else {
        projectContainer.allTaskManager.refresh()
    }
}


export const clickFinish = function(){
    const { mainTask, projectTask, taskProject} = getTaskByTitle(this)

    mainTask?.toggleCompletion()
    taskProject?.toggleCompletionInTask(projectTask.title)

    displayTab();
    projectContainer.storeProjects();
};


export const clickDelete = function() {
    const { mainTask, projectTask, taskProject} = getTaskByTitle(this)

    mainTask?.removeFromList(projectContainer.allTaskManager.tasklist)
    projectTask?.removeFromList(taskProject.taskManager.tasklist)

    displayTab()
    projectContainer.storeProjects()
}

// DO NOT MAKE ARROW FUNCTION !!!
// eslint-disable-next-line func-names
export const editTask = function(){
    const projectH1 = document.querySelector('#project-showing')
    addNew()
    const holder = getTaskByTitle(this)
    const title = document.querySelector(`input[name='title']`)
    const description = document.querySelector('textarea')
    const importance = document.querySelector('select[name="importance"]')
    const project = document.querySelector('select[id="project"]')
    const date = document.querySelector('input[type="date"]')
    const button = document.querySelector('button[type="submit"]')

    if (projectH1) project.parentElement.remove()

    document.querySelector('.new-form-tab h1').textContent = 'Edit Task'

    title.value = holder.mainTask.title
    description.textContent = holder.mainTask.description
    importance.value = holder.mainTask.importance
    project.value = holder.taskProject.name
    date.value = holder.mainTask.date

    project.parentElement.classList.add('hidden')

    // Function to serialize form data into an object
    function serializeForm(form) {
        const formData = new FormData(form);
        const serialized = {};
        for (const [key, value] of formData.entries()) {
            serialized[key] = value;
        }
        return serialized;
    }

    // Store the initial form data when the form is displayed
    const initialFormData = serializeForm(document.querySelector('#add-form'));

    // Function to check for changes and submit the form
    const checkAndSubmit = (event) => {
        event.preventDefault();

        // Serialize the current form data
        const currentFormData = serializeForm(document.querySelector('#add-form'));

        const isFormChanged = JSON.stringify(initialFormData) !== JSON.stringify(currentFormData);

        if (isFormChanged) {
            // Update the task properties with the new values
            holder.mainTask.title = title.value;
            holder.projectTask.title = title.value

            holder.mainTask.description = description.value;
            holder.projectTask.description = description.value

            holder.mainTask.importance = importance.value;
            holder.projectTask.importance = importance.value

            holder.mainTask.date = date.value;
            holder.projectTask.date = date.value


            if (projectH1 && projectH1.textContent === holder.taskProject.name) {
                projectContainer.allTaskManager.refresh()
                overview()
                document.querySelector('#content').appendChild(projectH1)
                projectContainer.displayChosenProject(projectH1.textContent)
            } else {
                overview()
                projectContainer.allTaskManager.refresh();
            }
        } else if (projectH1 && projectH1.textContent === holder.taskProject.name) {
                overview()
                document.querySelector('#content').appendChild(projectH1)
                projectContainer.displayChosenProject(projectH1.textContent)
            } else {
                overview()
            }
        projectContainer.storeProjects()
    }

    const submitButton = document.querySelector('button[type="submit"]');
    button.removeEventListener('click', submitFunction)
    submitButton.addEventListener('click', checkAndSubmit);
}