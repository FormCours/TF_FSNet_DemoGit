const ONE_DAY = 1000 * 60 * 60 * 24;

const calcDay = {

    toChristmas: () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const christmas = new Date(currentYear, 11, 25);

        if(today > christmas) {
            christmas.setFullYear(currentYear + 1);
        }

        const diff = christmas.getTime() - today.getTime();

        return Math.ceil(diff / ONE_DAY);
    }, 

    toAnniversary: (date, month) => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const anniversary = new Date(currentYear, month - 1, date);

        if(today > anniversary) {
            anniversary.setFullYear(currentYear + 1);
        }

        const diff = anniversary.getTime() - today.getTime();

        return Math.ceil(diff / ONE_DAY);
    }

}

module.exports = calcDay; 