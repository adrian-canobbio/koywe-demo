// const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLetsTalk () {
        return $('body > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)');
    }

    get valLetsTalk (){
        return $('//*[@id="__next"]/main/div/div/div[2]/div/div/div/h1')
    }
  
get btnOverView(){
    return $('//*[@id="content-area"]/div[3]/div/a/span')
}
 get valOverView(){
    return $('//*[@id="demo-video"]/span')

 }
 
 get iframeVideoDemo(){
    return $('iframe[src="https://www.youtube.com/embed/3Idumr8KGvI"]')
 }
async GetOverView(){
    await this.btnOverView.click()
}

    async GetLetsTalk(){
        await this.btnLetsTalk.click()

    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
