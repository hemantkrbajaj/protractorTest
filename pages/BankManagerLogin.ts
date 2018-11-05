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

    public static isCustomerButtonDisplayed():any{
            return this.CustomersButton.isDisplayed()
    }

    public static clickAddCustomerButton():void{
            this.AddCustomerButton.click()
    }

    public static clickOpenAccount():void{
            this.OpenAccount.click()
    }

    public static clickCustomers():void{
            this.CustomersButton.click()
    }
}