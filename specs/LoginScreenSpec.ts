import {LoginPage} from '../pages/LoginPage';
import { browser } from 'protractor';
import {CustomerLogin} from '../pages/CustomerLogin'
import {BankManagerLogin} from '../pages/BankManagerLogin'
describe("Landing page Test scripts", function(){
    beforeAll(function(){
        browser.get(browser.baseUrl)
    })
    beforeEach(function(){
        LoginPage.clickHome()
    })
    it("Validate the Bank Header should be XYZ Bank", function(){
        let headerText:string = LoginPage.getHeaderText()
        expect<any>(headerText).toEqual("XYZ Bank")
    })

    it("Validate Customer Login Button should be present",function(){
        expect<any>(LoginPage.CustomerLoginButtn.isPresent()).toBeTruthy()

    })

    it("Validate Bank Manager Login Button should be present",function(){
        expect<any>(LoginPage.BankManagerLoginButton.isPresent()).toBeTruthy()
    })

    it("Validate that User can click on Customer Login Button and User should be at Customer Page",function(){
            LoginPage.clickCustomerLogin()
            expect<any>(CustomerLogin.isUserListPresent()).toBeTruthy()
    })
    it("Validate that User can click on Bank Manager Login Button and User should be at Manager Page",function(){
        LoginPage.clickBankManager()
        expect<any>(BankManagerLogin.isAddCustomerButtonDisplayed()).toBeTruthy()  
    })
})