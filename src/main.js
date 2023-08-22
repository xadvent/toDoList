import makeAll from './basic_page/makeAll';
import addListeners from './content_tabs/addListeners';
import './style.css'
import taskItemHover from './taskfx/taskItemHover';
import { getDifference } from './getDate';
import { overview } from './content_tabs/tabCreation';

export class Task {
    constructor(title, description, importance, date) {
        this.title = title
        this.description = description
        this.importance = importance
        this.completed = false
        this.date = date
    }
    complete() {
        this.completed = !this.completed
        return
    }
    removeSelf(taskList) {
        const index = taskList.indexOf(this)
        if (index !== -1) {
            taskList.splice(index, 1)
        }
    }
}

const Holder = function () {
    let tasklist = []

    const clear = function () {
        document.querySelectorAll('.task-item').forEach(e => e.remove())
    }

    const getRemove = function (taskName) {
        return tasklist.find(thing => thing.title === taskName)
    }
    const refresh = function () {
        const content = document.querySelector('#content')
        clear()
        for (let i = 0; i < tasklist.length; i++) {
            const createdTask = document.createElement('div')
            createdTask.classList.add('task-item')
            const iterable = tasklist[i]
            for (let [key, value] of Object.entries(iterable)) {

                const info = document.createElement('h3')
                switch (key) {
                    case ('importance'):
                        createdTask.classList.add(value)
                        break;
                    case ('completed'):
                        if (value) {
                            createdTask.classList.add('finished')
                        }
                        break
                    case ('date'):
                        info.textContent = getDifference(value)
                        info.classList.add('task-info', key)
                        createdTask.appendChild(info)
                        break
                    default:
                        info.classList.add('task-info', key)
                        info.textContent = value
                        createdTask.appendChild(info)
                        break
                }
            }
            content.appendChild(createdTask)
        }
        taskItemHover()

    }
    const addItem = function (title, descr, importance, date) {
        const newTask = new Task(title, descr, importance, date)
        clear()
        return tasklist.push(newTask)
    }

    return {
        tasklist,
        clear,
        refresh,
        addItem,
        getRemove
    }
}
export const taskObj = Holder()
taskObj.addItem('love baby', 'tell vero I love her', 'high-priority', 'NaN-NaN')
taskObj.addItem('Doggies', 'pet dogs', 'medium-priority', '2023-10-21')
taskObj.addItem('Water', 'Drink water', 'low-priority', '2026-21-21')

makeAll()
addListeners()
overview()