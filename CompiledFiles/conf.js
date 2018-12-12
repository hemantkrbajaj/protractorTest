"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const os_1 = require("os");
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
    directConnet: true,
    //noGlobals:false
    onPrepare: function () {
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
                    protractor_1.browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        protractor_1.browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = protractor_1.browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            //var Platform = caps.get('platform')
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
                testPlatform: os_1.platform
            };
            new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
        });
    },
    //onCleanup: () => void;
    //afterLaunch
    params: {
        operation1: {
            number1: 5,
            number2: 4
        }
    },
    environment: {
        ci: {
            baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login"
        }
    },
    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login"
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsMkJBQThCO0FBRTlCLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVwRCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLHdCQUF3QixHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQ3JFLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsU0FBUztJQUNwQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLHNCQUFzQixFQUFFLE1BQU07S0FDakM7SUFDQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdkIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLFlBQVksRUFBQyxJQUFJO0lBQ2pCLGlCQUFpQjtJQUNqQixTQUFTLEVBQUU7UUFDVCxxQ0FBcUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1lBQy9ELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFFBQVEsRUFBRSxnQkFBZ0IsR0FBRyxNQUFNO1lBQ25DLFVBQVUsRUFBRSxXQUFXO1NBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVB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