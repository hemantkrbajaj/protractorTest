"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddCustomer {
    static getLabels() {
        return this.Labels.getText();
    }
}
AddCustomer.Labels = protractor_1.element.all(protractor_1.by.css("label"));
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9BZGRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUVyQyxNQUFhLFdBQVc7SUFHYixNQUFNLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEMsQ0FBQzs7QUFKYSxrQkFBTSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUR2RCxrQ0FNQyJ9