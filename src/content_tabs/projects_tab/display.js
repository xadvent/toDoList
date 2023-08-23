import { Projects } from "../../main";
import clearContentMake from "../clearContentMake";
import { createNewButton } from "../sidebar_elements/sidebarTabCreation";
import { projectContainer } from "../../task_controls/projectHolder";

export const makeProjects = function () {
    const content = clearContentMake('projects')

    content.appendChild(createNewButton('projects'))
    projectContainer.displayProjects();
}