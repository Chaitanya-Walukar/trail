import { LightningElement, track} from 'lwc';

export default class BMICalculator extends LightningElement {
  /*  @track BMIResult;
    weight;
    height; */

    @track bmiData = {
        weight : 0,
        height : 0,
        BMIResult : 0
    }

    inputChangeHandler(event){
        const inputBoxType = event.target.name;
        if(inputBoxType === 'weight'){
           // this.weight = event.target.value;
           this.bmiData.weight = event.target.value;
           // let c = parseFloat(event.target.value);
           // console.log(c);
        }  else if(inputBoxType === 'height'){
                //this.height = event.target.value;
                this.bmiData.height = event.target.value;
            }
        }

        BMIResultHandler(){
            const kgs = parseFloat(this.bmiData.weight);
            const meters = parseFloat(this.bmiData.height);
            const result = kgs/(meters*meters);
            //this.BMIResult = result; 
            this.bmiData.BMIResult = result;
        }
 }