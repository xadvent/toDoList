import clearContentMake from "../clearContentMake";
import projectFormSubmit from "./projectFormSubmit";

export default function(){
    const content = document.querySelector('#content')
    const header = document.createElement('h1')
    const form = document.createElement('form')

    header.textContent = 'New Project'

    form.id = 'new-project'

    const formDiv = document.createElement('div')
    formDiv.classList.add('form-info')

    const label = document.createElement('label')
    label.setAttribute('for', 'project')
    label.textContent = 'Project Name'

    const inp = document.createElement('input')
    inp.id = 'project'
    inp.setAttribute('name', 'project')

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'form-submit';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', projectFormSubmit);

    clearContentMake('add-project')

    formDiv.appendChild(label)
    formDiv.appendChild(inp)
    form.appendChild(formDiv)
    form.appendChild(submitButton)

    content.appendChild(header)
    content.appendChild(form)
}