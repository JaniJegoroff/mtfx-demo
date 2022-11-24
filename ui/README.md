# wdio-ui example

### Tested setup

```
macOS Monterey
12.6.2
```
```
node -v
v18.12.1
```

### Install dependencies

```
npm install
```

### Run tests

```
npm run test
```

### Example test output
```sh
Janis-iMac:ui janijegoroff$ npm run test

> frontend-automation-tests@1.0.0 test
> wdio wdio.conf.js


Execution of 2 workers started at 2022-11-24T13:23:21.606Z

[0-0] RUNNING in chrome - /features/multi-student.feature
[0-0] PASSED in chrome - /features/multi-student.feature
[0-1] RUNNING in chrome - /features/single-student.feature
[0-1] PASSED in chrome - /features/single-student.feature

 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.110 mac os x #0-0] Running: chrome (v107.0.5304.110) on mac os x
[chrome 107.0.5304.110 mac os x #0-0] Session ID: 35cf012311b441060b14cbda9c9d9d06
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] » /features/multi-student.feature
[chrome 107.0.5304.110 mac os x #0-0] Multi Student Details Submission
[chrome 107.0.5304.110 mac os x #0-0] As an automation tester
[chrome 107.0.5304.110 mac os x #0-0] I want to be able complete the above scenario by passing in an array of user details and
[chrome 107.0.5304.110 mac os x #0-0] submit the form for each of these users
[chrome 107.0.5304.110 mac os x #0-0] So that I can make this feature run for any amount of user details passed in
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] Submit multiple student details
[chrome 107.0.5304.110 mac os x #0-0]    ✓ Given I am on the form page
[chrome 107.0.5304.110 mac os x #0-0]    ✓ When I enter and submit all student details
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] 2 passing (2.6s)
------------------------------------------------------------------
[chrome 107.0.5304.110 mac os x #0-1] Running: chrome (v107.0.5304.110) on mac os x
[chrome 107.0.5304.110 mac os x #0-1] Session ID: 5786577e4d3ab89dba0290598999c4b4
[chrome 107.0.5304.110 mac os x #0-1]
[chrome 107.0.5304.110 mac os x #0-1] » /features/single-student.feature
[chrome 107.0.5304.110 mac os x #0-1] Single Student Details Submission
[chrome 107.0.5304.110 mac os x #0-1] As an automation tester
[chrome 107.0.5304.110 mac os x #0-1] I want to fill in and submit the form on the demoqa.com website with the details:
[chrome 107.0.5304.110 mac os x #0-1] First Name - Jane
[chrome 107.0.5304.110 mac os x #0-1] Last name - Smith
[chrome 107.0.5304.110 mac os x #0-1] Email address - automation-test@tester.com
[chrome 107.0.5304.110 mac os x #0-1] Phone number - 1234567891
[chrome 107.0.5304.110 mac os x #0-1] So that I can make sure the form is being completed and showing the correct user details
[chrome 107.0.5304.110 mac os x #0-1]
[chrome 107.0.5304.110 mac os x #0-1] Submit single student details
[chrome 107.0.5304.110 mac os x #0-1]    ✓ Given I am on the form page
[chrome 107.0.5304.110 mac os x #0-1]    ✓ When I enter student details
[chrome 107.0.5304.110 mac os x #0-1]    ✓ And I submit form
[chrome 107.0.5304.110 mac os x #0-1]    ✓ Then I should see thank you dialog
[chrome 107.0.5304.110 mac os x #0-1]    ✓ And I should see student details
[chrome 107.0.5304.110 mac os x #0-1]
[chrome 107.0.5304.110 mac os x #0-1] Submit without entering mandatory student details
[chrome 107.0.5304.110 mac os x #0-1]    ✓ Given I am on the form page
[chrome 107.0.5304.110 mac os x #0-1]    ✓ When I submit form
[chrome 107.0.5304.110 mac os x #0-1]    ✓ Then I should not see thank you dialog
[chrome 107.0.5304.110 mac os x #0-1]
[chrome 107.0.5304.110 mac os x #0-1] 8 passing (1.9s)


Spec Files:	 2 passed, 2 total (100% completed) in 00:00:07
```

### Issues/comments/questions/improvements/workarounds

```
Lots of old, unneeded and deprecated dependencies in the base project.
Node gyp build error (when installing dependencies) with the latest node version (19.1.0).

Workaround:
Downgrade node to LTS version (v18.12.1)
Update dependencies
Setup boilerplate project from scratch
```
```
Web site under test does not work in 13-inch laptop. This is due to submit button not being visible. There are also tons of ads on the page.

Workaround:
Add goog:chromeOptions to control chrome launch arguments
Control window size to bring submit button visible: window-size=600,1200 (still does not solve all the problems)
Run tests on iMac with big screen
```
```
Unable to interact with gender radio buttons using id as locator.

Workaround:
Had to use text locator instead
```
```
Static code analysis using ESLint.

Comment:
Boilerplate code brings lots of errors
```
```
Cucumber JSON report added to the project.

Comment:
Would be nice addition to have HTML report as well and add screenshot from failures to the report
```
```
Tests currently running only on chrome.

Comment:
Future addition to cover some other browsers as well
```
