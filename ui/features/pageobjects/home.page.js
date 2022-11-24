const mainPage = require('./main.page');

class homePage extends mainPage {
    // all selectors for the page 

    get buttonForms () { return $('(//div[@class="card mt-4 top-card"])[2]') }
    get buttonPracticeForms () { return $('(//span[@class="text"])[10]') }

    // methods for user actions on the page

    open () {
        return super.open('home');
    }
}
module.exports = new homePage();
