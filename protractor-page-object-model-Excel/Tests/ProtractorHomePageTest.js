var homePage = require('../Pages/homePage');
var Logout = require('../Pages/Logout');
var testdata = require('../Testdata/data.json');
var using = require('../node_modules/jasmine-data-provider');

//import {ExcelReader} from '../ExcelReader/Excel.js';
var Excel= require('../ExcelReader/Excel.js')
const EC = protractor.ExpectedConditions;

describe('Login and Logout of Dolphin', function () {
	
	function plusProvider(){

        return [

            {username:Excel.value,password:testdata.locators.userdetails.password},
			{username:testdata.locators.userdetails.username2,password:testdata.locators.userdetails.password2}
           
        ];


    }
	
it('Get Title', function () {
    //Given
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
   

    //Read titile
    expect(browser.getTitle()).toEqual("Dolphin");
	  });
using(plusProvider,function(data){

it('Login to Application', function () {

  
    

    //When
	homePage.username.sendKeys(data.username);
	homePage.password.sendKeys(data.password);
	homePage.Login.click();
	
  
	
	
  });
    
  
  it ('Logout of Dolphin', function()
  {
	  Logout.icon.click();
	   
	  Logout.signoff.click();
	  
  });
  });

});