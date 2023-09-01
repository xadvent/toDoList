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

    const projectList = document.querySelectorAll('.project-card')
    projectList.forEach(project => project.addEventListener('click', displayOnClick))
    return
}

const displayOnClick = function(){
   console.log(this)
   clearContentMake('overview')
   projectContainer.displayChosenProject(this.id)
}