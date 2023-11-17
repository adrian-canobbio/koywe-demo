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

// When(/^I clic on button 'Overview'$/, async () => {
//     await LoginPage.GetOverView()
//     await browser.pause(3000)
// });

Then(/^I will see the purchasing flow video reproducing in 'What is Koywe' overview page$/, async () => {
await LoginPage.iframeVideoDemo.waitForExist()
    await browser.switchToFrame( await LoginPage.iframeVideoDemo.click())
    await browser.pause(5000)
});
