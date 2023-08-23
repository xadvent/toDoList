import { Projects } from "../../main";
import clearContentMake from "../clearContentMake";
import { createNewButton } from "../tabCreation";

export const makeProjects = function () {
    const content = clearContentMake('projects')
    content.appendChild(createNewButton('projects'))
}