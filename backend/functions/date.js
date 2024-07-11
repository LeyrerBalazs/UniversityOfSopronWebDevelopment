/*************/
/* Functions */
/*************/
// getDateDatas function
const getDateDatas = () => {
    dateObj = new Date();
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate() + ' ' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
}

/*********************/
/* Functions exports */
/*********************/
module.exports = { getDateDatas };