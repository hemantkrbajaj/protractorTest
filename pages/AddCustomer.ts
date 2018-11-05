import {element,by} from 'protractor'

export class AddCustomer {
    public static Labels = element.all(by.css("label"))

    public static getLabels():any{
        return this.Labels.getText()
    }
}