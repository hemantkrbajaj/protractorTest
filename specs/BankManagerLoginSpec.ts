import { browser } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { BankManagerLogin } from "../pages/BankManagerLogin";
import { AddCustomer } from "../pages/AddCustomer";
import { OpenAccounts } from "../pages/OpenAccount";
import { CustomerPage } from "../pages/CustomerPage";
import { Customers } from "../pages/Customers";

describe("Bank Manager Test scripts",function(){
    beforeEach(function(){
            browser.get(browser.baseUrl)
            LoginPage.clickBankManager()
    })

    it("Validate UI Elements",function(){
            expect<any>(BankManagerLogin.isAddCustomerButtonDisplayed()).toBeTruthy()
            expect<any>(BankManagerLogin.isCustomerButtonDisplayed()).toBeTruthy()
            expect<any>(BankManagerLogin.isOpenAccountButtonDisplayed()).toBeTruthy()
    })

    it("Validate Add Customer is clickable",function(){
            BankManagerLogin.clickAddCustomerButton()
            expect<any>(AddCustomer.getLabels()).toEqual(["First Name :","Last Name :","Post Code :"])
            expect<any>(AddCustomer.AddCustomerBtn.isDisplayed()).toBeTruthy()
    })

    it("Validate Open Accounts is Clickable",function(){
            BankManagerLogin.clickOpenAccount()
            expect<any>(OpenAccounts.Labels.getText()).toEqual(["Customer :","Currency :"])
            expect<any>(OpenAccounts.isProcessButtonDisplayed()).toBeTruthy()
    })

    

})