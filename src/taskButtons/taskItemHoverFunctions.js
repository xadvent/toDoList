
import { taskObj } from "../taskControls/objectHolders"

export const clickFinish = function () {
    const infoTitle = this.parentElement.firstChild.textContent
    const taskToFinish = taskObj.getRemove(infoTitle)
    if (taskToFinish) {
        taskToFinish.complete()
        taskObj.refresh()
    }
}

export const clickDelete = function () {
    const infoTitle = this.parentElement.firstChild.textContent
    const taskToRemove = taskObj.getRemove(infoTitle)
    if (taskToRemove) {
        taskToRemove.removeSelf(taskObj.tasklist)
        taskObj.refresh()
    }
}