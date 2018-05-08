
 
 var glob = require("glob")

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  specs:
       
         
         ['./Tests/**/*.js']
       ,
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  logLevel: 'WARN',
   onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results',}));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }}













/*onPrepare: function () {
    browser.manage().timeouts().implicitlyWait(15000);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        allureReport: {
            resultsDir: 'allure-results'
        }
    }));
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64');
            }, 'image/png')();
            done();
        });
    });

}
}
*/
