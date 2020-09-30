const {toChristmas, toAnniversary} = require('./modules/calc-day');

console.log('Exercice 1 - Module');

const nbChristmas = toChristmas();
console.log(`Nombre de jour avant noel : ${nbChristmas}`);

const nbAnnersary = toAnniversary(27,12);
console.log(`Nombre de jour avant le 27/12 : ${nbAnnersary}`);