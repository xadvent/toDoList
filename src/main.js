import makeAll from './basic_page/makeAll';
import addListeners from './content_tabs/addListeners';
import './style.css'

export class Task {
    constructor(title, description, importance) {
        this.title = title
        this.description = description
        this.importance = importance
        this.completed = false
    }

    complete() {
        this.completed = true
        return
    }
    removeSelf() {
        taskList.splice(taskList.indexOf(this))
        return
    }
}

const Holder = (function () {
    let tasklist = []

    const clear = function () {
        document.querySelectorAll('.task-item').forEach(e => e.remove())
    }
    const refresh = function () {
        const content = document.querySelector('#content')
        for (let i = 0; i < tasklist.length; i++) {
            const createdTask = document.createElement('div')
            createdTask.classList.add('task-item')
            console.log(tasklist[i])
            const iterable = tasklist[i]
            for (let [key, value] of Object.entries(iterable)) {
                console.log(key)
                console.log(value)
                if (key === 'importance'){
                    console.log(document.querySelectorAll('.task-item')[tasklist.indexOf(this)])
                }
                const info = document.createElement('h3')
                info.classList.add('task-info', key)
                info.textContent = value
                createdTask.appendChild(info)
            }
            content.appendChild(createdTask)
        }

    }
    const addItem = function (title, descr, importance) {
        const newTask = new Task(title, descr, importance)
        clear()
        tasklist.push(newTask)
    }

    return {
        tasklist,
        clear,
        refresh,
        addItem
    }
})()
export const taskObj = Holder
taskObj.addItem('peepee', 'peepeein the toilet', '1')
taskObj.addItem('peepee', 'peepeein the toilet', '1')


makeAll()
addListeners()