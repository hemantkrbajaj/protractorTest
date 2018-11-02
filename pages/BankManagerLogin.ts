import {element,by} from 'protractor'
export class BankManagerLogin{
    public static AddCustomerButton = element(by.css("button[ng-click='addCust()']"))
    public static OpenAccount = element(by.css("button[ng-click='openAccount()']"))
    public static CustomersButton = element(by.css("button[ng-click='showCust()']"))

    public static isAddCustomerButtonDisplayed():any{
            return this.AddCustomerButton.isDisplayed()
    }

    public static isOpenAccountButtonDisplayed():any{
            return this.OpenAccount.isDisplayed()
    }

    public static isCustomerButtonDisplayed(selectUser:string):void{
            this.CustomersButton.sendKeys("var_args")
    }

    public static clickAddCustomerButton():void{
            this.AddCustomerButton.click()
    }
}