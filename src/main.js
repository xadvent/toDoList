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

function* entries(obj){
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

export const Holder = (function () {
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
            for (let [key, value] of entries(iterable)) {
                console.log(key)
                console.log(value)
                const info = document.createElement('div')
                info.classList.add('task-info')
                info.classList.add(key)
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
taskObj.addItem('peepee', 'peepeein the toilet', 'very')


makeAll()
addListeners()