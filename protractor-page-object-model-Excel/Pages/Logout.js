var testdata = require('../Testdata/data.json');
class Logout{
	constructor() {
 this.icon= element(by.xpath(testdata.locators.Logout.hamburger));
 this.signoff= element(by.xpath(testdata.locators.Logout.signout));
	}
}
module.exports= new Logout();