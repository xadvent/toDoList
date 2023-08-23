import clearContentMake from "../clearContentMake";
import { formLabelInput, createOption, submitFunction } from "./addNewFunctions";

export const addNew = function () {
    const content = clearContentMake('new-form');
    const formElement = document.createElement('form');
    formElement.id = 'add-form';

    const newH1 = document.createElement('h1');
    newH1.textContent = 'New Task';

    const maxTitleLength = 10;
    const maxDescriptionLength = 90;

    const newTitle = formLabelInput('title', 'text', maxTitleLength);
    const newDescription = formLabelInput('description', 'textarea', maxDescriptionLength);

    const createdDiv = document.createElement('div');
    createdDiv.classList.add('form-info');

    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'importance');
    selectLabel.textContent = 'Importance';
    createdDiv.appendChild(selectLabel);

    const importancePicker = document.createElement('select');
    importancePicker.setAttribute('name', 'importance');
    importancePicker.setAttribute('required', '');

    const opt1 = createOption('high-priority', 'High');
    const opt2 = createOption('medium-priority', 'Medium');
    const opt3 = createOption('low-priority', 'Low');
    opt2.setAttribute('selected', 'selected');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('form-info');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Due Date';
    const setDate = document.createElement('input');
    setDate.classList.add('form-date');
    const _date = new Date();
    const dateMonth = _date.getMonth().toString().padStart(2, '0');

    const todaysDate = `${_date.getFullYear()}-${dateMonth}-${_date.getDate()}`;
    setDate.setAttribute('type', 'date');
    setDate.setAttribute('name', 'date');
    setDate.min = todaysDate;
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(setDate);

    importancePicker.appendChild(opt1);
    importancePicker.appendChild(opt2);
    importancePicker.appendChild(opt3);
    createdDiv.appendChild(importancePicker);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'form-submit';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', submitFunction);

    content.appendChild(newH1);
    formElement.appendChild(newTitle);
    formElement.appendChild(newDescription);
    formElement.appendChild(createdDiv);
    formElement.appendChild(dateDiv);
    formElement.appendChild(submitButton);
    content.appendChild(formElement);
};
