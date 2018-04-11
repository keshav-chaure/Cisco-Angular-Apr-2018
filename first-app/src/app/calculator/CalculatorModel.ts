/*
Represents the state and behavior of a calculator model
*/

export class CalculatorModel{
	//state
	public n1 : number = 0;
	public n2 : number = 0;

	public result : number = 0;


	//behavior
	add(){
		this.result = this.n1 + this.n2;
	}

	subtract(){
		this.result = this.n1 - this.n2;
	}

	multiply(){
		this.result = this.n1 * this.n2;
	}

	divide(){
		this.result = this.n1 / this.n2;
	}
}