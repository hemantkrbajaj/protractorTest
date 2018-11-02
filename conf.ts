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
    specs: ['./specs/LoginScreenSpec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    useAllAngular2AppRoots: true,
    directConnet:true,
    //noGlobals:false
    //onPrepare: () => void;
    //onComplete: () => void;
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