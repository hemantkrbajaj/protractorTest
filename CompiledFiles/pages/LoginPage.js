"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor(baseURL) {
        this.HomeButton = protractor_1.element(protractor_1.by.css(".btn.home"));
        this.CustomerLoginButtn = protractor_1.element(protractor_1.by.css("button[ng-click='customer()']"));
        this.BankManagerLoginButton = protractor_1.element(protractor_1.by.css("button[ng-click='manager()']"));
        this.Header = protractor_1.element(protractor_1.by.css(".mainHeading"));
        this.baseurl = baseURL;
        protractor_1.browser.get(this.baseurl);
    }
    getHeaderText() {
        return this.Header.getText();
    }
    clickHome() {
        this.HomeButton.click();
    }
    clickCustomerLogin() {
        this.CustomerLoginButtn.click();
    }
    clickBankManager() {
        this.BankManagerLoginButton.click();
    }
}
exports.LoginPage = LoginPage;
//module.exports = new LoginPage(browser.baseUrl)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdEO0FBQ2hELE1BQWEsU0FBUztJQU9sQixZQUFtQixPQUFjO1FBTjFCLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUN6Qyx1QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLDJCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDeEUsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBSTNDLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFBO1FBQ3BCLG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ08sYUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVNLFNBQVM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFTSxrQkFBa0I7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ25DLENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3ZDLENBQUM7Q0FDSjtBQTFCRCw4QkEwQkM7QUFDRCxpREFBaUQifQ==