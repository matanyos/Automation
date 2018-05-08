
describe('Authentication Module', function()
{
    var json = require('./testdata.json');
    var colors = require('colors');
    var until = protractor.ExpectedConditions;
/**
 * @return {[type]}
 */
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
        browser.restart();
    });
    /**
     * 
     * @param  {String}
     * @param  {Function}
     * @return {[void]}
     */
    it('------ Sign in with Google account', function()
    {
        element(by.css('.btn-cta-secondary')).click();
        element(by.id('googleLoginButton')).click();
        browser.wait(until.visibilityOf($('#identifierId')), 30000); 
        element(by.id('identifierId')).sendKeys(json.googleemail);
        element(by.id('identifierNext')).click(); 
        browser.sleep(3000);
        element(by.css('.whsOnd.zHQkBf')).sendKeys(json.googlepw);
        browser.wait(until.visibilityOf($('#passwordNext')), 30000); 
        element(by.id('passwordNext')).click();
         browser.wait(until.urlContains('explore'), 30000).then(function()
        {
            expect(true).toEqual(true);
        }, function()
        {
            expect(true).toEqual(false);
        });

        //browser.wait(until.expect(browser.getCurrentUrl()).toContain("explore") , 30000);

    });
    it('------ Sign in with existing user', function()
    {
        element(by.css('.btn-cta-secondary')).click();
        element(by.id('login-email')).sendKeys(json.existacc);
        element(by.id('login-password')).sendKeys(json.existaccpw);
        element(by.id('loginButton')).click();
        browser.wait(until.visibilityOf($('#autocomplete')), 30000);  
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
        browser.wait(until.visibilityOf($('#autocomplete')), 30000);  
		expect(browser.getCurrentUrl()).toContain("explore");  
		
        
    });

});
    