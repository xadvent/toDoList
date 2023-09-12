import clearContentMake from "../clearContentMake";
import { createNewButton } from "../sidebar_elements/sidebarTabCreation";
import { projectContainer } from "../../task_controls/taskManagers";
// eslint-disable-next-line import/no-cycle
import { projectForm } from "./projectForm";

export const displayOnClick = function(){
    const content = document.querySelector('#content')
    clearContentMake('overview')

    const newH1 = document.createElement('h1')
    newH1.textContent = this.id
    newH1.id = 'project-showing'
    content.append(newH1)

    projectContainer.displayChosenProject(this.id)

    const button = createNewButton()
    content.appendChild(button)
}

export const makeProjects = function () {
    const content = clearContentMake('projects')
    projectContainer.displayProjects()
    const button = createNewButton('projects')
    button.addEventListener('click', projectForm)
    content.appendChild(button)

    const projectList = document.querySelectorAll('.project-card')
    projectList.forEach(project => project.addEventListener('click', displayOnClick))
}
