import makeSidebarElems from "./makeSidebarElems";
import makeLogo from "./makeLogo"

const body = document.querySelector('body')
const pageTitle = document.head.querySelector('title')

export default function () {
    pageTitle.textContent = 'To-do List'

    const page = document.createElement('div')
    page.id = 'page'


    const header = document.createElement('div')
    header.id = 'header'
    const title = document.createElement('h1')
    title.id = 'title'
    title.textContent = 'Schedule Now'

    page.appendChild(header)
    header.appendChild(makeLogo)
    header.appendChild(title)

    const makeSidebar = (function () {
        const sidebar = document.createElement('div')
        sidebar.id = 'sidebar'

        page.appendChild(sidebar)
    })()

    const content = document.createElement('div')
    content.id = 'content'
    page.appendChild(content)
    body.appendChild(page)

    makeSidebarElems()


}