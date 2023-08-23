import { allTaskManager } from "../../task_controls/objectHolders"
import { isPast } from "date-fns"
import clearContentMake from "../clearContentMake"
import { createNewButton } from "../sidebar_elements/sidebarTabCreation"
import { format } from "date-fns"

// ADD : NAME to prevent error message from chrome... Not needed but do later
export const formLabelInput = (label, input, length) => {
    const container = document.createElement('div')
    container.classList.add('form-info')

    const newLabel = document.createElement('label')
    const newInput = document.createElement('input')
    const formattedName = label[0].toUpperCase() + label.substr(1)

    newLabel.setAttribute('for', label)
    newLabel.textContent = formattedName

    newInput.id = label
    newInput.setAttribute('required', '')
    newInput.minLength = 1
    newInput.maxLength = length
    newInput.name = label
    newInput.type = input

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

const validateForm = (formDataObj) =>{
    if (formDataObj.title.length < 1 || formDataObj.description.length < 1) {
        return 'Form Invalid: Entries must be at least 1 character.';
    }
    const dueDate = new Date(formDataObj.date);
    if (isPast(dueDate)) {
        return 'Form Invalid: Date cannot be in the past.';
    }

    return null; // Validation passed
}

export const submitFunction = function (event) {
    event.preventDefault();
    const content = document.querySelector('#content');
    const myFormData = new FormData(document.querySelector('#add-form'));

    const formDataObj = {};
    myFormData.forEach((value, key) => formDataObj[key] = value);

    const validationError = validateForm(formDataObj)
    if (validationError) {
        document.querySelector('#add-form').reset()
        return alert(validationError)
    }

    let dueDateFormatted;
    (formDataObj.date) ? dueDateFormatted = format(new Date(formDataObj.date), 'yyyy-MM-dd') : dueDateFormatted = 'Never'

    allTaskManager.addItem(formDataObj.title, formDataObj.description, formDataObj.importance, dueDateFormatted);
    clearContentMake('overview');
    allTaskManager.refresh();
    content.appendChild(createNewButton());
};
