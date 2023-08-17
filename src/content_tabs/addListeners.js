import { addNew } from "./addNew"
import { overview } from "./tabCreation"
import { thisWeek } from "./tabCreation"
import { month } from "./tabCreation"

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
}