describe('Payment Module', function()
{
    var json = require('./testdata.json');
    var colors = require('colors');
    var until = protractor.ExpectedConditions;

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

    beforeEach(function()
    {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get(json.website);

    });

    afterEach(function()
    {
        browser.restart();

    });

    it('------ Register and purchase a Basic Plan', function()
    {

        var x = getRandomEmail();
        element(by.css('.btn-cta-secondary')).click();
        browser.wait(until.visibilityOf($('.blue-lg-link')), 30000);
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(x);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        protractor.browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 30000);
        element(by.id('signupSuccessRedirect')).click().then(function()
        {
            browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        })
        browser.executeScript(
            "document.querySelector('[event-name=\"startFreeTrial\"]').click()");
        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();
        element(by.css('[ng-click="CC.cart.updatePlan(\'Basic\')')).click();
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.executeScript("$('[value=\"Start Subscription\"]').click()").then(function()
        {
            browser.wait(until.urlContains('explore'), 30000)
        });
        browser.get(json.profile);
        browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'), 'BASIC', 2000),
            5000).then(function()
        {
            expect(true).toEqual(true);
        }, function()
        {
            expect(true).toEqual(false);
        });

    });

    it('------ Register and purchase an Agent Expert plan ', function()
    {
        var v = getRandomEmail();
        browser.get(json.product);
        browser.executeScript(
            'document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Expert_Agent_Quarterly\"]\').click()'
        );
        browser.sleep(4000);
        element(by.id('signup-email')).sendKeys(v);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Expert_Agent\')"')).click();
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);

        browser.executeScript("$('[value=\"Start Subscription\"]').click()").then(function()
        {
            browser.wait(until.urlContains('explore'), 30000)
        });
        browser.sleep(2000);
        browser.get(json.profile);
        browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'),
            'AGENT EXPERT', 2000), 5000).then(function()
        {
            expect(true).toEqual(true);
        }, function()
        {
            expect(true).toEqual(false);
        });
    });

    it('------ Sign up then purchase an Agent Top plan ', function()
    {
        browser.get(json.product);
        var z = getRandomEmail();
        element(by.css('.btn-cta-secondary')).click();
        element(by.css('.blue-lg-link')).click();
        element(by.id('signup-email')).sendKeys(z);
        element(by.id('signup-password')).sendKeys(json.password);
        element(by.id('signupButton')).click();
        browser.wait(until.visibilityOf($('#signupSuccessRedirect')), 20000);
        element(by.id('signupSuccessRedirect')).click();
        browser.get(json.product);
        browser.sleep(4000);
        browser.executeScript(
            'document.querySelector(\'[href=\"/checkout#?role=agent&plan=Mashvisor_Top_Agent_Quarterly\"]\').click()'
        );
        browser.wait(until.visibilityOf($('#dropdownMenu2')), 20000);
        element(by.id('dropdownMenu2')).click();
        browser.sleep(2000);
        element(by.css('[ng-click="CC.agentCart.updatePlan(\'Top_Agent\')"')).click();
        element(by.id('fullName')).sendKeys(json.password);
        element(by.id('card-num')).sendKeys(json.card);
        element(by.id('card-date')).sendKeys(json.date);
        element(by.id('CVV')).sendKeys(json.cvv);
        element(by.id('card-zipcode')).sendKeys(json.zip);
        browser.executeScript("$('[value=\"Start Subscription\"]').click()").then(function()
        {
            browser.wait(until.urlContains('explore'), 30000)
        });
        browser.get(json.profile);
        browser.wait(until.textToBePresentInElement($('[ui-sref=\"profile\"]'), 'AGENT PRO',
            2000), 5000).then(function()
        {
            expect(true).toEqual(true);
        }, function()
        {
            expect(true).toEqual(false);
        });
    });

});