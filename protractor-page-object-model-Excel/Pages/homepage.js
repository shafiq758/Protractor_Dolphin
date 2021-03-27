var testdata = require('../Testdata/data.json');


class HomePage {
	
	

//console.log(desired_value);
    constructor() {

      this.username= element(by.xpath(testdata.locators.loginpage.username1));
      this.password= element(by.xpath(testdata.locators.loginpage.password1));
	  this.Login= element(by.buttonText(testdata.locators.loginpage.login));
    }

}
module.exports = new HomePage();