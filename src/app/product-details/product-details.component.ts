// src/app/product-details/product-details.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productDetails: any; // Assuming the API response structure

  // You can add more logic or display information in this component
}
