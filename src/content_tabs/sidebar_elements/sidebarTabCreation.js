import clearContentMake from "../clearContentMake"
import Plus from '../../img/plus-thick.svg'
import PlusProject from '../../img/plus-box.svg'
import { allTaskManager } from "../../task_controls/objectHolders"
import { addNew } from "../form_tab/addNew"

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
    const content = clearContentMake('overview')
    allTaskManager.refresh()
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
