"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
            var HTMLReport = require('protractor-html-reporter-2');
            var testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: dashboardReportDirectory,
                outputFilename: 'index',
                screenshotPath: './',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFFckMsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNoRixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXBELElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBQ25DLElBQUksd0JBQXdCLEdBQUcsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDckUsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNiLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRTtRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsc0JBQXNCLEVBQUUsTUFBTTtLQUNqQztJQUNDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUN2QixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELHNCQUFzQixFQUFFLElBQUk7SUFDNUIsWUFBWSxFQUFDLElBQUk7SUFDakIsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBRTtRQUNULHFDQUFxQztRQUNyQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7WUFDL0QsY0FBYyxFQUFFLElBQUk7WUFDcEIsUUFBUSxFQUFFLGdCQUFnQixHQUFHLE1BQU07WUFDbkMsVUFBVSxFQUFFLFdBQVc7U0FDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUM7UUFFRCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxVQUFVLE1BQU07Z0JBQ3RCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7b0JBQzNCLG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTt3QkFDekMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFFMUMsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHOzRCQUN2QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQzs0QkFDakgsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDeEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUNqQixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ0MsVUFBVSxFQUFFO1FBQ1YsSUFBSSxXQUFXLEVBQUUsY0FBYyxDQUFDO1FBQ2hDLElBQUksV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFNUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdkQsSUFBSSxVQUFVLEdBQUc7Z0JBQ2IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsVUFBVSxFQUFFLHdCQUF3QjtnQkFDcEMsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsY0FBYyxFQUFFLGNBQWM7Z0JBQzlCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLHdCQUF3QixFQUFFLElBQUk7YUFDakMsQ0FBQztZQUNGLElBQUksVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsTUFBTSxFQUFDO1FBQ0wsVUFBVSxFQUFDO1lBQ1QsT0FBTyxFQUFDLENBQUM7WUFDVCxPQUFPLEVBQUMsQ0FBQztTQUNWO0tBRUY7SUFDRCxXQUFXLEVBQUM7UUFDVixFQUFFLEVBQUM7WUFDRCxPQUFPLEVBQUUsb0VBQW9FO1NBQzlFO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsb0VBQW9FO0NBQzlFLENBQUEifQ==