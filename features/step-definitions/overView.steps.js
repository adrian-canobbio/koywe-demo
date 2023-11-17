const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page');
;

;


const pages = {
    login: LoginPage
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

When(/^I clic on button 'Overview'$/, async () => {
    await LoginPage.GetOverView()
    await browser.pause(3000)
});

Then(/^I will see a 'Demo Video' overview page$/, async () => {

    await expect(LoginPage.valOverView).toBeDisplayed
});
