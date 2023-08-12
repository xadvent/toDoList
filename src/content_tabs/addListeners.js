const allButtons = document.querySelectorAll('.nav-list')
export const listenerFx = function(buttonID, uniqueFunction){
    const current = document.querySelector(`#${buttonID}`)
    buttonID.onClick = uniqueFunction
    return
}
const stupidFx = function(IDButton){
    const stupid = document.querySelector(`#${IDButton}`)
    stupid.onclick = function(){
        console.log(this)
    }
}
export default function () {
    stupidFx('overview')


}