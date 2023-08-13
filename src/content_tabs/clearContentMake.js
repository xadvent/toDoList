export default function(tabName){
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.removeAttribute('class')
    content.classList.add(tabName+'-tab')
    return content
}