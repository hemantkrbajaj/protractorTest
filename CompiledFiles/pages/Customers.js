"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Customers {
    static deleteCustomer(custmoreName) {
        protractor_1.element(protractor_1.by.cssContainingText("tr", `${custmoreName}`)).$("td:nth-child(5)").$("button").click();
    }
}
Customers.SearchBox = protractor_1.element(protractor_1.by.model("searchCustomer"));
Customers.TableHeader = protractor_1.element.all(protractor_1.by.css("thead td"));
Customers.DeleteButton = protractor_1.element.all(protractor_1.by.buttonText("Delete"));
exports.Customers = Customers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvQ3VzdG9tZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdDO0FBRXhDLE1BQWEsU0FBUztJQU1YLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBbUI7UUFDNUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNsRyxDQUFDOztBQVBhLG1CQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtBQUMvQyxxQkFBVyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtBQUM3QyxzQkFBWSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUhyRSw4QkFXQyJ9