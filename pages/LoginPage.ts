import {element,$,by, browser} from 'protractor'
export class LoginPage {
    public HomeButton = element(by.css(".btn.home"))
    public CustomerLoginButtn = element(by.css("button[ng-click='customer()']"))
    public BankManagerLoginButton = element(by.css("button[ng-click='manager()']"))
    public Header = element(by.css(".mainHeading"))
    baseurl:string

    public constructor(baseURL:string){
        this.baseurl=baseURL
        browser.get(this.baseurl)
    }
     public getHeaderText():any{
        return this.Header.getText()
    }

    public clickHome():void{
        this.HomeButton.click()
    }

    public clickCustomerLogin():void{
        this.CustomerLoginButtn.click()
    }

    public clickBankManager():void{
        this.BankManagerLoginButton.click()
    }
}
//module.exports = new LoginPage(browser.baseUrl)