describe('Checkout functionality', function()
{
    var json = require('./testdata.json');
    var colors = require('colors');
    var until = protractor.ExpectedConditions;
    var originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    var getRandomEmail = function()
    {
        var strValues = "abcdefghijk123456789";
        var strEmail = "";
        for (var i = 0; i < strValues.length; i++)
        {
            strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        return strEmail + "@automationtests.com";
    };
     var getRandomString = function () {
    var randomText = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return randomText;};
    beforeEach(function()
    {
       // browser.forkNewDriverInstance();
     protractor.browser.manage().window().maximize();  
     protractor.browser.ignoreSynchronization = true;
    // protractor.browser.manage().deleteAllCookies();
    });

    afterEach(function()
    {
        // protractor.browser.manage().deleteAllCookies();
         browser.restart();
    });
afterAll(function () {
    browser.close();
});
  it('------ Register and purchase a Basic Plan', function()
    {
        browser.get(json.website);
        var x = getRandomEmail();
        var y = getRandomString();
        element(by.css('.btn-cta-secondary')).click();
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(x);
        browser.sleep(3000);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        protractor.browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 30000);
        element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
        browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();
        element(by.css('[ng-click="CC.cart.updatePlan(\'Basic\')')).click();
        element(by.id('fullName')).sendKeys(y);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
       browser.sleep(4000);
      browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()
            {browser.wait(until.urlContains('explore'), 30000)});
    browser.get(json.profile);
    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'BASIC',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});

    });

    it('------ Register and purchase a Professional Plan', function()
  {
    protractor.browser.get(json.website);
    var x2 = getRandomEmail();
    var y2 = getRandomString();
    element(by.css('.btn-cta-secondary')).click();
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x2);
    element(by.id('signup-password')).sendKeys(json.password);
    element(by.id('signupButton')).click();
      protractor.browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
    element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
      protractor.browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
      protractor.browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
    element(by.id('dropdownMenu2')).click();
    element(by.css('[ng-click="CC.cart.updatePlan(\'Professional\')')).click();
    element(by.id('fullName')).sendKeys(y2);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(4000);
          browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()
            {browser.wait(until.urlContains('explore'), 30000)}); 
      browser.get(json.profile);

    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'PROFESSIONAL',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});

    });

    it('------ Register and purchase an Expert Plan', function()
  {
    protractor.browser.get(json.website);
    var x3 = getRandomEmail();
    var y3 = getRandomString();
    element(by.css('.btn-cta-secondary')).click();
    element(by.css('.blue-lg-link')).click();
    element(by.id('signup-email')).sendKeys(x3);
    element(by.id('signup-password')).sendKeys(json.password);
    element(by.id('signupButton')).click();
    browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
    element(by.id('signupSuccessRedirect')).click().then(function(){browser.actions().sendKeys(protractor.Key.ESCAPE).perform();})
    browser.executeScript("document.querySelector('[event-name=\"startFreeTrial\"]').click()");
    browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
    element(by.id('dropdownMenu2')).click();
    element(by.css('[ng-click="CC.cart.updatePlan(\'Expert\')')).click();
    element(by.id('fullName')).sendKeys(y3);
    element(by.id('card-num')).sendKeys(json.card);
    element(by.id('card-date')).sendKeys(json.date);
    element(by.id('CVV')).sendKeys(json.cvv);
    element(by.id('card-zipcode')).sendKeys(json.zip);
    browser.sleep(4000);
    browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()").then(function()     
    {browser.wait(until.urlContains('explore'), 20000);});
    browser.get(json.profile);
    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'EXPERT',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});
    });

    it('------ Register and purchase an Agent Pro plan ', function()
    {
        var q = getRandomEmail();
        browser.get(json.product);
        //browser.wait(until.visibilityOf($('[href=\"/checkout#?role=agent&plan=Mashvisor_Pro_Agent_Quarterly\"]')), 20000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Pro_Agent_Quarterly\"]\').click()');
        browser.wait(until.visibilityOf($('#signup-email')), 20000);

        element(by.id('signup-email')).sendKeys(q);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();

        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();

        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Pro_Agent\')"')).click();
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript("document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.wait(until.urlContains('explore'), 20000);
        browser.get(json.profile);
 browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'AGENT PRO',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});
    });

    it('------ Register and purchase an Agent Expert plan ', function()
    {
        var v = getRandomEmail();
        browser.sleep(3000);
        browser.get(json.product);
        browser.sleep(4000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Expert_Agent_Quarterly\"]\').click()');
        browser.sleep(4000);
        element(by.id('signup-email')).sendKeys(v);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.sleep(13000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Expert_Agent\')"')).click();
        var el = element(by.css('.pad-hor.options-container'));
        el.getText().then(function(text)
        {
            expect(text).toContain("Expert Agent")
        });
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript(
            "document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.sleep(13000);
        browser.get(json.profile);
browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'AGENT EXPERT',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});
    });

    it('------ Register and purchase an Agent Top plan ', function()
    {
        var t = getRandomEmail();
        browser.sleep(3000);
        browser.get(json.product);
        browser.sleep(4000);
        browser.executeScript('document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Top_Agent_Quarterly\"]\').click()');
        browser.sleep(2000);
        element(by.id('signup-email')).sendKeys(t);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.sleep(13000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Top_Agent\')"')).click();
        var el = element(by.css('.pad-hor.options-container'));
        el.getText().then(function(text)
        {
            expect(text).toContain("Top Agent")
        });
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.sleep(3000);
        browser.executeScript(
            "document.querySelector('[value=\"Start Subscription\"]').click()");
        browser.sleep(13000);
        browser.get(json.profile);
    browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),'AGENT PRO',2000), 5000).then(function(){expect(true).toEqual(true);},function(){expect(true).toEqual(false);});
    });

});