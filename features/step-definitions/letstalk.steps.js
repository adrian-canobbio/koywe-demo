const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page');
;

;


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I clic on button Lets talk$/, async () => {
    await LoginPage.GetLetsTalk()
    await browser.pause(3000)
});

Then(/^I will see a Lets talk page$/, async () => {

    await browser.switchWindow('https://cal.com/koywe/15min?date=2023-11-17')
    await expect(LoginPage.valLetsTalk).toBeDisplayed
});

