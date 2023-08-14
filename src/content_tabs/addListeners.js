import { overview } from "./tabCreation"
import { thisWeek } from "./tabCreation"
import { month } from "./tabCreation"
import { addNew } from "./tabCreation"

export const listenerFx = function(buttonID, uniqueFunction){
    const content = document.querySelector('#content')
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