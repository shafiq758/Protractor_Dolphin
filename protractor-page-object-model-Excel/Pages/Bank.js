var testdata = require('../Testdata/data.json');
class Bank {
	
	

//console.log(desired_value);
    constructor() {
	this.id= element(by.id(testdata.bankLocators.pageLocators.id));
    this.link1= element(by.linkText(testdata.bankLocators.pageLocators.linktext));
	this.cityid= element(by.id(testdata.bankLocators.pageLocators.cityid));
	  }

}
module.exports = new Bank();