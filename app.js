const readline = require('readline');
const {toChristmas, toHolidays, toAnniversary} = require('./modules/calc-day');
const { checkDate } = require('./modules/date-helper');


console.log('Exercice 1 - Module');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const message = `Quel action : 
    1) Noël
    2) Vacances d'été
    3) Anniversaire
    0) Quitter
> `;

reader.question(message, (response) => {

    switch (response) {
        case '1':
            const nbChristmas = toChristmas();

            if(nbChristmas === 0) {
                console.log('C\'est Noël');
            }
            else {
                console.log(`Prochain Noël dans ${nbChristmas} jours!`);
            }
            reader.close();
            break;
        case '2':
            const nbHolidays = toHolidays();

            if(nbHolidays === 0) {
                console.log('C\'est les vacances (pour les enfants)!');
            }
            else {
                console.log('Les vacances arrivent dans ' + nbHolidays + ' jours!');
            }
            reader.close();
            break;
        case '3': 
            reader.question('Information necessaire \n - Jour: ', (dateInput) => {
                reader.question(' - Mois: ', (monthInput) => {

                    // TODO Ajouter gestion d'erreur (Actuellement monde des bisounours)

                    const date = parseInt(dateInput);
                    const month = parseInt(monthInput);

                    if(!isNaN(date) && !isNaN(month) && checkDate(date, month)) {
                        const nbAnniversary = toAnniversary(date, month);

                        if(nbAnniversary === 0) {
                            console.log('Joyeux anniversaire ! \\o/');
                        }
                        else {
                            console.log(`Votre anniversaire est dans ${nbAnniversary} jours.`);
                        }
                    }
                    else {
                        console.log('Votre saisie est invalide !');
                    }
            
                    reader.close();
                });
            });
            break;
        case '0':
            console.log('Merci d\'avoir utiliser le programme');
            reader.close();
            break;
        default:
            console.log('Votre saisie n\'est pas valide');
            reader.close();
            break;
    }
    
})
