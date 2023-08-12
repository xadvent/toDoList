const makeLi = function(name){
    
    const navButton = document.createElement('button')
    navButton.textContent = name
    navButton.classList.add('nav-button')

    return navButton
}


export default function(){
    const sidebar = document.querySelector('#sidebar')

    const overview = makeLi('Overview')
    overview.id = 'overview'
    sidebar.appendChild(overview)

    const thisWeek = makeLi('This week')
    thisWeek.id = 'week'
    sidebar.appendChild(thisWeek)

    const month = makeLi("Month")
    month.id = 'month'
    sidebar.appendChild(month)

    const addNew = makeLi("Add New")
    addNew.id = 'add-button-nav'
    sidebar.appendChild(addNew)
    return
}