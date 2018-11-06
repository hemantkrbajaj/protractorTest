"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const CustomerLogin_1 = require("../pages/CustomerLogin");
const CustomerPage_1 = require("../pages/CustomerPage");
const CommonObjects_1 = require("../Utilities/CommonObjects");
describe("Customer Login Page specs", function () {
    beforeEach(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        LoginPage_1.LoginPage.clickCustomerLogin();
    });
    it("Validate UI Elements", function () {
        expect(CustomerLogin_1.CustomerLogin.isCustomerListPresent()).toBeTruthy();
        expect(CustomerLogin_1.CustomerLogin.getLabelText()).toEqual(["Your Name :"]);
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
        expect(CommonObjects_1.CommonObjects.DropDown("Ron Weasly").isPresent()).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9DdXN0b21lckxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsMERBQXVEO0FBQ3ZELHdEQUFrRDtBQUNsRCw4REFBMkQ7QUFFM0QsUUFBUSxDQUFDLDJCQUEyQixFQUFFO0lBQ2xDLFVBQVUsQ0FBQztRQUNQLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNCQUFzQixFQUFDO1FBQ3RCLE1BQU0sQ0FBTSw2QkFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMvRCxNQUFNLENBQU0sNkJBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDbEUsTUFBTSxDQUFNLDZCQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN0RSxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2RUFBNkUsRUFBQztRQUN6RSw2QkFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQU0sNkJBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDdEUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUM7UUFDeEUsNkJBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDNUMsNkJBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ2hDLE1BQU0sQ0FBTSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztRQUN2QixNQUFNLENBQU0sNkJBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUM5RSxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=