import makeSidebarElems from "./makeSidebarElems";
import makeLogo from "./makeLogo"

const body = document.querySelector('body')

export default function () {
    const page = document.createElement('div')
    page.id = 'page'

    const header = document.createElement('div')
    header.id = 'header'
    const title = document.createElement('h1')
    title.id = 'title'
    title.textContent = 'Schedule'
    const headerHighlight = document.createElement('span')
    headerHighlight.textContent = ' Now'
    title.appendChild(headerHighlight)

    page.appendChild(header)
    header.appendChild(makeLogo)
    header.appendChild(title)

    const sidebar = document.createElement('div')
    sidebar.id = 'sidebar'

    const content = document.createElement('div')
    content.id = 'content'
    page.appendChild(content)
    body.appendChild(page)
    page.appendChild(sidebar)

    makeSidebarElems()
}