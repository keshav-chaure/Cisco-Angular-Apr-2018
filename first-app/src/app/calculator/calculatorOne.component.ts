import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneCompnent{

	result : number = 0;

	onAddClick(n1, n2){
		this.result = n1 + n2;
	}

	onSubtractClick(n1, n2){
		this.result = n1 - n2;
	}

	onMultiplyClick(n1, n2){
		this.result = n1 * n2;
	}

	onDivideClick(n1, n2){
		this.result = n1 / n2;
	}
}