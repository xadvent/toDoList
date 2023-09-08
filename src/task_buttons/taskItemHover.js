import { clickDelete, clickFinish, editTask } from "./taskItemHoverFunctions";

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
            item.classList.add('expanded');
            if (!buttonsCreated) {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('button-container');
        
                const finishBox = createButton('Finish', 'delete-button', clickFinish);
                const deleteBox = createButton('Delete', 'remove-button', clickDelete);
                const editBox = createButton('Edit', 'edit-button', editTask);
        
                // Attach event listeners to the dynamically created buttons
                finishBox.onclick = clickFinish;
                deleteBox.onclick = clickDelete;
                editBox.onclick = editTask;
        
                this.appendChild(containerDiv);
                containerDiv.appendChild(finishBox);
                containerDiv.appendChild(editBox);
                containerDiv.appendChild(deleteBox);
        
                setTimeout(() => {
                    finishBox.classList.add('visible');
                    deleteBox.classList.add('visible');
                    editBox.classList.add('visible');
                }, 10);
        
                buttonsCreated = true;
            } else {
                handleMouseLeave();
            }
        }
        

        function handleMouseLeave() {
            item.classList.remove('expanded')
            const buttons = item.querySelectorAll('.delete-button, .remove-button, .edit-button')
            buttons.forEach(button => button.remove())

            const containerDiv = document.querySelector('.button-container')
            containerDiv? containerDiv.remove() : null

            buttonsCreated = false
        }

        item.addEventListener('click', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
    });
}