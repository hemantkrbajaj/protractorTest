import {element,by} from 'protractor'
import { CommonObjects } from '../Utilities/CommonObjects';
export class CustomerLogin{
    public static CustomerList = element(by.model("custId"))
    public static LoginButton = CommonObjects.SubmitButton
    public static Label = CommonObjects.Labels

    public static isCustomerListPresent():any{
            return this.CustomerList.isDisplayed()
    }

    public static isLoginButtonPresent():any{
            return this.LoginButton.isDisplayed()
    }

    public static selectCustomer(selectCustomer:string):void{
        CommonObjects.DropDown(selectCustomer).click()
    }

    public static clickLoginButton():void{
            this.LoginButton.click()
    }

    public static getLabelText():any{
            return this.Label.getText()
    }
}