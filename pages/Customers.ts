import { element,by, $$, browser } from "protractor";
import { Driver } from "selenium-webdriver/firefox";

export class Customers{
    public static SearchBox = element(by.model("searchCustomer"))
    public static TableHeader = element.all(by.css("thead td"))
    public static DeleteButton = element.all(by.buttonText("Delete"))
    public static TableRows = element.all(by.tagName("tbody"))
    public static TableRow = element.all(by.repeater("cust in Customers"))
    

    public static deleteCustomer(custmoreName:string):void{
        element(by.cssContainingText("tr",`${custmoreName}`)).$("td:nth-child(5)").$("button").click()
    }

    public static findCustomer(customerName:any):any{
        this.SearchBox.sendKeys(customerName)
        //console.log(this.TableRow.getText())
        let rows = this.TableRows.all(by.tagName("tr"))
        let cells = rows.all(by.tagName("td"))
       let firstName=cells.map(function(elm:any){
                return elm.getText()
       })
       return firstName

    }


}