import { getDifference } from './getDate';
import taskItemHover from '../task_buttons/taskItemHover';

class Task {
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

    removeSelf(tasklist) {
        const index = tasklist.indexOf(this)
        if (index !== -1) {
            tasklist.splice(index, 1)
        }
    }
}

export class TaskManager {
    constructor() {
        this.tasklist = []
    }

    clear() {
        document.querySelectorAll('.task-item').forEach(e => e.remove())
    }

    getRemove(taskName) {
        return this.tasklist.find(thing => thing.title === taskName)
    }

    refresh() {
        const content = document.querySelector('#content')
        this.clear()

        this.tasklist.forEach(task => {
            const createdTask = document.createElement('div')
            createdTask.classList.add('task-item')
            for (let [key, value] of Object.entries(task)) {
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
        })
        taskItemHover()
    }

    addItem(title, descr, importance, date) {
        const newTask = new Task(title, descr, importance, date)
        this.clear()
        return this.tasklist.push(newTask)
    }
}


export const allTaskManager = new TaskManager()
allTaskManager.addItem('love baby', 'tell vero I love her', 'high-priority', 'NaN-NaN')
allTaskManager.addItem('Doggies', 'pet dogs', 'medium-priority', '2023-10-21')
allTaskManager.addItem('Water', 'Drink water', 'low-priority', '2026-21-21')
