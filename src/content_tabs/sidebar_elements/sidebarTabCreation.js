/* eslint-disable import/no-cycle */
import clearContentMake from "../clearContentMake"
import Plus from '../../img/plus-thick.svg'
import PlusProject from '../../img/plus-box.svg'
import addNew from "../form_tab/addNew"
import { projectContainer } from "../../task_controls/taskManagers"

export const createNewButton = function (type) {
    const contentNewButton = document.createElement('button')

    const addIcon = new Image()
    addIcon.classList.add('nav-image')
    addIcon.id = 'plus'

    const addName = document.createElement('p')

    switch (type) {
        case ('projects'):
            addName.textContent = 'New Project'
            addIcon.src = PlusProject
            // contentNewButton.onclick = 
            contentNewButton.id = 'new-project-button'
            break;
        default:
            addName.textContent = 'Add New'
            contentNewButton.onclick = addNew
            addIcon.src = Plus
            contentNewButton.id = 'add-button'
            break;
    }

    contentNewButton.appendChild(addIcon)
    contentNewButton.appendChild(addName)
    return contentNewButton
}


export const overview = function () {
    const contentBox = document.querySelector('#content')
    const overviewH1 = document.createElement('h1')
    overviewH1.textContent = "Overview"
    
    const content = clearContentMake('overview')
    contentBox.appendChild(overviewH1)
    content.appendChild(createNewButton())

    projectContainer.allTaskManager.refresh()
    
}

export const thisWeek = function () {
    const content = clearContentMake('week')
    content.appendChild(createNewButton())
}

export const month = function () {
    const content = clearContentMake('month')
    content.appendChild(createNewButton())
}
