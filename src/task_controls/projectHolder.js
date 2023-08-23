import { Holder } from "./objectHolders"
import { taskObj } from "./objectHolders"

export const Projects = (function(){
    let projectList = []

    const addProject= (name)=>{
        name = Holder()
        projectList.push(name)
    }
    const displayProjects = function(){
        const content = document.querySelector('#content')
        projectList.forEach(item =>{
            const projectDiv = document.createElement('div')
            projectDiv.classList.add('item') 
            content.appendChild(projectDiv)
            return
        })
    }

    const getProject = (title) =>{
        const holder = projectList.filter(e => e === title)
        return holder
    }

    return {
        getProject,
        displayProjects,
        addProject
    }
})()
Projects.addProject('Checking')
Projects.addProject('cool')