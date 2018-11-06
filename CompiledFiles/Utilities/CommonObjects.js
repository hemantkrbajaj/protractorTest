"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CommonObjects {
    static DropDown(value) {
        return protractor_1.element(protractor_1.by.cssContainingText("option", `${value}`));
    }
}
CommonObjects.SubmitButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
CommonObjects.Labels = protractor_1.element.all(protractor_1.by.css("label"));
exports.CommonObjects = CommonObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxpdGllcy9Db21tb25PYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBRXpDLE1BQWEsYUFBYTtJQUlmLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSztRQUN4QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3RCxDQUFDOztBQUxhLDBCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtBQUN2RCxvQkFBTSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUZ2RCxzQ0FPQyJ9