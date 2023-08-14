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

const formLabelInput = (label, input) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('form-info')
    const newLabel = document.createElement('label')
    const newInput = document.createElement('input')
    const formattedName = label[0].toUpperCase() + label.substr(1)

    newLabel.setAttribute('for', label)
    newLabel.textContent = formattedName

    newInput.id = label
    newInput.setAttribute('required', '')
    newInput.minLength = 1
    newInput.maxLength = 20
    newInput.name = label
    newInput.type = input

    newDiv.appendChild(newLabel)
    newDiv.appendChild(newInput)
    return newDiv
}

export const overview = function () {
    const content = clearContentMake('overview')

    //  DELETE ME -- new item created to simulate addition 
    taskObj.addItem('New Task', 'Place-Holder to see formatting', 'lightgreen')
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
    const newDescription = formLabelInput('description', 'text')

    const createdDiv = document.createElement('div')
    createdDiv.classList.add('form-info')

    const selectLabel = document.createElement('label')
    selectLabel.setAttribute('for', 'importance')
    selectLabel.textContent = 'Importance'
    createdDiv.appendChild(selectLabel)

    const importancePicker = document.createElement('select')
    importancePicker.setAttribute('name', 'importance')
    importancePicker.setAttribute('required', '')
    const opt1 = document.createElement('option')
    const opt2 = document.createElement('option')
    const opt3 = document.createElement('option')

    opt1.value = 'red'
    opt1.textContent = 'Priority'
    opt2.value = 'skyblue'
    opt2.textContent = 'Medium'
    opt2.setAttribute('default', '')
    opt3.value = 'lightgreen'
    opt3.textContent = 'No Rush'

    importancePicker.appendChild(opt1)
    importancePicker.appendChild(opt2)
    importancePicker.appendChild(opt3)
    createdDiv.appendChild(importancePicker)

    //submitFx
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.id = 'form-submit'
    submitButton.textContent = 'Submit'
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        const content = document.querySelector('#content')
        const myFormData = new FormData(document.querySelector('#add-form'));

        const formDataObj = {}
        myFormData.forEach((value, key) => formDataObj[key] = value)

        if (formDataObj.title.length <1 || formDataObj.description.length < 1){
            document.querySelector('#add-form').reset()
            return alert('Form Invalid: Entries must be at least 1 character.')
        }

        console.log(formDataObj)
        taskObj.addItem(formDataObj.title, formDataObj.description, formDataObj.importance)
        clearContentMake('overview')
        taskObj.refresh()
        content.appendChild(createNewButton())
        return
    })

    content.appendChild(newH1)
    formElement.appendChild(newTitle)
    formElement.appendChild(newDescription)
    formElement.appendChild(createdDiv)
    formElement.appendChild(submitButton)
    content.appendChild(formElement)
}