import {LoginPage} from '../pages/LoginPage';
import { browser } from 'protractor';
describe("Landing page scripts", function(){
    let loginPageObject:LoginPage=new LoginPage(browser.baseUrl)
    beforeEach(function(){
        
    })
    it("test Header", function(){
        let headerText:string = loginPageObject.getHeaderText()
        expect<any>(headerText).toEqual("XYZ Bank")
    })
})