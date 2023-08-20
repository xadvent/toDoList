import { taskObj } from "../../main"
import { isPast } from "date-fns"
import { getDifference } from "../../getDate"
import clearContentMake from "../clearContentMake"
import { createNewButton } from "../tabCreation"

export const formLabelInput = (label, input, length) => {
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
    newInput.maxLength = length
    newInput.name = label
    newInput.type = input

    newDiv.appendChild(newLabel)
    newDiv.appendChild(newInput)
    return newDiv
}

export const createOption = function (value, textContent) {
    const option = document.createElement('option')
    option.value = value
    option.textContent = textContent
    return option
}

export const submitFunction = function (event) {
    event.preventDefault();
    const content = document.querySelector('#content');
    const myFormData = new FormData(document.querySelector('#add-form'));

    const formDataObj = {};
    myFormData.forEach((value, key) => formDataObj[key] = value);

    if (formDataObj.title.length < 1 || formDataObj.description.length < 1) {
        document.querySelector('#add-form').reset();
        return alert('Form Invalid: Entries must be at least 1 character.');
    } 
    const dueDate = new Date(formDataObj.date);
    if (isPast(dueDate)){
        return alert('Form Invalid: Date cannot be in the past.')
    }

    const dueDateFormatted = `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}`;
    const dueDateDifference = getDifference(dueDateFormatted); // Calculate the difference using your getDifference function

    console.log(formDataObj);
    console.log(dueDateFormatted);
    console.log(dueDateDifference);

    taskObj.addItem(formDataObj.title, formDataObj.description, formDataObj.importance, dueDateFormatted);
    clearContentMake('overview');
    taskObj.refresh();
    content.appendChild(createNewButton());
};
