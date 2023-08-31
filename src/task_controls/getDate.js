import { differenceInCalendarDays, startOfToday } from "date-fns";
import { format } from 'date-fns'

const totalTime = function (difference) {
    const years = Math.floor(difference / 365)
    const months = Math.floor((difference / 365 ) / 30)
    const days = Math.floor(difference % 30)

    return `${years > 0 ? years + ' years, ' : ''}${months > 0 ? months + ' months, ' : ''}${days} days.`
}

export const getDifference = function (taskDate) {
    if (taskDate === 'Never' || taskDate.split('-').includes('NaN') || !taskDate) return 'Never'

    let taskSplit = taskDate.split('-')
    const today = format(startOfToday(), 'yyyy MM dd').split(' ')
    const overallDifference = differenceInCalendarDays(
        new Date(taskSplit[0], taskSplit[1], taskSplit[2]),
        new Date(today[0], today[1], today[2])
    );

    return totalTime(overallDifference)
}

