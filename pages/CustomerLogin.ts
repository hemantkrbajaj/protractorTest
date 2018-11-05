import {element,by} from 'protractor'
export class CustomerLogin{
    public static CustomerList = element(by.model("custId"))
    public static LoginButton = element(by.css("button[type='submit']"))
    public static Label = element(by.css("label"))
    public static Customer(customerName:string):any{return element(by.cssContainingText("option",`${customerName}`))}

    public static isCustomerListPresent():any{
            return this.CustomerList.isDisplayed()
    }

    public static isLoginButtonPresent():any{
            return this.LoginButton.isDisplayed()
    }

    public static selectCustomer(selectCustomer:string):void{
        this.Customer(selectCustomer).click()
    }

    public static clickLoginButton():void{
            this.LoginButton.click()
    }

    public static getLabelText():any{
            return this.Label.getText()
    }
}