import { LightningElement, track} from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['Mumbai', 'Pune', 'Chennai', 'Banglore'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}