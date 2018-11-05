"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CustomerPage {
    static isLogOutButtonPresent() {
        return this.LogOutButton.isDisplayed();
    }
}
CustomerPage.LogOutButton = protractor_1.element(protractor_1.by.css("[ng-click='byebye()']"));
exports.CustomerPage = CustomerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvQ3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdDO0FBRXhDLE1BQWEsWUFBWTtJQUtkLE1BQU0sQ0FBQyxxQkFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzFDLENBQUM7O0FBTGEseUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO0FBRnpFLG9DQVVDIn0=