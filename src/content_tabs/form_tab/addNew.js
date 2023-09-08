import clearContentMake from "../clearContentMake";
import { formLabelInput, createOption, submitFunction} from "./addNewFunctions";
import { projectContainer } from "../../task_controls/taskManagers";

export const addNew = function () {
    // Checking if in project tab
    const projectH1 = document.querySelector('#project-showing')

    // Clear existing content and create the form element
    const content = clearContentMake('new-form');
    const formElement = document.createElement('form');
    formElement.id = 'add-form';

    // Create the form title
    const newH1 = document.createElement('h1');
    newH1.textContent = 'New Task';

    // Define maximum character lengths
    const maxTitleLength = 15;
    const maxDescriptionLength = 120;

    // Create form fields for title and description
    const newTitle = formLabelInput('title', 'text', maxTitleLength);
    const newDescription = formLabelInput('description', 'textarea', maxDescriptionLength);

    // Create a container for importance selection
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('form-info');

    // Create the importance label
    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'importance');
    selectLabel.textContent = 'Importance';
    createdDiv.appendChild(selectLabel);

    // Create the importance dropdown
    const importancePicker = document.createElement('select');
    importancePicker.setAttribute('name', 'importance');
    importancePicker.setAttribute('required', '');
    importancePicker.id = 'importance'

    // Create importance options
    const opt1 = createOption('high-priority', 'High');
    const opt2 = createOption('medium-priority', 'Medium');
    const opt3 = createOption('low-priority', 'Low');
    opt2.setAttribute('selected', 'selected');

    // Create a container for the due date field
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('form-info');

    // Create the due date label
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Due Date';

    // Create the date input field
    const setDate = document.createElement('input');
    setDate.id = 'date'
    setDate.classList.add('form-date');
    setDate.setAttribute('type', 'date');
    setDate.setAttribute('name', 'date');

    // Set minimum date to today
    const _date = new Date();
    const dateMonth = _date.getMonth().toString().padStart(2, '0');
    const todaysDate = `${_date.getFullYear()}-${dateMonth}-${_date.getDate()}`;
    setDate.min = todaysDate;

    // Append date label and input to the date container
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(setDate);

    // Append importance options to the dropdown
    importancePicker.appendChild(opt1);
    importancePicker.appendChild(opt2);
    importancePicker.appendChild(opt3);

    // Append the importance dropdown to its container
    createdDiv.appendChild(importancePicker);

    // Create project select and label
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('form-info')
    const projectLabel = document.createElement('label')
    const projectSelect = document.createElement('select')

    projectLabel.setAttribute('for', 'project')
    projectLabel.textContent = 'Project'
    projectSelect.setAttribute('name', 'project')
    projectSelect.id = 'project'

    projectContainer.projectList.forEach(project => {
        const newOption = document.createElement('option')
        newOption.setAttribute('value', project.name)
        newOption.textContent = project.name

        return projectSelect.appendChild(newOption)
    })

    projectDiv.appendChild(projectLabel)
    projectDiv.appendChild(projectSelect)

    // Create and configure the submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'form-submit';
    submitButton.textContent = 'Submit';

    const doFunction = function(event) {
        event.preventDefault()
        if (projectH1){
            projectSelect.value = projectH1.textContent
            submitFunction(event, projectH1)
        } else {
            submitFunction(event, projectH1)
        }
    }

    submitButton.addEventListener('click', doFunction)

    // Append elements to the content
    content.appendChild(newH1);
    formElement.appendChild(newTitle);
    formElement.appendChild(newDescription);
    formElement.appendChild(createdDiv);
    formElement.appendChild(projectDiv)
    formElement.appendChild(dateDiv);
    formElement.appendChild(submitButton);
    content.appendChild(formElement);
};
