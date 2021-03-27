var homePage = require('../Pages/homePage');
var Logout = require('../Pages/Logout');
var testdata = require('../Testdata/data.json');
var using = require('../node_modules/jasmine-data-provider');
const EC = protractor.ExpectedConditions;

describe('Login and Logout of Dolphin', function () {
	
	function plusProvider(){

        return [

            {username:testdata.locators.userdetails.username,password:testdata.locators.userdetails.password},
			{username:testdata.locators.userdetails.username2,password:testdata.locators.userdetails.password2}
           
        ];


    }
	
	 it('Get Title', function () {
    //Given
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
    browser.sleep(6000);

    //Read titile
    expect(browser.getTitle()).toEqual("Dolphin");
	  });
using(plusProvider,function(data){

  it('Login to Application', function () {

  
    

    //When
	homePage.username.sendKeys(data.username);
	homePage.password.sendKeys(data.password);
	homePage.Login.click();
	browser.sleep(3000);
  
	
	
  });
    
  
  it ('Logout of Dolphin', function()
  {
	  Logout.icon.click();
	   browser.sleep(2000);
	  Logout.signoff.click();
	  browser.sleep(2000);
  });
  });

});