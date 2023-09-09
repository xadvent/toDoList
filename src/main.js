import makeAll from './basic_page/makeAll';
import sidebarFunctions from './content_tabs/sidebar_elements/sidebarFunctions';
import './style.css'
import { overview } from './content_tabs/sidebar_elements/sidebarTabCreation';
import { projectContainer } from './task_controls/taskManagers';
import { checkGetStored } from './task_controls/storage';

makeAll()
sidebarFunctions()

checkGetStored()
overview()
projectContainer.allTaskManager.refresh()