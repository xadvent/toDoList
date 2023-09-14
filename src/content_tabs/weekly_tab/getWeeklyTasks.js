import getDifferenceDate from "../../task_controls/getDifferenceDate"

const checkIfInWeek = function(x){
    const allRelevantDates = []
    x.taskManager.tasklist.forEach(task =>{
        if (!task.date.startsWith('NaN')){
            const difference = getDifferenceDate(task.date)
            difference.split(' ')[0] <= 7 
            ? allRelevantDates.push(task)
            : null
        }
    })
    return allRelevantDates
}

const getListForWeek = function(projectList){
    const tasksThisWeek = []
    projectList.forEach(project =>{
       const tasksPerProject = checkIfInWeek(project) 
       if (tasksPerProject){
        tasksPerProject.forEach(task => tasksThisWeek.push(task))
       }
    })
    return tasksThisWeek
}

export default function(projectList){
    const alltasks = getListForWeek(projectList)
    return alltasks
}