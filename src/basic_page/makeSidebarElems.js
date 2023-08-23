import Monthly from '../img/calendar.svg'
import Weekly from '../img/view-week.svg'
import Overview from '../img/check-all.svg'
import Plus from '../img/plus-thick.svg'
import Projects from '../img/note-multiple.svg'
import NewProject from '../img/plus-box.svg'

const navigationItems = [
    { name: 'Overview', id: 'overview', icon: Overview },
    { name: 'Projects', id: 'projects', icon: Projects },
    { name: 'This Week', id: 'week', icon: Weekly },
    { name: 'Month', id: 'month', icon: Monthly },
    { name: 'Add New', id: 'add-nav', icon: Plus },
    { name: 'New Project', id: 'add-project', icon: NewProject }
];

const makeLi = function (item) {
    const navButton = document.createElement('button');
    const NavText = document.createElement('p');
    NavText.textContent = item.name;

    const newPic = new Image();
    newPic.classList.add('nav-image');
    newPic.src = item.icon;

    navButton.appendChild(newPic);
    navButton.appendChild(NavText);
    navButton.classList.add('nav-button');
    navButton.id = item.id;

    return navButton;
};

export default function () {
    const sidebar = document.querySelector('#sidebar');
    navigationItems.forEach(item => {
        const navButton = makeLi(item);
        sidebar.appendChild(navButton);
    });
}
