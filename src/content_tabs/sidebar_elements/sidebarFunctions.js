import { addNew } from "../form_tab/addNew"
import { overview } from "./sidebarTabCreation"
import { thisWeek } from "./sidebarTabCreation"
import { month } from "./sidebarTabCreation"
import { makeProjects } from "../projects_tab/display"

const listenerFx = function(buttonID, uniqueFunction){
    const current = document.querySelector(`#${buttonID}`)
    current.onclick = uniqueFunction
    return
}
export default function () {
    listenerFx('overview', overview)
    listenerFx('week', thisWeek)
    listenerFx('month', month)
    listenerFx('add-nav', addNew)
    listenerFx('projects', makeProjects)
}