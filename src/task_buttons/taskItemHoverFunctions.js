import { allTaskManager } from "../task_controls/objectHolders"

const getTaskByTitle = (current) => {
    const infoTitle = current.parentElement.firstChild.textContent
    const changingTask = allTaskManager.getRemove(infoTitle)
    return changingTask
}

export const clickFinish = function () {
    const taskToFinish = getTaskByTitle(this)
    if (taskToFinish) {
        taskToFinish.complete()
        allTaskManager.refresh()
    } else {
        console.error("Task not found.")
    }
}

export const clickDelete = function () {
    const taskToRemove = getTaskByTitle(this)
    if (taskToRemove) {
        taskToRemove.removeSelf(allTaskManager.tasklist)
        allTaskManager.refresh()
    } else {
        console.error('Task not found.')
    }
}