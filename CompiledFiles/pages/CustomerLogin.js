"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CustomerLogin {
    static Customer(customerName) { return protractor_1.element(protractor_1.by.cssContainingText("option", `${customerName}`)); }
    static isCustomerListPresent() {
        return this.CustomerList.isDisplayed();
    }
    static isLoginButtonPresent() {
        return this.LoginButton.isDisplayed();
    }
    static selectCustomer(selectCustomer) {
        this.Customer(selectCustomer).click();
    }
    static clickLoginButton() {
        this.LoginButton.click();
    }
    static getLabelText() {
        return this.Label.getText();
    }
}
CustomerLogin.CustomerList = protractor_1.element(protractor_1.by.model("custId"));
CustomerLogin.LoginButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
CustomerLogin.Label = protractor_1.element(protractor_1.by.css("label"));
exports.CustomerLogin = CustomerLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0N1c3RvbWVyTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsTUFBYSxhQUFhO0lBSWYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFtQixJQUFNLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUUxRyxNQUFNLENBQUMscUJBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM5QyxDQUFDO0lBRU0sTUFBTSxDQUFDLG9CQUFvQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBcUI7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbkMsQ0FBQzs7QUF2QmEsMEJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUMxQyx5QkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7QUFDdEQsbUJBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUhsRCxzQ0F5QkMifQ==