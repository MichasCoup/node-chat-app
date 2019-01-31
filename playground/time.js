const moment = require('moment');

let date = moment();

// console.log(date);
// console.log(date.format());
// console.log(date.format('mm'));
// console.log(date.format('HH'));
// console.log(date.format('DD'));
// console.log(date.format('MMM'));
// console.log(date.format('YYYY'));
// console.log(date.format('HH:mm DD.MM.YYYY'));
// date.add(1, 'y');
// console.log(date.format('HH:mm DD.MM.YYYY'));
// date.subtract(9, 'M');
// console.log(date.format('HH:mm DD.MM.YYYY'));

// console.log(date.format('k:mm a'));

let timestamp = moment().valueOf();
console.log(timestamp);

console.log(moment(timestamp));