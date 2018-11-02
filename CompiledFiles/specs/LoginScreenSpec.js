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
        LoginPage_1.LoginPage.clickHome();
    });
    it("Validate that User can click on Bank Manager Login Button and User should be at Manager Page", function () {
        LoginPage_1.LoginPage.clickBankManager();
        expect(BankManagerLogin_1.BankManagerLogin.isAddCustomerButtonDisplayed()).toBeTruthy();
        LoginPage_1.LoginPage.clickHome();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TY3JlZW5TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvTG9naW5TY3JlZW5TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywwREFBb0Q7QUFDcEQsZ0VBQTBEO0FBQzFELFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNsQyxTQUFTLENBQUM7UUFDTixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQzlDLElBQUksVUFBVSxHQUFVLHFCQUFTLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDakQsTUFBTSxDQUFNLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxrREFBa0QsRUFBQztRQUNsRCxNQUFNLENBQU0scUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBRXRFLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNEQUFzRCxFQUFDO1FBQ3RELE1BQU0sQ0FBTSxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDMUUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkZBQTJGLEVBQUM7UUFDdkYscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQzlCLE1BQU0sQ0FBTSw2QkFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzRCxxQkFBUyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDhGQUE4RixFQUFDO1FBQzlGLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUM1QixNQUFNLENBQU0sbUNBQWdCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3pFLHFCQUFTLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9