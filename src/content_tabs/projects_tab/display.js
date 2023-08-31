import clearContentMake from "../clearContentMake";
import { createNewButton } from "../sidebar_elements/sidebarTabCreation";
import { projectContainer } from "../../task_controls/taskManagers";
import { projectForm } from "./projectForm";

export const makeProjects = function () {
    const content = clearContentMake('projects')
    projectContainer.displayProjects()
    const button = createNewButton('projects')
    button.addEventListener('click', projectForm)
    content.appendChild(button)
    return
}