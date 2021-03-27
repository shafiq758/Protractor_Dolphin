var XLSX = require('../node_modules/xlsx');
class Excel {
	constructor() {
function ExcelReader(sheetnum, cellindex){
var workbook = XLSX.readFile('Test.xlsx');

var first_sheet_name = workbook.SheetNames[sheetnum];

//var first_sheet_name = "LoginTest";

var address_of_cell = cellindex;

var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];

/* Get the value */
var desired_value = desired_cell.v;
return desired_value;
}
this.value=ExcelReader(0, 'A2');
}
}
module.exports = new Excel();