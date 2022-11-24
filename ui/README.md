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
