import { projectContainer } from "../../task_controls/taskManagers";
import clearContentMake from "../clearContentMake";
import { createNewButton } from "../sidebar_elements/sidebarTabCreation";
import getWeeklyTasks from "./getWeeklyTasks";
import createItems from "../../basic_page/createItems";


const thisWeek = function () {
    const content = clearContentMake('week')
    content.appendChild(createNewButton())
}


export default function(){
    const content = clearContentMake('weekly')
    const newH1 = document.createElement('h1')
    newH1.textContent = 'This Week'
    const allTasksForWeek = getWeeklyTasks(projectContainer.projectList)

    content.appendChild(newH1)
    

   createItems(allTasksForWeek, true)
   content.appendChild(createNewButton())
}