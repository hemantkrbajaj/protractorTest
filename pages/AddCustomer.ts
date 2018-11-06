import {element,by} from 'protractor'
import { CommonObjects } from '../Utilities/CommonObjects';

export class AddCustomer {
    public static Labels = CommonObjects.Labels
    public static FirstName = element(by.model("fName"))
    public static LastName = element(by.model("lName"))
    public static PostCode = element(by.model("postCd"))
    public static AddCustomerBtn = CommonObjects.SubmitButton

    public static getLabels():any{
        return this.Labels.getText()
    }

    public static enterFirstName(name:string):void{
        this.FirstName.sendKeys(name)
    }

    public static enterLastname(name:string):void{
        this.LastName.sendKeys(name)
    }

    public static enterPostCode(code:string):void{
        this.PostCode.sendKeys(code)
    }
    public static clickAddCustomerBtn():void{
        this.AddCustomerBtn.click()
    }

}