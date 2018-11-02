"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("../pages/LoginPage");
const protractor_1 = require("protractor");
describe("Landing page scripts", function () {
    let loginPageObject = new LoginPage_1.LoginPage(protractor_1.browser.baseUrl);
    beforeEach(function () {
    });
    it("test Header", function () {
        let headerText = loginPageObject.getHeaderText();
        expect(headerText).toEqual("XYZ Bank");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TY3JlZW5TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvTG9naW5TY3JlZW5TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDN0IsSUFBSSxlQUFlLEdBQVcsSUFBSSxxQkFBUyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUQsVUFBVSxDQUFDO0lBRVgsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsYUFBYSxFQUFFO1FBQ2QsSUFBSSxVQUFVLEdBQVUsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3ZELE1BQU0sQ0FBTSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9