import { clickDelete, clickFinish } from "./taskItemHoverFunctions";

function createButton(text, className, clickHandler) {
    const button = document.createElement('button')
    button.classList.add(className, 'button-fade-in')
    button.innerText = text
    button.onclick = clickHandler
    return button
}

export default function () {
    const taskItems = document.querySelectorAll('.task-item');

    taskItems.forEach(item => {
        let buttonsCreated = false; 

        function handleMouseEnter(event) {
            item.classList.add('expanded')
            if (!buttonsCreated) {
                const finishBox = createButton('Finish', 'delete-button', clickFinish)
                const deleteBox = createButton('Delete', 'remove-button', clickDelete)

                this.appendChild(finishBox)
                this.appendChild(deleteBox)

                setTimeout(() => {
                    finishBox.classList.add('visible')
                    deleteBox.classList.add('visible')
                }, 10);

                buttonsCreated = true;
            } else{
                handleMouseLeave()
            }
        }

        function handleMouseLeave() {
            item.classList.remove('expanded')
            const buttons = item.querySelectorAll('.delete-button, .remove-button')
            buttons.forEach(button => button.remove())

            buttonsCreated = false
        }

        item.addEventListener('click', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
    });
}