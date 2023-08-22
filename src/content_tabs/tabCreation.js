import clearContentMake from "./clearContentMake"
import Plus from '../img/plus-thick.svg'
import { taskObj } from "../main"
import { addNew } from "./formTab/addNew"

export const createNewButton = function (type) {
    const contentNewButton = document.createElement('button')

    const addIcon = new Image()
    addIcon.src = Plus
    addIcon.classList.add('nav-image')
    addIcon.id = 'plus'

    const addName = document.createElement('p')
        contentNewButton.id = 'add-button'

    if (type === 'projects') {
        addName.textContent = 'New Project'
        // contentNewButton.onclick = 
    } else {
        addName.textContent = 'Add New'
        contentNewButton.onclick = addNew
    }


    contentNewButton.appendChild(addIcon)
    contentNewButton.appendChild(addName)
    return contentNewButton
}


export const overview = function () {
    const content = clearContentMake('overview')
    taskObj.refresh()
    content.appendChild(createNewButton())
    return
}

export const thisWeek = function () {
    const content = clearContentMake('week')
    content.appendChild(createNewButton())
}

export const month = function () {
    const content = clearContentMake('month')
    content.appendChild(createNewButton())
}
export const projects = function () {
    const content = clearContentMake('projects')
    content.appendChild(createNewButton('projects'))
}
