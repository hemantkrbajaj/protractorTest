"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const CommonObjects_1 = require("../Utilities/CommonObjects");
class CustomerLogin {
    static isCustomerListPresent() {
        return this.CustomerList.isDisplayed();
    }
    static isLoginButtonPresent() {
        return this.LoginButton.isDisplayed();
    }
    static selectCustomer(selectCustomer) {
        CommonObjects_1.CommonObjects.DropDown(selectCustomer).click();
    }
    static clickLoginButton() {
        this.LoginButton.click();
    }
    static getLabelText() {
        return this.Label.getText();
    }
}
CustomerLogin.CustomerList = protractor_1.element(protractor_1.by.model("custId"));
CustomerLogin.LoginButton = CommonObjects_1.CommonObjects.SubmitButton;
CustomerLogin.Label = CommonObjects_1.CommonObjects.Labels;
exports.CustomerLogin = CustomerLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0N1c3RvbWVyTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsOERBQTJEO0FBQzNELE1BQWEsYUFBYTtJQUtmLE1BQU0sQ0FBQyxxQkFBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzlDLENBQUM7SUFFTSxNQUFNLENBQUMsb0JBQW9CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFxQjtRQUM5Qyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNsRCxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbkMsQ0FBQzs7QUF0QmEsMEJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUMxQyx5QkFBVyxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFBO0FBQ3hDLG1CQUFLLEdBQUcsNkJBQWEsQ0FBQyxNQUFNLENBQUE7QUFIOUMsc0NBd0JDIn0=