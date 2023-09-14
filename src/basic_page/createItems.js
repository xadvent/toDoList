
import { createNewButton } from "../content_tabs/sidebar_elements/sidebarTabCreation";
import taskItemHover from "../task_buttons/taskItemHover";
import getDifferenceDate from "../task_controls/getDifferenceDate";

// ONLY RETURNING POSITIVES - NOT EVEN BRINGING UP THE X DAYS
// FIX LATER
const simpleReformat = function(value){
    const days = value.split(' ')[0]
    return days
}

const checkIfDisplayed = function(){
    const taskItems = document.querySelector('.task-item')
    if (!taskItems) return
    if (taskItems.length){
        return false
    } 
    return true
}

export default function(tasklist, dateImportance) {
    const content = document.querySelector('#content');
    if (checkIfDisplayed()) return console.log('stopped')
    content.innerHtml = ''
    if (tasklist.length < 1) return;

    tasklist.forEach(task => {
        const createdTask = document.createElement('div');
        createdTask.classList.add('task-item');

        let finished = false

        for (const [key, value] of Object.entries(task)) {
            const info = document.createElement('h3');

            switch (key) {
                case 'importance':
                    createdTask.classList.add(value);
                    break;

                case 'completed':
                    if (value){
                        createdTask.classList.add('finished')
                        finished = true
                    }
                    break;

                case 'date':
                    info.textContent = getDifferenceDate(value);
                    info.classList.add('task-info', key);
                    if(dateImportance){
                        createdTask.classList.add('weekly-task')
                        const days = simpleReformat(info.textContent)
                        createdTask.style.order = `${days}`
                    }                         
                    createdTask.appendChild(info);
                    break;

                case 'project':
                    break;

                default:
                    info.classList.add('task-info', key);
                    info.textContent = value;
                    createdTask.appendChild(info);
                    break;
            }
        }
        if (finished) createdTask.style.order = '1000'
        content.appendChild(createdTask);
    });
    taskItemHover()
    createNewButton()
}
