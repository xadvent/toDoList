import clearContentMake from "./clearContentMake"
import Plus from '../img/plus-thick.svg'

const createNewButton = function(){
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
    return contentNewButton
}

export const overview = function () {
    const content = clearContentMake('overview')
    const newButton = createNewButton()




    content.appendChild(createNewButton())
    return
}

export const thisWeek = function(){
    const content = clearContentMake('week')
    content.appendChild(createNewButton())


}

export const month = function(){
    const content = clearContentMake('month')
    content.appendChild(createNewButton())
}

export const addNew = function(){
    const content = clearContentMake('new-form')
}