const ONE_DAY = 1000 * 60 * 60 * 24;

const getNextEvent = (date, month) => {
    const today = new Date();                                // 30/9/2020 16:35:20
    const currentYear = today.getFullYear();
    
    const result = new Date(currentYear, month - 1, date);   // 30/9/2020 00:00:00
    if(today > result) {
        result.setFullYear(currentYear + 1);                 // 30/9/2021 00:00:00
    }

    return result;
}

const getDiffDays = (targetDate) => {
    const today = new Date();

    if(today.getMonth() === targetDate.getMonth() && today.getDate() === targetDate.getDate()) {
        return 0;
    }

    const diff = targetDate.getTime() - today.getTime();
    return Math.ceil(diff / ONE_DAY); 
}


const calcDay = {

    toChristmas: () => {
        const christmas = getNextEvent(25, 12);
        return getDiffDays(christmas);
    }, 

    toAnniversary: (date, month) => {
        const anniversary = getNextEvent(date, month);
        return getDiffDays(anniversary);
    },

    toHolidays: () => {
        const currentMonth = (new Date()).getMonth() + 1;

        if (currentMonth === 7 || currentMonth === 8) {
            return 0;
        }

        const startHoliday = getNextEvent(1, 7);
        return getDiffDays(startHoliday);
    }
}

module.exports = calcDay; 