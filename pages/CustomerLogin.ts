import {element,by} from 'protractor'
export class CustomerLogin{
    public static UserList = element(by.model("custId"))
    public static LoginButton = element(by.css("button[type='submit']"))

    public constructor(){

    }

    public static isUserListPresent():any{
            return this.UserList.isDisplayed()
    }

    public static isLoginButtonPresent():any{
            return this.LoginButton.isDisplayed()
    }

    public static selectUser(selectUser:string):void{
            this.UserList.sendKeys("var_args")
    }

    public static clickLoginButton():void{
            this.LoginButton.click()
    }
}