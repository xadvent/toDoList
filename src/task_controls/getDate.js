import { differenceInCalendarDays, startOfToday } from "date-fns";
import { format } from 'date-fns'

const totalTime = function (difference) {
    let days = 0
    let months = 0
    let years = 0

    while (difference >= 356) {
        years++
        difference -= 365
    }
    while (difference > 30) {
        months++
        difference -= 30
    }
    days += difference 
    return `${years > 0 ? years + ' years, ' : ''}${months > 0 ? months + ' months, ' : ''}${days} days.`;
}

export const getDifference = function (taskDate) {
    if (taskDate === 'Never' || taskDate.split('-').includes('NaN')) return 'Never'
    let taskSplit = taskDate.split('-')
    const today = format(startOfToday(), 'yyyy MM dd').split(' ')
    const overallDifference = differenceInCalendarDays(
        new Date(taskSplit[0], taskSplit[1], taskSplit[2]),
        new Date(today[0], today[1], today[2])
    );
    return totalTime(overallDifference)
}

