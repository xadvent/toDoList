import { projectContainer, Task, Project } from "./taskManagers";

const loadProjectsFromLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("project-")) {
            const projectAsString = localStorage.getItem(key);

            // Parse the JSON data into a JavaScript object
            const projectData = JSON.parse(projectAsString);

            if (projectData && projectData.name) {
                const project = Project.fromJSON(projectData);
                projectContainer.projectList.push(project);
                project.taskManager.tasklist.forEach(task => {
                    const newTask = Task.fromJSON(task)
                    projectContainer.allTaskManager.tasklist.push(newTask)
                })
            }
        } 
        projectContainer.allTaskManager.refresh()
    }
}


export const checkGetStored = function(){
    if (localStorage.getItem('tasks') !== null) {
        loadProjectsFromLocalStorage()
    } else {
        projectContainer.addProject('Homework')
        projectContainer.addTaskToProject('Homework', 'Daily Assignment', 'Do the daily assignment for whatever class it is you\'re taking right now. Everybody knows that it is dumb, but what can you do.', 'high-priority', 'Never')
        const message = 'Finish my paper regarding the legality of cloning T-rex\'s.'
        projectContainer.addTaskToProject('Homework', "Paper", message, 'high-priority', 'Never')

        projectContainer.addProject('Writing pages')
        projectContainer.addTaskToProject('Writing pages', 'Script One', 'Write hella pages of script 4 and come up with a good ending.', 'medium-priority', '2023-08-30')
        projectContainer.addTaskToProject('Writing pages', 'Script Two', 'Finish Script 5 by the deadline.', 'medium-priority', '2023-09-20')
    }
}