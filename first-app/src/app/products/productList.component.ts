import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h3>Products</h3>
		<hr>
		<label>Product Name :</label>
		<input type="text" #txtProductName />
		<input type="button" value="Add New" (click)="onAddNewClick(txtProductName.value)"/>
		<div>Product Count : {{products.length}}</div>
		<ol>
			<li *ngFor="let product of products">{{product}}</li>
		</ol>
	`
})
export class ProductListComponent{
	products : string[] = [];

	onAddNewClick(productName : string){
		this.products.push(productName);
	}
}