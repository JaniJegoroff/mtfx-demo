Feature: Multi Student Details Submission

  As an automation tester
  I want to be able complete the above scenario by passing in an array of user details and 
    submit the form for each of these users
  So that I can make this feature run for any amount of user details passed in

  @multi
  Scenario: Submit multiple student details
    Given I am on the form page
    When I enter and submit all student details
