import makeAll from './basic_page/makeAll';
import sidebarFunctions from './content_tabs/sidebar_elements/sidebarFunctions';
import './style.css'
import { overview } from './content_tabs/sidebar_elements/sidebarTabCreation';
import { projectContainer } from './task_controls/taskManagers';

makeAll()
sidebarFunctions()

projectContainer.addProject('Baby Baby')
projectContainer.addTaskToProject('Baby Baby', 'Affirm Baby', 'Tell baby you love her and that she means the world to you. Also tell her she cute.', 'high-priority', 'Never')
const message = 'Give Vero a kiss kiss, pick her up - kiss her while holding her against the wall. Give her all your love and affection. And some more. Because you love her more than anythin gon the planet.'
projectContainer.addTaskToProject('Baby Baby', "Kiss", message, 'high-priority', 'Never')

projectContainer.addProject('Writing pages')
projectContainer.addTaskToProject('Writing pages', 'Script One', 'Write hella pages of script 4 and come up with a good ending.', 'medium-priority', '2023-08-30')
projectContainer.addTaskToProject('Writing pages', 'Script Two', 'Finish Script 5 by the deadline.', 'medium-priority', '2023-09-20')

overview()