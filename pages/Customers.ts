import { element,by } from "protractor";

export class Customers{
    public static SearchBox = element(by.model("searchCustomer"))
    public static TableHeader = element.all(by.css("thead td"))
    public static DeleteButton = element.all(by.buttonText("Delete"))
    

    public static deleteCustomer(custmoreName:string):void{
        element(by.cssContainingText("tr",`${custmoreName}`)).$("td:nth-child(5)").$("button").click()
    }


}