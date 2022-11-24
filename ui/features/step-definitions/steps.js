const { Given, When, Then } = require('@wdio/cucumber-framework');
const expectChai = require('chai').expect;

const formPage = require('../pageobjects/form.page');

const { personalDetails } = require('../helpers/user-details');

const pages = {
    form: formPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I enter student details$/, async () => {
    await formPage.enterFirstName(personalDetails[0].firstName);
    await formPage.enterLastName(personalDetails[0].lastName);
    await formPage.selectGender(personalDetails[0].gender);
    await formPage.enterEmail(personalDetails[0].email);
    await formPage.enterMobileNumber(personalDetails[0].mobile);
});

When(/^I submit form$/, async () => {
    await formPage.submit();
});

When(/^I enter and submit all student details$/, async () => {
    const arrayLength = personalDetails.length;
    const CheckForAll = bits => string => bits.every(bit => string.includes(bit));
    let tableTextContent;
    let containsAll;

    for(let i=0; i<arrayLength; i++) {
        await formPage.enterFirstName(personalDetails[i].firstName);
        await formPage.enterLastName(personalDetails[i].lastName);
        await formPage.selectGender(personalDetails[i].gender);
        await formPage.enterEmail(personalDetails[i].email);
        await formPage.enterMobileNumber(personalDetails[i].mobile);

        await formPage.submit();
        await expect(formPage.thankYouDialog).toBeDisplayed();

        tableTextContent = await formPage.tableStudentDetails.getText();
        containsAll = CheckForAll([personalDetails[i].firstName,
                                   personalDetails[i].lastName,
                                   personalDetails[i].gender,
                                   personalDetails[i].email,
                                   personalDetails[i].mobile]);
        expectChai(tableTextContent).to.satisfy(containsAll);

        await formPage.closeThankYouDialog();
    }
});

Then(/^I should see thank you dialog$/, async () => {
    await expect(formPage.thankYouDialog).toBeDisplayed();
});

Then(/^I should not see thank you dialog$/, async () => {
    await expect(formPage.thankYouDialog).not.toBeDisplayed();
});

Then(/^I should see student details$/, async () => {
    const tableTextContent = await formPage.tableStudentDetails.getText();

    const CheckForAll = bits => string => bits.every(bit => string.includes(bit));
    const containsAll = CheckForAll([personalDetails[0].firstName,
                                     personalDetails[0].lastName,
                                     personalDetails[0].gender,
                                     personalDetails[0].email,
                                     personalDetails[0].mobile]);
    expectChai(tableTextContent).to.satisfy(containsAll);
});
