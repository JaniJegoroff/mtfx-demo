const mainPage = require('./main.page');

class formPage extends mainPage {
    // selectors for the page

    get inputFirstName () { return $('#firstName') }
    get inputLastName () { return $('#lastName') }
    get inputEmail () { return $('#userEmail') }
    get inputMobileNumber () { return $('#userNumber') }
    // get genderMale () { return $('#gender-radio-1') }
    get genderMale () { return $('//*[text()="Male"]') }
    // get genderFemale () { return $('#gender-radio-2') }
    get genderFemale () { return $('//*[text()="Female"]') }
    // get genderOther () { return $('#gender-radio-3') }
    get genderOther () { return $('//*[text()="Other"]') }
    get buttonSubmit () { return $('#submit') }
    get thankYouDialog () { return $('#example-modal-sizes-title-lg') }
    get buttonCloseThankYouDialog () { return $('#closeLargeModal') }
    get tableStudentDetails () { return $('.table-responsive') }

    // methods for user actions on the page

    async enterFirstName(firstName) {
        await this.inputFirstName.setValue(firstName);
    }

    async enterLastName(lastName) {
        await this.inputLastName.setValue(lastName);
    }

    async enterEmail(email) {
        await this.inputEmail.setValue(email);
    }

    async enterMobileNumber(mobileNumber) {
        await this.inputMobileNumber.setValue(mobileNumber);
    }

    async selectGender(gender) {
        switch(gender) {
            case 'Male':
              await this.genderMale.click();
              break;
            case 'Female':
              await this.genderFemale.click();
              break;
            default:
              await this.genderOther.click();
        }
    }

    async submit() {
        await this.buttonSubmit.scrollIntoView();
        await this.buttonSubmit.click();
    }

    async closeThankYouDialog() {
        await this.buttonCloseThankYouDialog.scrollIntoView();
        await this.buttonCloseThankYouDialog.click();
    }

    open () {
        return super.open('automation-practice-form');
    }
}
module.exports = new formPage();
