import makeAll from './basic_page/makeAll';
import addListeners from './content_tabs/addListeners';
import './style.css'

export class Task {
    constructor(title, description, importance, completed) {
        this.title = title
        this.description = description
        this.importance = importance
        // CHANGE IMPORTANCE TO A NUMBER?
        this.completed = completed ? true: false
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
            const iterable = tasklist[i]
            for (let [key, value] of Object.entries(iterable)) {

                // add a switch to change the value of src if it's important
                const info = document.createElement('h3')
                switch (key) {
                    case ('importance'):
                        createdTask.style = `background-color: ${value}`
                        break;
                    case ('completed'):
                        if (value) {
                            createdTask.style = 'background-color: grey';
                            createdTask.classList.add('finished')
                        } else 
                        break
                    default:
                        info.classList.add('task-info', key)
                        info.textContent = value
                        createdTask.appendChild(info)
                }
            }
            content.appendChild(createdTask)
        }

    }
    const addItem = function (title, descr, importance, completed) {
        const newTask = new Task(title, descr, importance, completed)
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
taskObj.addItem('love baby', 'tell vero I love her', 'red')
taskObj.addItem('Doggies', 'pet dogs', 'skyblue', false)
taskObj.addItem('Water', 'Drink water', 'skyblue', true)


makeAll()
addListeners()