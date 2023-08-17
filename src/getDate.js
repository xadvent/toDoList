const getToday = function () {
    const date = new Date();
    const month = date.getMonth() + 1; // Adding 1 to adjust for 0-based indexing
    const days = date.getDate(); // Use getDate() instead of getDay()
    const year = date.getFullYear();

    return {
        month,
        days,
        year
    };
};

export const getDifference = function (taskDate) {
    if (taskDate.split('-').includes('NaN')) return 'Never'
    const _taskDate = String(taskDate).split('-');
    const currentDate = getToday();
    const yearDiff = +_taskDate[0] - currentDate.year;
    const monthDiff = (+_taskDate[1] - currentDate.month) + (yearDiff * 12); // Calculate total months
    const dayDiff = +_taskDate[2] - currentDate.days;

    return `${yearDiff > 0 ? yearDiff + ' years, ' : ''}${monthDiff > 0 ? monthDiff + ' months, ' : ''}${dayDiff} days.`;
};
