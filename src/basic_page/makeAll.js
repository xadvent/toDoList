import makeSidebarElems from "./makeSidebarElems";
import makeLogo from "./makeLogo"

function createHeader() {
    const header = document.createElement('div');
    header.id = 'header';

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Schedule';

    const headerHighlight = document.createElement('span');
    headerHighlight.textContent = ' Now';

    title.appendChild(headerHighlight);
    header.appendChild(makeLogo);
    header.appendChild(title);

    return header;
}

function createPage() {
    const page = document.createElement('div');
    page.id = 'page';
    return page;
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    return sidebar;
}

function createContent() {
    const content = document.createElement('div');
    content.id = 'content';
    return content;
}

export default function () {
    const body = document.querySelector('body');
    const page = createPage();
    const header = createHeader();
    const sidebar = createSidebar();
    const content = createContent();

    page.appendChild(header);
    page.appendChild(content);
    page.appendChild(sidebar);
    body.appendChild(page);
    makeSidebarElems()
}
