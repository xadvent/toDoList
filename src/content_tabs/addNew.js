import { taskObj } from "../main"
import clearContentMake from "./clearContentMake"
import { createNewButton } from "./tabCreation"
import { getDifference } from "../getDate"

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

    const createOption = function(value, textContent){
        const option = document.createElement('option')
        option.value = value
        option.textContent = textContent
        return option
    }

    const opt1 = createOption('high-priority', 'High')
    const opt2 = createOption('medium-priority', 'Medium')
    const opt3 = createOption('low-priority', 'Low')
    opt2.setAttribute('selected', 'selected')

    const dateDiv = document.createElement('div')
    dateDiv.classList.add('form-info')
    const dateLabel = document.createElement('label')
    dateLabel.setAttribute('for', 'date')
    dateLabel.textContent = "Due Date"
    const setDate = document.createElement('input')
    setDate.classList.add('form-date')
    const _date = new Date()
    const dateMonth = _date.getMonth().length != 2 ? 0+_date.getMonth() : _date.getMonth()

    const todaysDate= `${_date.getFullYear()}-${dateMonth}-${_date.getDate()}`
    setDate.setAttribute('type', 'date')
    setDate.setAttribute('name', 'date')
    setDate.min = todaysDate
    dateDiv.appendChild(dateLabel)
    dateDiv.appendChild(setDate)

    importancePicker.appendChild(opt1)
    importancePicker.appendChild(opt2)
    importancePicker.appendChild(opt3)
    createdDiv.appendChild(importancePicker)

    // submitFx
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.id = 'form-submit'
    submitButton.textContent = 'Submit'
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const content = document.querySelector('#content');
        const myFormData = new FormData(document.querySelector('#add-form'));
    
        const formDataObj = {};
        myFormData.forEach((value, key) => formDataObj[key] = value);
    
        if (formDataObj.title.length < 1 || formDataObj.description.length < 1) {
            document.querySelector('#add-form').reset();
            return alert('Form Invalid: Entries must be at least 1 character.');
        }else if  ((new Date()) > (new Date(formDataObj.date))) {
            return alert('Form Invalid: Date must be in the future.')
        }
    

        const dueDate = new Date(formDataObj.date);
        // formatted the date as YYYY-MM-DD
        const dueDateFormatted = `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}`;
        const dueDateDifference = getDifference(dueDateFormatted); // Calculate the difference using your getDifference function
    
    
        taskObj.addItem(formDataObj.title, formDataObj.description, formDataObj.importance,  dueDateFormatted);
        clearContentMake('overview');
        taskObj.refresh();
        content.appendChild(createNewButton());
    });
    

    content.appendChild(newH1)
    formElement.appendChild(newTitle)
    formElement.appendChild(newDescription)
    formElement.appendChild(createdDiv)
    formElement.appendChild(dateDiv)
    formElement.appendChild(submitButton)
    content.appendChild(formElement)
}