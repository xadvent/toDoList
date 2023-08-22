import Monthly from '../img/calendar.svg'
import Weekly from '../img/view-week.svg'
import Overview from '../img/check-all.svg'
import Plus from '../img/plus-thick.svg'
import Projects from '../img/note-multiple.svg'

const makeLi = function(name){
    const navButton = document.createElement('button')
    const NavText = document.createElement('p')
    NavText.textContent = name

    const newPic = new Image()
    newPic.classList.add('nav-image')
    switch (name) {
        case "Overview":
           newPic.src = Overview 
           break;
        case "This Week":
            newPic.src = Weekly
            break;
        case "Month":
            newPic.src = Monthly
            break;
        case "Projects":
            newPic.src = Projects
            break;
        case "Add New":
            newPic.src = Plus
            break;
    };
    

    navButton.appendChild(newPic)
    navButton.appendChild(NavText)
    navButton.classList.add('nav-button')


    return navButton
}


export default function(){
    const sidebar = document.querySelector('#sidebar')

    const overview = makeLi('Overview')
    overview.id = 'overview'
    sidebar.appendChild(overview)

    const projects = makeLi('Projects')
    projects.id = 'projects'
    sidebar.appendChild(projects)

    const thisWeek = makeLi('This Week')
    thisWeek.id = 'week'
    sidebar.appendChild(thisWeek)

    const month = makeLi("Month")
    month.id = 'month'
    sidebar.appendChild(month)

    const addNew = makeLi("Add New")
    addNew.id = 'add-nav'
    sidebar.appendChild(addNew)
    return
}