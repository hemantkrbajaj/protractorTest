"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const CommonObjects_1 = require("../Utilities/CommonObjects");
class AddCustomer {
    static getLabels() {
        return this.Labels.getText();
    }
    static enterFirstName(name) {
        this.FirstName.sendKeys(name);
    }
    static enterLastname(name) {
        this.LastName.sendKeys(name);
    }
    static enterPostCode(code) {
        this.PostCode.sendKeys(code);
    }
    static clickAddCustomerBtn() {
        this.AddCustomerBtn.click();
    }
}
AddCustomer.Labels = CommonObjects_1.CommonObjects.Labels;
AddCustomer.FirstName = protractor_1.element(protractor_1.by.model("fName"));
AddCustomer.LastName = protractor_1.element(protractor_1.by.model("lName"));
AddCustomer.PostCode = protractor_1.element(protractor_1.by.model("postCd"));
AddCustomer.AddCustomerBtn = CommonObjects_1.CommonObjects.SubmitButton;
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9BZGRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyw4REFBMkQ7QUFFM0QsTUFBYSxXQUFXO0lBT2IsTUFBTSxDQUFDLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQVc7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFXO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDTSxNQUFNLENBQUMsbUJBQW1CO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQzs7QUF2QmEsa0JBQU0sR0FBRyw2QkFBYSxDQUFDLE1BQU0sQ0FBQTtBQUM3QixxQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ3RDLG9CQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDckMsb0JBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUN0QywwQkFBYyxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFBO0FBTDdELGtDQTBCQyJ9