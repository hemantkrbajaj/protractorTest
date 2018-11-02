"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor(baseURL) {
        this.baseurl = baseURL;
        protractor_1.browser.get(this.baseurl);
    }
    static getHeaderText() {
        return this.Header.getText();
    }
    static clickHome() {
        this.HomeButton.click();
    }
    static clickCustomerLogin() {
        this.CustomerLoginButtn.click();
    }
    static clickBankManager() {
        this.BankManagerLoginButton.click();
    }
}
LoginPage.HomeButton = protractor_1.element(protractor_1.by.css(".btn.home"));
LoginPage.CustomerLoginButtn = protractor_1.element(protractor_1.by.css("button[ng-click='customer()']"));
LoginPage.BankManagerLoginButton = protractor_1.element(protractor_1.by.css("button[ng-click='manager()']"));
LoginPage.Header = protractor_1.element(protractor_1.by.css(".mainHeading"));
exports.LoginPage = LoginPage;
//module.exports = new LoginPage(browser.baseUrl)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdEO0FBQ2hELE1BQWEsU0FBUztJQU9sQixZQUFtQixPQUFjO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFBO1FBQ3BCLG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ08sTUFBTSxDQUFDLGFBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUMsa0JBQWtCO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUMxQixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdkMsQ0FBQzs7QUF4QmEsb0JBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUN6Qyw0QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO0FBQ3JFLGdDQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7QUFDeEUsZ0JBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUoxRCw4QkEwQkM7QUFDRCxpREFBaUQifQ==