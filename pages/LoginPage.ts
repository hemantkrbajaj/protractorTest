import {element,$,by, browser} from 'protractor'
export class LoginPage {
    public static HomeButton = element(by.css(".btn.home"))
    public static CustomerLoginButtn = element(by.css("button[ng-click='customer()']"))
    public static BankManagerLoginButton = element(by.css("button[ng-click='manager()']"))
    public static Header = element(by.css(".mainHeading"))
    baseurl:string

    public constructor(baseURL:string){
        this.baseurl=baseURL
        browser.get(this.baseurl)
    }
     public static getHeaderText():any{
        return this.Header.getText()
    }

    public static clickHome():void{
        this.HomeButton.click()
    }

    public static clickCustomerLogin():void{
        this.CustomerLoginButtn.click()
    }

    public static clickBankManager():void{
        this.BankManagerLoginButton.click()
    }
}
//module.exports = new LoginPage(browser.baseUrl)