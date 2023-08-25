import clearContentMake from "../clearContentMake";
import { createNewButton } from "../sidebar_elements/sidebarTabCreation";
import { projectContainer } from "../../task_controls/taskManagers";

export const makeProjects = function () {
    const content = clearContentMake('projects')
    projectContainer.displayProjects()
    content.appendChild(createNewButton('projects'))
    return
}