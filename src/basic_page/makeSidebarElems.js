const makeLi = function(name){
    
    const navButton = document.createElement('button')
    navButton.textContent = name

    return navButton
}


export default function(){
    const sidebar = document.querySelector('#sidebar')

    const unordered = document.createElement('ul')
    unordered.id = 'nav-list'

    sidebar.appendChild(makeLi('Overview'))
    sidebar.appendChild(makeLi('This Week'))
    sidebar.appendChild(makeLi("Month"))

    const addNew = makeLi("Add New")
    addNew.id = 'add-button-nav'

    sidebar.appendChild(addNew)
    return
}