import { addNew } from "./formTab/addNew"
import { overview } from "./tabCreation"
import { thisWeek } from "./tabCreation"
import { month } from "./tabCreation"
import { makeProjects } from "./projectsTab/display"

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