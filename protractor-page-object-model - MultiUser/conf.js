exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,

    multiCapabilities: [{
     'browserName': 'firefox',
   },],
    // Protractor parallel execution enable shardTestFiles: true, maxInstances: 2,
  // shardTestFiles: true,
  // maxInstances: 2,


  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['Tests/ProtractorHomePageTest.js'],

  //Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,   // Use colors in the command line report.  
    defaultTimeoutInterval: 120000  // Time to wait in ms before a test fails. Default value = 30000
  },

onPrepare: function () {

    var AllureReporter = require('jasmine-allure-reporter');

    //allure report
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
    }));

    /* 
     * It will take screenshot after each Jasmine function 'it'
     */        
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })
    });

}

};

//Page Object Basic Model ( Ready To Use ) - UI Test Automation Design Pattern for protractortest.org
//Contact me! if you have more ideas - padmaraj.nidagundi@gmail.com
//https://github.com/padmarajnidagundi