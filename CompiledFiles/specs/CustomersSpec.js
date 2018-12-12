"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const BankManagerLogin_1 = require("../pages/BankManagerLogin");
const Customers_1 = require("../pages/Customers");
describe("Customers specs", function () {
    beforeEach(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        LoginPage_1.LoginPage.clickBankManager();
        BankManagerLogin_1.BankManagerLogin.clickCustomers();
    });
    it("Verify Delete funcitonality", function () {
        Customers_1.Customers.deleteCustomer("Albus");
    });
    it("find customer", function () {
        expect(Customers_1.Customers.findCustomer("Harry")).toEqual(jasmine.arrayContaining(["Harry"]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJzU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL0N1c3RvbWVyc1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsa0RBQStDO0FBQy9DLGdFQUE2RDtBQUM3RCxrREFBK0M7QUFFL0MsUUFBUSxDQUFDLGlCQUFpQixFQUFDO0lBQ3ZCLFVBQVUsQ0FBQztRQUNQLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIscUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzVCLG1DQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZCQUE2QixFQUFDO1FBQ3pCLHFCQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGVBQWUsRUFBQztRQUNmLE1BQU0sQ0FBTSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVGLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==