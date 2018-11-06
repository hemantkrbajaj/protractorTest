"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommonObjects_1 = require("../Utilities/CommonObjects");
const protractor_1 = require("protractor");
class OpenAccounts {
    static isProcessButtonDisplayed() {
        return this.ProcessButton.isDisplayed();
    }
    static selectCustomer(user) {
        CommonObjects_1.CommonObjects.DropDown(user);
    }
    static selectCurrency(currency) {
        CommonObjects_1.CommonObjects.DropDown(currency);
    }
    static isCurrenyListDisplayed() {
        return this.CurrencyList.isDisplayed();
    }
    static isCustomerListDisplayed() {
        return this.CustomerList.isDisplayed();
    }
    static clickProcess() {
        this.ProcessButton.click();
    }
}
OpenAccounts.Labels = CommonObjects_1.CommonObjects.Labels;
OpenAccounts.CustomerList = protractor_1.element(protractor_1.by.id("userSelect"));
OpenAccounts.CurrencyList = protractor_1.element(protractor_1.by.id("currency"));
OpenAccounts.ProcessButton = CommonObjects_1.CommonObjects.SubmitButton;
exports.OpenAccounts = OpenAccounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkFjY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9PcGVuQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUEyRDtBQUMzRCwyQ0FBd0M7QUFFeEMsTUFBYSxZQUFZO0lBTWQsTUFBTSxDQUFDLHdCQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDM0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBVztRQUNoQyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFlO1FBQ3hDLDZCQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsc0JBQXNCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRU0sTUFBTSxDQUFDLHVCQUF1QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDMUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUIsQ0FBQzs7QUEzQmEsbUJBQU0sR0FBRyw2QkFBYSxDQUFDLE1BQU0sQ0FBQTtBQUM3Qix5QkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0FBQzNDLHlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7QUFDekMsMEJBQWEsR0FBRyw2QkFBYSxDQUFDLFlBQVksQ0FBQTtBQUo1RCxvQ0E2QkMifQ==