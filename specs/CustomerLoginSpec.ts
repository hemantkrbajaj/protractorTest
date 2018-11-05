import { browser } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { CustomerLogin } from "../pages/CustomerLogin";
import {CustomerPage} from "../pages/CustomerPage"

describe("Customer Login Page specs", function(){
    beforeEach(function(){
        browser.get(browser.baseUrl)
        LoginPage.clickCustomerLogin()
    })

    it("Validate UI Elements",function(){
        expect<any>(CustomerLogin.isCustomerListPresent()).toBeTruthy()
        expect<any>(CustomerLogin.getLabelText()).toEqual("Your Name :")
        expect<any>(CustomerLogin.isLoginButtonPresent()).not.toBeTruthy()
    })

    it("Validate Login Button displayed only after selecting the User from the List",function(){
            CustomerLogin.selectCustomer("Harry Potter")
            expect<any>(CustomerLogin.isLoginButtonPresent()).toBeTruthy()
    })

    it("Validate Login After clicking Login Button User moved to Customer Page",function(){
        CustomerLogin.selectCustomer("Harry Potter")
        CustomerLogin.clickLoginButton()
        expect<any>(CustomerPage.isLogOutButtonPresent()).toBeTruthy()
    })

    it("Is Ron Weasly present",function(){
        expect<any>(CustomerLogin.Customer("Ron Weasly").isPresent()).toBeTruthy()
    })
})