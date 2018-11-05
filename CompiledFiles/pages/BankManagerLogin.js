"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BankManagerLogin {
    static isAddCustomerButtonDisplayed() {
        return this.AddCustomerButton.isDisplayed();
    }
    static isOpenAccountButtonDisplayed() {
        return this.OpenAccount.isDisplayed();
    }
    static isCustomerButtonDisplayed() {
        return this.CustomersButton.isDisplayed();
    }
    static clickAddCustomerButton() {
        this.AddCustomerButton.click();
    }
    static clickOpenAccount() {
        this.OpenAccount.click();
    }
    static clickCustomers() {
        this.CustomersButton.click();
    }
}
BankManagerLogin.AddCustomerButton = protractor_1.element(protractor_1.by.css("button[ng-click='addCust()']"));
BankManagerLogin.OpenAccount = protractor_1.element(protractor_1.by.css("button[ng-click='openAccount()']"));
BankManagerLogin.CustomersButton = protractor_1.element(protractor_1.by.css("button[ng-click='showCust()']"));
exports.BankManagerLogin = BankManagerLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua01hbmFnZXJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0JhbmtNYW5hZ2VyTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsTUFBYSxnQkFBZ0I7SUFLbEIsTUFBTSxDQUFDLDRCQUE0QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLDRCQUE0QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyx5QkFBeUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pELENBQUM7SUFFTSxNQUFNLENBQUMsc0JBQXNCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3BDLENBQUM7O0FBMUJhLGtDQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7QUFDbkUsNEJBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLGdDQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtBQUhwRiw0Q0E0QkMifQ==