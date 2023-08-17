import clearContentMake from "./clearContentMake"
import Plus from '../img/plus-thick.svg'
import { taskObj } from "../main"
import { addNew } from "./addNew"

export const createNewButton = function () {
    const contentNewButton = document.createElement('button')
    contentNewButton.id = 'add-button'

    const addIcon = new Image()
    addIcon.src = Plus
    addIcon.classList.add('nav-image')
    addIcon.id = 'plus'

    const addName = document.createElement('p')
    addName.textContent = 'Add New'

    contentNewButton.appendChild(addIcon)
    contentNewButton.appendChild(addName)
    contentNewButton.onclick = addNew
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
