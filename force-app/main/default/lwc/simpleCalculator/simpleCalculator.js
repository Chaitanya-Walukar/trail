import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResult = [];
    @track showPreviousResult = false;
    firstNumber;
    secondNumber;
    
    
    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
        this.firstNumber = event.target.value;
        }else if(inputBoxName ==='secondNumber'){
            this.secondNumber = event.target.value;
        }
    } 

    addHandler(){
        const firstN = parseInt(this.firstNumber);
       // const firstN = Number(this.firstNumber);
      //  const firstN = this.firstNumber
        console.log(firstN);
        const secondN = parseInt(this.secondNumber);
        console.log(secondN);
        this.currentResult = 'The Sum of ' +firstN+ ' and ' +secondN+ ' is ' +(firstN+secondN);
        this.previousResult.push(this.currentResult);
    }

    substractHandler(){
        const firstN = parseInt(this.firstNumber);
        console.log(firstN);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'The Substration of ' +firstN+ ' and ' +secondN+ ' is ' +(firstN-secondN);
        this.previousResult.push(this.currentResult);
    }

    mutiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        console.log(firstN);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'The Multiplication of ' +firstN+ ' and ' +secondN+ ' is ' +(firstN*secondN);
        this.previousResult.push(this.currentResult);
    }
   
    divideHandler(){
        const firstN = parseInt(this.firstNumber);
        console.log(firstN);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'The division of ' +firstN+ ' and ' +secondN+ ' is ' +(firstN/secondN);
        this.previousResult.push(this.currentResult);
    }

    showPreviousResultToggle(event){
        this.showPreviousResult = event.target.checked;
    }
}