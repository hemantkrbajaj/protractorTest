"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CustomerLogin {
    constructor() {
    }
    static isUserListPresent() {
        return this.UserList.isDisplayed();
    }
    static isLoginButtonPresent() {
        return this.LoginButton.isDisplayed();
    }
    static selectUser(selectUser) {
        this.UserList.sendKeys("var_args");
    }
    static clickLoginButton() {
        this.LoginButton.click();
    }
}
CustomerLogin.UserList = protractor_1.element(protractor_1.by.model("custId"));
CustomerLogin.LoginButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
exports.CustomerLogin = CustomerLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0N1c3RvbWVyTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUM7QUFDckMsTUFBYSxhQUFhO0lBSXRCO0lBRUEsQ0FBQztJQUVNLE1BQU0sQ0FBQyxpQkFBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzFDLENBQUM7SUFFTSxNQUFNLENBQUMsb0JBQW9CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFpQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7O0FBckJhLHNCQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7QUFDdEMseUJBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO0FBRnhFLHNDQXVCQyJ9