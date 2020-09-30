module.exports = {

    checkDate : (date, month) => {
        const monthJS = month - 1;
        const testDate = new Date(2000, monthJS, date);

        return date === testDate.getDate() && monthJS === testDate.getMonth();
    }
}