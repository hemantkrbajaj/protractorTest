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
    static isCustomerButtonDisplayed(selectUser) {
        this.CustomersButton.sendKeys("var_args");
    }
    static clickAddCustomerButton() {
        this.AddCustomerButton.click();
    }
}
BankManagerLogin.AddCustomerButton = protractor_1.element(protractor_1.by.css("button[ng-click='addCust()']"));
BankManagerLogin.OpenAccount = protractor_1.element(protractor_1.by.css("button[ng-click='openAccount()']"));
BankManagerLogin.CustomersButton = protractor_1.element(protractor_1.by.css("button[ng-click='showCust()']"));
exports.BankManagerLogin = BankManagerLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua01hbmFnZXJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0JhbmtNYW5hZ2VyTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsTUFBYSxnQkFBZ0I7SUFLbEIsTUFBTSxDQUFDLDRCQUE0QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLDRCQUE0QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFpQjtRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRU0sTUFBTSxDQUFDLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdEMsQ0FBQzs7QUFsQmEsa0NBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtBQUNuRSw0QkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUE7QUFDakUsZ0NBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO0FBSHBGLDRDQW9CQyJ9