import makeAll from './basic_page/makeAll';
import sidebarFunctions from './content_tabs/sidebar_elements/sidebarFunctions';
import './style.css'
import { overview } from './content_tabs/sidebar_elements/sidebarTabCreation';
import { projectContainer, Project } from './task_controls/taskManagers';

makeAll()
sidebarFunctions()

projectContainer.addProject('Project1')
projectContainer.addTaskToProject('Project1', 'Trying', 'Finding', 'high-priority', 'Never')
overview()