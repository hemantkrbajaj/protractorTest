import { CommonObjects } from "../Utilities/CommonObjects";
import { element,by } from "protractor";

export class OpenAccounts{
    public static Labels = CommonObjects.Labels
    public static CustomerList = element(by.id("userSelect"))
    public static CurrencyList = element(by.id("currency"))
    public static ProcessButton = CommonObjects.SubmitButton

    public static isProcessButtonDisplayed():any{
        return this.ProcessButton.isDisplayed()
    }

    public static selectCustomer(user:string):void{
            CommonObjects.DropDown(user)
    }

    public static selectCurrency(currency:string):void{
        CommonObjects.DropDown(currency)
    }

    public static isCurrenyListDisplayed():any{
        return this.CurrencyList.isDisplayed()
    }
    
    public static isCustomerListDisplayed():any{
        return this.CustomerList.isDisplayed()
    }

    public static clickProcess():void{
        this.ProcessButton.click()
    }
}