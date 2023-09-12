/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import { isPast, format } from "date-fns"
import clearContentMake from "../clearContentMake"
import { createNewButton } from "../sidebar_elements/sidebarTabCreation"
// eslint-disable-next-line import/no-cycle
import { projectContainer } from "../../task_controls/taskManagers"

// ADD : NAME to prevent error message from chrome... Not needed but do later
export const formLabelInput = (label, input, length) => {
    const container = document.createElement('div')
    container.classList.add('form-info')

    const newLabel = document.createElement('label')
    const formattedName = label[0].toUpperCase() + label.substr(1)

    newLabel.setAttribute('for', label)
    newLabel.textContent = formattedName

    let newInput; 
    if (input === 'textarea') {
        newInput = document.createElement('textarea')
        newInput.setAttribute('cols', '25')
        newInput.setAttribute('rows', '6')
    } else {
        newInput = document.createElement('input')
        newInput.type = input
    }

    newInput.id = label
    newInput.setAttribute('required', '')
    newInput.minLength = 1
    newInput.maxLength = length
    newInput.name = label

    container.appendChild(newLabel)
    container.appendChild(newInput)
    return container
}

export const createOption = function (value, textContent) {
    const option = document.createElement('option')
    option.value = value
    option.textContent = textContent
    return option
}

const validateForm = (formDataObj) => {
    if (formDataObj.title.length < 1 || formDataObj.description.length < 1) {
        return 'Form Invalid: Entries must be at least 1 character.';
    }
    const dueDate = new Date(formDataObj.date);
    if (isPast(dueDate)) {
        return 'Form Invalid: Date cannot be in the past.';
    }

    return null; // Validation passed
}

export const submitFunction = function (event){
    event.preventDefault();
    const content = document.querySelector('#content');
    const myFormData = new FormData(document.querySelector('#add-form'));

    const formDataObj = {};
    myFormData.forEach((value, key) => formDataObj[key] = value);

    const validationError = validateForm(formDataObj)
    if (validationError) {
        // document.querySelector('#add-form').reset()
        return alert(validationError)
    }

    let dueDateFormatted;
    (formDataObj.date) ? dueDateFormatted = format(new Date(formDataObj.date), 'yyyy-MM-dd') : dueDateFormatted = 'Never'

    projectContainer.addTaskToProject(formDataObj.project, formDataObj.title, formDataObj.description, formDataObj.importance, dueDateFormatted);
    clearContentMake('overview');
    projectContainer.allTaskManager.refresh();
    content.appendChild(createNewButton());
};