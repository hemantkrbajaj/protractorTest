import { browser } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { BankManagerLogin } from "../pages/BankManagerLogin";
import { Customers } from "../pages/Customers";

describe("Customers specs",function(){
    beforeEach(function(){
        browser.get(browser.baseUrl)
        LoginPage.clickBankManager()
        BankManagerLogin.clickCustomers()
    })

    it("Verify Delete funcitonality",function(){
            Customers.deleteCustomer("Albus")
    })

    it("find customer",function(){
        expect<any>(Customers.findCustomer("Harry")).toEqual(jasmine.arrayContaining(["Harry"]))
    })
})