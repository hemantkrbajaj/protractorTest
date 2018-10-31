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
    specs: ['./specs/todospec.js'],
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
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsU0FBUztJQUNwQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLHNCQUFzQixFQUFFLE1BQU07S0FDakM7SUFDQyxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUM5QixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELHNCQUFzQixFQUFFLElBQUk7SUFDNUIsWUFBWSxFQUFDLElBQUk7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixNQUFNLEVBQUM7UUFDTCxVQUFVLEVBQUM7WUFDVCxPQUFPLEVBQUMsQ0FBQztZQUNULE9BQU8sRUFBQyxDQUFDO1NBQ1Y7S0FFRjtDQUNGLENBQUEifQ==