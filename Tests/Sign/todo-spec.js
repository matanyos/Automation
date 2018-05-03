describe('Authentication Module', function()
{
    var json = require('./testdata.json');
    var colors = require('colors');
    var until = protractor.ExpectedConditions;
    var originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    // Generating random emails for the tests
    var getRandomEmail = function()
    {
        var strValues = "abcdefghijk123456789";
        var strEmail = "";
        for (var i = 0; i < 8; i++)
        {
            strEmail = strEmail + strValues.charAt(Math.round(
                strValues.length * Math.random()));
        }
        return strEmail + "@automationtests.com";
    };
    // Before each test 
    beforeEach(function()
    {

        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get(json.website);
    });
    // After each test
    afterEach(function()
    {
        browser.restartSync();
    });
        afterAll(function()
    {
        browser.close();
    });

    it('------ Sign in with Google account', function()
    {
        element(by.css('.btn-cta-secondary')).click();
        element(by.id('googleLoginButton')).click();
        browser.wait(until.visibilityOf($('#identifierId')), 30000); 
        element(by.id('identifierId')).sendKeys(json.googleemail);
        element(by.id('identifierNext')).click(); 
        browser.sleep(2000);
        //browser.executeScript("document.querySelector('jsname=\"YPqjbf\"]')".element.sendKeys(json.googlepw)");
        element(by.css('.whsOnd.zHQkBf')).sendKeys(json.googlepw);
        element(by.id('passwordNext')).click();
        browser.wait(until.visibilityOf($('#autocomplete')), 30000); 
        expect(browser.getCurrentUrl()).toContain("explore");       

    });
    it('------ Sign in with existing user', function()
    {
        element(by.css('.btn-cta-secondary')).click();
        element(by.id('login-email')).sendKeys(json.existacc);
        element(by.id('login-password')).sendKeys(json.existaccpw);
        element(by.id('loginButton')).click();
        browser.wait(until.visibilityOf($('#autocomplete')), 20000);  
      	expect(browser.getCurrentUrl()).toContain("explore");     
        
    });
    it('------ Sign up as new user', function()
    {
        var x = getRandomEmail();
        element(by.css('.btn-cta-secondary')).click();
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(x);
        element(by.id('signup-password')).sendKeys(json.existaccpw);
        element(by.id('signupButton')).click();
        browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000); 
        element(by.id('signupSuccessRedirect')).click();
        browser.wait(until.visibilityOf($('#autocomplete')), 20000);  
		expect(browser.getCurrentUrl()).toContain("explore");  
		
        
    });
        it('------ Forget Password', function()
    {
        var x = getRandomEmail();
        element(by.css('.btn-cta-secondary')).click();
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(x);
        element(by.id('signup-password')).sendKeys(json.existaccpw);
        element(by.id('signupButton')).click();
        browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000); 
        element(by.id('signupSuccessRedirect')).click();
        browser.wait(until.visibilityOf($('#autocomplete')), 20000);  
		expect(browser.getCurrentUrl()).toContain("explore");  
		
        
    });
});
    