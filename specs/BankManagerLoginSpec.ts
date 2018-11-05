import { browser } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { BankManagerLogin } from "../pages/BankManagerLogin";

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

})