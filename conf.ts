import { browser } from "protractor";
import { platform } from "os";

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');

var reportsDirectory = './reports';
var dashboardReportDirectory = reportsDirectory + '/dashboardReport';
exports.config = {
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 110000,
    getPageTimeout: 100000,
    jasmineNodeOpts: {
      isVerbose: false,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 400000
  },
    specs: ['./specs/*.js'],
    capabilities: {
      browserName: 'chrome'
    },
    useAllAngular2AppRoots: true,
    directConnet:true,
    //noGlobals:false
    onPrepare: function(){
      // xml report generated for dashboard
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: reportsDirectory + '/xml',
          filePrefix: 'xmlOutput'
      }));

      var fs = require('fs-extra');
      if (!fs.existsSync(dashboardReportDirectory)) {
          fs.mkdirSync(dashboardReportDirectory);
      }

      jasmine.getEnv().addReporter({
          specDone: function (result) {
              if (result.status == 'failed') {
                  browser.getCapabilities().then(function (caps) {
                      var browserName = caps.get('browserName');

                      browser.takeScreenshot().then(function (png) {
                          var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                          stream.write(new Buffer(png, 'base64'));
                          stream.end();
                      });
                  });
              }
          }
      });

  },
    onComplete: function(){
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');

          var HTMLReport = require('protractor-html-reporter-2');
          var testConfig = {
              reportTitle: 'Test Execution Report',
              outputPath: dashboardReportDirectory,
              outputFilename: 'index',
              screenshotPath: './',
              testBrowser: browserName,
              browserVersion: browserVersion,
              modifiedSuiteName: false,
              screenshotsOnlyOnFailure: true,
              testPlatform:platform
          };
          new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
          console.log("Test report generated at: "+dashboardReportDirectory+"/index.html");
      });
  },
    //onCleanup: () => void;
    //afterLaunch
    params:{
      operation1:{
        number1:5,
        number2:4
      }

    },
    environment:{
      ci:{
        baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login"
      }
    },
    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login"
  }