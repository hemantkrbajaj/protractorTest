"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const BankManagerLogin_1 = require("../pages/BankManagerLogin");
const AddCustomer_1 = require("../pages/AddCustomer");
const OpenAccount_1 = require("../pages/OpenAccount");
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
    it("Validate Add Customer is clickable", function () {
        BankManagerLogin_1.BankManagerLogin.clickAddCustomerButton();
        expect(AddCustomer_1.AddCustomer.getLabels()).toEqual(["First Name :", "Last Name :", "Post Code :"]);
        expect(AddCustomer_1.AddCustomer.AddCustomerBtn.isDisplayed()).toBeTruthy();
    });
    it("Validate Open Accounts is Clickable", function () {
        BankManagerLogin_1.BankManagerLogin.clickOpenAccount();
        expect(OpenAccount_1.OpenAccounts.Labels.getText()).toEqual(["Customer :", "Currency :"]);
        expect(OpenAccount_1.OpenAccounts.isProcessButtonDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua01hbmFnZXJMb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9CYW5rTWFuYWdlckxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsZ0VBQTZEO0FBQzdELHNEQUFtRDtBQUNuRCxzREFBb0Q7QUFJcEQsUUFBUSxDQUFDLDJCQUEyQixFQUFDO0lBQ2pDLFVBQVUsQ0FBQztRQUNILG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIscUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNCQUFzQixFQUFDO1FBQ2xCLE1BQU0sQ0FBTSxtQ0FBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekUsTUFBTSxDQUFNLG1DQUFnQixDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN0RSxNQUFNLENBQU0sbUNBQWdCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2pGLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFDO1FBQ2hDLG1DQUFnQixDQUFDLHNCQUFzQixFQUFFLENBQUE7UUFDekMsTUFBTSxDQUFNLHlCQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDMUYsTUFBTSxDQUFNLHlCQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDMUUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUM7UUFDakMsbUNBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUNuQyxNQUFNLENBQU0sMEJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUMvRSxNQUFNLENBQU0sMEJBQVksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDekUsQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDLENBQUMsQ0FBQSJ9