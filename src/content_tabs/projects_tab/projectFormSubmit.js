import { projectContainer } from "../../task_controls/taskManagers";
import { makeProjects } from "./display";
import clearContentMake from "../clearContentMake";

export default function(event){
    event.preventDefault()
    const myFormData = new FormData(document.querySelector('#new-project'));

    const formDataObj = {};
    myFormData.forEach((value, key) => formDataObj[key] = value);
    projectContainer.addProject(formDataObj.project)
    clearContentMake('projects-tab')
    makeProjects()
}