import addNew from "../form_tab/addNew"
import { makeProjects } from "../projects_tab/display"
import { overview , thisWeek , month } from "./sidebarTabCreation"
import { projectForm } from "../projects_tab/projectForm"

const listenerFx = function(buttonID, uniqueFunction){
    const current = document.querySelector(`#${buttonID}`)
    current.onclick = uniqueFunction
    
}
export default function () {
    listenerFx('overview', overview)
    listenerFx('week', thisWeek)
    listenerFx('month', month)
    listenerFx('add-nav', addNew)
    listenerFx('projects', makeProjects)
    listenerFx('add-project', projectForm)
}