import { element, by } from "protractor";

export class CommonObjects{
    public static SubmitButton = element(by.css("button[type='submit']"))
    public static Labels = element.all(by.css("label"))

    public static DropDown(value):any{
        return element(by.cssContainingText("option",`${value}`))
    }
}