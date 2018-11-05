"use strict";
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
    //onPrepare: () => void;
    //onComplete: () => void;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsU0FBUztJQUNwQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLHNCQUFzQixFQUFFLE1BQU07S0FDakM7SUFDQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdkIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLFlBQVksRUFBQyxJQUFJO0lBQ2pCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsTUFBTSxFQUFDO1FBQ0wsVUFBVSxFQUFDO1lBQ1QsT0FBTyxFQUFDLENBQUM7WUFDVCxPQUFPLEVBQUMsQ0FBQztTQUNWO0tBRUY7SUFDRCxXQUFXLEVBQUM7UUFDVixFQUFFLEVBQUM7WUFDRCxPQUFPLEVBQUUsb0VBQW9FO1NBQzlFO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsb0VBQW9FO0NBQzlFLENBQUEifQ==