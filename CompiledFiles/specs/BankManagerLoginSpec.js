"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const BankManagerLogin_1 = require("../pages/BankManagerLogin");
const AddCustomer_1 = require("../pages/AddCustomer");
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua01hbmFnZXJMb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9CYW5rTWFuYWdlckxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsZ0VBQTZEO0FBQzdELHNEQUFtRDtBQUVuRCxRQUFRLENBQUMsMkJBQTJCLEVBQUM7SUFDakMsVUFBVSxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QixxQkFBUyxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUM7UUFDbEIsTUFBTSxDQUFNLG1DQUFnQixDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN6RSxNQUFNLENBQU0sbUNBQWdCLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3RFLE1BQU0sQ0FBTSxtQ0FBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDakYsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0NBQW9DLEVBQUM7UUFDaEMsbUNBQWdCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtRQUN6QyxNQUFNLENBQU0seUJBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUNsRyxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=