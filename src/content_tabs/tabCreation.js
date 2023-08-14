import clearContentMake from "./clearContentMake"
import Plus from '../img/plus-thick.svg'
import { taskObj } from "../main"

const createNewButton = function () {
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
function CreateTask(event) {
    event.preventDefault();
    const myFormData = new FormData(document.querySelector('#add-form'));
    console.log(myFormData)

    const formDataObj = {}
    myFormData.forEach((value, key) => formDataObj[key] = value)
    for ([key, value] of Object.entries(myFormData)) {
        console.log(value)
    }
    console.log(myFormData)
    return
}
const formLabelInput = (label, input) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('form-info')
    const newLabel = document.createElement('label')
    const newInput = document.createElement('input')
    const formattedName = label[0].toUpperCase() + label.substr(1)

    newLabel.setAttribute('for', label)
    newLabel.textContent = formattedName

    newInput.id = label
    newInput.name = label
    newInput.type = input

    newDiv.appendChild(newLabel)
    newDiv.appendChild(newInput)
    return newDiv
}

export const overview = function () {
    const content = clearContentMake('overview')
    const newButton = createNewButton()

    //  DELETE ME -- new item created to simulate addition 
    taskObj.addItem('peepee', 'peepeein the beee beep', 'lightgreen')
    // DELETE ME
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

export const addNew = function () {
    const content = clearContentMake('new-form')
    const formElement = document.createElement('form')
    formElement.id = 'add-form'

    const newH1 = document.createElement('h1')
    newH1.textContent = 'New Task'

    const newTitle = formLabelInput('title', 'text')

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.id = 'form-submit'

    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        const myFormData = new FormData(document.querySelector('#add-form'));

        const formDataObj = {}
        myFormData.forEach((value, key) => formDataObj[key] = value)

        console.log(formDataObj)
        return
    })


    content.appendChild(newH1)
    formElement.appendChild(newTitle)
    formElement.appendChild(submitButton)
    content.appendChild(formElement)
}