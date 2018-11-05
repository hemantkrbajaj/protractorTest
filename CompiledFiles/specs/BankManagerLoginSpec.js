"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const BankManagerLogin_1 = require("../pages/BankManagerLogin");
describe("Bank Manager Test scripts", function () {
    beforeEach(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        LoginPage_1.LoginPage.clickBankManager();
    });
    it("Validate UI Elements", function () {
        expect(BankManagerLogin_1.BankManagerLogin.isAddCustomerButtonDisplayed()).toBeTruthy();
        expect(BankManagerLogin_1.BankManagerLogin.isCustomerButtonDisplayed()).toBeTruthy();
        expect(BankManagerLogin_1.BankManagerLogin.isOpenAccountButtonDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua01hbmFnZXJMb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9CYW5rTWFuYWdlckxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsZ0VBQTZEO0FBRTdELFFBQVEsQ0FBQywyQkFBMkIsRUFBQztJQUNqQyxVQUFVLENBQUM7UUFDSCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzVCLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztRQUNsQixNQUFNLENBQU0sbUNBQWdCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3pFLE1BQU0sQ0FBTSxtQ0FBZ0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdEUsTUFBTSxDQUFNLG1DQUFnQixDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNqRixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=