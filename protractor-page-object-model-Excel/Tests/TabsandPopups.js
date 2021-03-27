var testdata = require('../Testdata/data.json');
var Bank = require('../Pages/Bank');
describe("Handling Tabs and Popups",function(){


    it("Handling Tabs and Popups",function(){
  
     browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment2);
        Bank.id.click();


        browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function(){

                Bank.link1.click();
               // browser.sleep(5000);

                browser.getAllWindowHandles().then(function(handles){

                    browser.switchTo().window(handles[2]).then(function(){

                       Bank.cityid.sendKeys(testdata.bankLocators.pagevalue.city);
                     //   browser.sleep(5000);

                    })

                    browser.switchTo().window(handles[1]).then(function(){


                     browser.getTitle().then(function(title){


                         console.log(title);
                     })

                    })

                });

            })


        });






    });


});