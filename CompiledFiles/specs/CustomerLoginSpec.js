"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const CustomerLogin_1 = require("../pages/CustomerLogin");
const CustomerPage_1 = require("../pages/CustomerPage");
describe("Customer Login Page specs", function () {
    beforeEach(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        LoginPage_1.LoginPage.clickCustomerLogin();
    });
    it("Validate UI Elements", function () {
        expect(CustomerLogin_1.CustomerLogin.isCustomerListPresent()).toBeTruthy();
        expect(CustomerLogin_1.CustomerLogin.getLabelText()).toEqual("Your Name :");
        expect(CustomerLogin_1.CustomerLogin.isLoginButtonPresent()).not.toBeTruthy();
    });
    it("Validate Login Button displayed only after selecting the User from the List", function () {
        CustomerLogin_1.CustomerLogin.selectCustomer("Harry Potter");
        expect(CustomerLogin_1.CustomerLogin.isLoginButtonPresent()).toBeTruthy();
    });
    it("Validate Login After clicking Login Button User moved to Customer Page", function () {
        CustomerLogin_1.CustomerLogin.selectCustomer("Harry Potter");
        CustomerLogin_1.CustomerLogin.clickLoginButton();
        expect(CustomerPage_1.CustomerPage.isLogOutButtonPresent()).toBeTruthy();
    });
    it("Is Ron Weasly present", function () {
        expect(CustomerLogin_1.CustomerLogin.Customer("Ron Weasly").isPresent()).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9DdXN0b21lckxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsMERBQXVEO0FBQ3ZELHdEQUFrRDtBQUVsRCxRQUFRLENBQUMsMkJBQTJCLEVBQUU7SUFDbEMsVUFBVSxDQUFDO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QixxQkFBUyxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUM7UUFDdEIsTUFBTSxDQUFNLDZCQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQy9ELE1BQU0sQ0FBTSw2QkFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2hFLE1BQU0sQ0FBTSw2QkFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDdEUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkVBQTZFLEVBQUM7UUFDekUsNkJBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDNUMsTUFBTSxDQUFNLDZCQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3RFLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHdFQUF3RSxFQUFDO1FBQ3hFLDZCQUFhLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzVDLDZCQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUNoQyxNQUFNLENBQU0sMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUM7UUFDdkIsTUFBTSxDQUFNLDZCQUFhLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDOUUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9