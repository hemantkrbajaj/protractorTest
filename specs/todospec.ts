import {browser,element,by} from 'protractor';
xdescribe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect<any>(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(browser.params.operation1.number1);
      secondNumber.sendKeys(browser.params.operation1.number2);
      var result = browser.params.operation1.number1 + browser.params.operation1.number2
      goButton.click();
      expect<any>(latestResult.getText()).toEqual(String(result));
    });
  
    it('should add four and six', function() {
      firstNumber.sendKeys(4);
      secondNumber.sendKeys(6);
      goButton.click();
      expect<any>(latestResult.getText()).toEqual('10');
    });
  
    it('should read the value from an input', function() {
      firstNumber.sendKeys(1);
      expect<any>(firstNumber.getAttribute('value')).toEqual('1');
    });
  });