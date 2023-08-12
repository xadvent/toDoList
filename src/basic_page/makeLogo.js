const makeBar = function (thing) {
    const makeThing = document.createElement('div')
    makeThing.classList.add('logo-bar')
    makeThing.id = thing
    return makeThing
};
const logoContainer = document.createElement('div')
logoContainer.id = 'top-logo'

logoContainer.appendChild(makeBar('one'))
logoContainer.appendChild(makeBar('two'))
logoContainer.appendChild(makeBar('three'))
logoContainer.appendChild(makeBar('four'))

export default logoContainer