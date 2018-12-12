"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Customers {
    static deleteCustomer(custmoreName) {
        protractor_1.element(protractor_1.by.cssContainingText("tr", `${custmoreName}`)).$("td:nth-child(5)").$("button").click();
    }
    static findCustomer(customerName) {
        this.SearchBox.sendKeys(customerName);
        //console.log(this.TableRow.getText())
        let rows = this.TableRows.all(protractor_1.by.tagName("tr"));
        let cells = rows.all(protractor_1.by.tagName("td"));
        let firstName = cells.map(function (elm) {
            return elm.getText();
        });
        return firstName;
    }
}
Customers.SearchBox = protractor_1.element(protractor_1.by.model("searchCustomer"));
Customers.TableHeader = protractor_1.element.all(protractor_1.by.css("thead td"));
Customers.DeleteButton = protractor_1.element.all(protractor_1.by.buttonText("Delete"));
Customers.TableRows = protractor_1.element.all(protractor_1.by.tagName("tbody"));
Customers.TableRow = protractor_1.element.all(protractor_1.by.repeater("cust in Customers"));
exports.Customers = Customers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvQ3VzdG9tZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFEO0FBR3JELE1BQWEsU0FBUztJQVFYLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBbUI7UUFDNUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNsRyxDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFnQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyQyxzQ0FBc0M7UUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQy9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksU0FBUyxHQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFPO1lBQy9CLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxTQUFTLENBQUE7SUFFbkIsQ0FBQzs7QUFyQmEsbUJBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0FBQy9DLHFCQUFXLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBQzdDLHNCQUFZLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ25ELG1CQUFTLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQzVDLGtCQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7QUFMMUUsOEJBeUJDIn0=