/***********/
/* Imports */
/***********/
// Default imports
const fs = require('fs');
// Custom imports
const { getDateDatas } = require('./date')

/*************/
/* Functions */
/*************/
// Logs function
const logs = (data) => {
    fs.appendFileSync('./logs.txt', getDateDatas() + ' ' + data);
    console.log(data);
}

/********************/
/* Functions export */
/********************/
module.exports = { logs }