Feature: Single Student Details Submission

  As an automation tester
  I want to fill in and submit the form on the demoqa.com website with the details:
    First Name - Jane
    Last name - Smith
    Email address - automation-test@tester.com
    Phone number - 1234567891
  So that I can make sure the form is being completed and showing the correct user details

  Background: Navigate to form page
    Given I am on the form page

  @single
  Scenario: Submit single student details
    When I enter student details
      And I submit form
    Then I should see thank you dialog
      And I should see student details

  @negative
  Scenario: Submit without entering mandatory student details
    When I submit form
    Then I should not see thank you dialog
