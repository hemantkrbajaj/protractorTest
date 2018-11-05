import { element,by } from "protractor";

export class CustomerPage {

    public static LogOutButton = element(by.css("[ng-click='byebye()']"))


    public static isLogOutButtonPresent():any{
        return this.LogOutButton.isDisplayed()
    }


}