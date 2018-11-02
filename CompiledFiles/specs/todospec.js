"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Demo App', function () {
    var firstNumber = protractor_1.element(protractor_1.by.model('first'));
    var secondNumber = protractor_1.element(protractor_1.by.model('second'));
    var goButton = protractor_1.element(protractor_1.by.id('gobutton'));
    var latestResult = protractor_1.element(protractor_1.by.binding('latest'));
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('should have a title', function () {
        expect(protractor_1.browser.getTitle()).toEqual('Super Calculator');
    });
    it('should add one and two', function () {
        firstNumber.sendKeys(protractor_1.browser.params.operation1.number1);
        secondNumber.sendKeys(protractor_1.browser.params.operation1.number2);
        var result = protractor_1.browser.params.operation1.number1 + protractor_1.browser.params.operation1.number2;
        goButton.click();
        expect(latestResult.getText()).toEqual(String(result));
    });
    it('should add four and six', function () {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        expect(latestResult.getText()).toEqual('10');
    });
    it('should read the value from an input', function () {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy90b2Rvc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUIsSUFBSSxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakQsVUFBVSxDQUFDO1FBQ1Qsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN4QixNQUFNLENBQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQzNCLFdBQVcsQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxHQUFHLG9CQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQTtRQUNsRixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFNLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUM1QixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBTSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUU7UUFDeEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=