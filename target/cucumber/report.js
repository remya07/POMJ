$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("voyanta/ui/entreprenuers/addProposal.feature");
formatter.feature({
  "line": 1,
  "name": "add proposal",
  "description": "",
  "id": "add-proposal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 34308501,
  "status": "passed"
});
formatter.before({
  "duration": 2558659639,
  "status": "passed"
});
formatter.before({
  "duration": 229377,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "investors can view active proposal",
  "description": "",
  "id": "add-proposal;investors-can-view-active-proposal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@ej-12"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is in dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigates to \u0027Proposal\u0027 Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "creates proposal",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "make it active",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "proposal should be created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user logout as entreprenure",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "login as investor",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "investors should be able to view the proposal",
  "keyword": "Then "
});
formatter.match({
  "location": "EntreprenuersStepDefs.user_is_in_dashboard_page()"
});
formatter.result({
  "duration": 17057965095,
  "status": "passed"
});
formatter.match({
  "location": "EntreprenuersStepDefs.navigates_to_Proposal_Page()"
});
formatter.result({
  "duration": 4005906836,
  "status": "passed"
});
formatter.match({
  "location": "EntreprenuersStepDefs.creates_proposal()"
});
formatter.result({
  "duration": 16751664521,
  "status": "passed"
});
formatter.match({
  "location": "EntreprenuersStepDefs.make_it_active()"
});
formatter.result({
  "duration": 11359913155,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: Element not found in the cache - perhaps the page has changed since it was looked up\nCommand duration or timeout: 10.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Remya-PC\u0027, ip: \u0027192.168.1.69\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d35.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d6da5ac8-d34e-4b0b-a3ea-a3f6dd426ea9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:152)\r\n\tat voyanta.ui.pageobjects.ProposalPage.makeProposalActive(ProposalPage.java:130)\r\n\tat voyanta.ui.entreprenuers.EntrepreneursInterface.makeProposalStatusActive(EntrepreneursInterface.java:167)\r\n\tat voyanta.ui.entreprenuers.EntreprenuersStepDefs.make_it_active(EntreprenuersStepDefs.java:248)\r\n\tat ✽.And make it active(voyanta/ui/entreprenuers/addProposal.feature:16)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: Element not found in the cache - perhaps the page has changed since it was looked up\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Remya-PC\u0027, ip: \u0027192.168.1.69\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.fxdriver.cache.getElementAt(resource://fxdriver/modules/web-element-cache.js:8329:1)\r\n\tat \u003canonymous class\u003e.Utils.getElementAt(file:///C:/Users/Remya/AppData/Local/Temp/anonymous1725766914270025632webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:7922:10)\r\n\tat \u003canonymous class\u003e.WebElement.getElementText(file:///C:/Users/Remya/AppData/Local/Temp/anonymous1725766914270025632webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11065:11)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Remya/AppData/Local/Temp/anonymous1725766914270025632webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11635:16)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/Remya/AppData/Local/Temp/anonymous1725766914270025632webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:548:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EntreprenuersStepDefs.proposal_should_be_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "EntreprenuersStepDefs.investors_should_be_able_to_view_the_proposal()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 919877727,
  "status": "passed"
});
});