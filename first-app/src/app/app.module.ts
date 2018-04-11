import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneCompnent } from './calculator/calculatorOne.component';
import { CalculatorTwoComponent } from './calculator/calculatorTwo.component';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';
import { ProductListComponent } from './products/productList.component';

/*
declarations 
	- all the UI entities
		* components
		* directives
		* pipes

providers
	- all non UI entities
		* servies

imports
	- other modules that this module depends on
	
*/


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneCompnent,
    CalculatorTwoComponent,
    CalculatorResultComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



