
//let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//restartBrowserBetweenTests = true;

exports.config = 
{
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['./Sign/todo-spec.js','./Checkout/todo-spec.js'],
onPrepare: function () {
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
   /* jasmine.getEnv().addReporter(new SpecReporter(
    {
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));*/
