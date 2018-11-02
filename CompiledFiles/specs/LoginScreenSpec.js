"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("../pages/LoginPage");
const protractor_1 = require("protractor");
const CustomerLogin_1 = require("../pages/CustomerLogin");
const BankManagerLogin_1 = require("../pages/BankManagerLogin");
describe("Landing page Test scripts", function () {
    beforeAll(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
    });
    beforeEach(function () {
        LoginPage_1.LoginPage.clickHome();
    });
    it("Validate the Bank Header should be XYZ Bank", function () {
        let headerText = LoginPage_1.LoginPage.getHeaderText();
        expect(headerText).toEqual("XYZ Bank");
    });
    it("Validate Customer Login Button should be present", function () {
        expect(LoginPage_1.LoginPage.CustomerLoginButtn.isPresent()).toBeTruthy();
    });
    it("Validate Bank Manager Login Button should be present", function () {
        expect(LoginPage_1.LoginPage.BankManagerLoginButton.isPresent()).toBeTruthy();
    });
    it("Validate that User can click on Customer Login Button and User should be at Customer Page", function () {
        LoginPage_1.LoginPage.clickCustomerLogin();
        expect(CustomerLogin_1.CustomerLogin.isUserListPresent()).toBeTruthy();
    });
    it("Validate that User can click on Bank Manager Login Button and User should be at Manager Page", function () {
        LoginPage_1.LoginPage.clickBankManager();
        expect(BankManagerLogin_1.BankManagerLogin.isAddCustomerButtonDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TY3JlZW5TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvTG9naW5TY3JlZW5TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywwREFBb0Q7QUFDcEQsZ0VBQTBEO0FBQzFELFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNsQyxTQUFTLENBQUM7UUFDTixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDO1FBQ1AscUJBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtRQUM5QyxJQUFJLFVBQVUsR0FBVSxxQkFBUyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ2pELE1BQU0sQ0FBTSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0RBQWtELEVBQUM7UUFDbEQsTUFBTSxDQUFNLHFCQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUV0RSxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzREFBc0QsRUFBQztRQUN0RCxNQUFNLENBQU0scUJBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzFFLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJGQUEyRixFQUFDO1FBQ3ZGLHFCQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUM5QixNQUFNLENBQU0sNkJBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsOEZBQThGLEVBQUM7UUFDOUYscUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzVCLE1BQU0sQ0FBTSxtQ0FBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDN0UsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9