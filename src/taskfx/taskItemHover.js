import { taskObj } from "../main";
import { clickDelete } from "./taskItemHoverFunctions";
import { clickFinish } from "./taskItemHoverFunctions";

export default function () {
    const taskItems = document.querySelectorAll('.task-item');

    taskItems.forEach(item => {
        let buttonsCreated = false; // Flag to track if buttons are already created

        item.addEventListener('click', function (event) {
            if (!buttonsCreated) {
                const finishBox = document.createElement('button');
                finishBox.classList.add('delete-button', 'button-fade-in');
                finishBox.innerText = 'Finish';
                finishBox.onclick = clickFinish

                const deleteBox = document.createElement('button');
                deleteBox.classList.add('remove-button', 'button-fade-in');
                deleteBox.innerText = 'Delete';
                deleteBox.onclick = clickDelete

                this.appendChild(finishBox);
                this.appendChild(deleteBox);

                setTimeout(() => {
                    finishBox.classList.add('visible');
                    deleteBox.classList.add('visible');
                }, 10); // Delay to allow the element to be added to the DOM

                buttonsCreated = true;
            }
        });

        item.addEventListener('mouseleave', function () {
            // Remove the buttons when mouse leaves the task item
            const buttons = item.querySelectorAll('.delete-button, .remove-button');
            buttons.forEach(button => button.remove());

            buttonsCreated = false; // Reset the flag when buttons are removed
        });
    });
}
