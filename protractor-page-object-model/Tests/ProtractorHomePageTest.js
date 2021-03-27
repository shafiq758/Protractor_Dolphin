var homePage = require('../Pages/homePage');
var Logout = require('../Pages/Logout');
var testdata = require('../Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Login and Logout of Dolphin', function () {

  it('Login to Dolphin', function () {
    //Given
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
    browser.sleep(6000);

    //Read titile
    expect(browser.getTitle()).toEqual("Dolphin");

    //Read text of drop down
   // expect(homePage.homeLink.getText()).toEqual("Home");

    //When
	homePage.username.sendKeys(testdata.locators.userdetails.username);
	homePage.password.sendKeys(testdata.locators.userdetails.password);
	homePage.Login.click();
	browser.sleep(3000);
  /*  homePage.tutorialLink.click();
    expect(homePage.tutorialLink.getText()).toEqual("Tutorial");
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);
    //Then
    homePage.homeLink.click();
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);*/
	
	
  });
  
  it ('Logout of Dolphin', function()
  {
	  Logout.icon.click();
	   browser.sleep(2000);
	  Logout.signoff.click();
	  browser.sleep(1000);
  });
  

});