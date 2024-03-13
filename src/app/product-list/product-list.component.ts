// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   productDetails: any;
//   constructor(private productService: ProductService) {

//   }
//   ngOnInit() {
//     const data = {
//       "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
//       "language_code": "en",
//       "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
//       "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
//       "device_type": "android",
//       "mst_product_id": 41199,
//       "branch_id": 4,
//       "price_type": 1,
//       "dishtype_id": "0",
//       "is_for_repeat_set_combo": 0
//     }; 

//     this.productService.getProductDetails(data).subscribe(
//       (response: any) => {
//         this.productDetails = response;
//       },
//       (error: any) => {
//         console.error('Error fetching data:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productDetails: any;
  selectedProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const data = {
      "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      "language_code": "en",
      "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      "device_type": "android",
      "mst_product_id": 41199,
      "branch_id": 4,
      "price_type": 1,
      "dishtype_id": "0",
      "is_for_repeat_set_combo": 0
    };

    this.productService.getProductDetails(data).subscribe(
      (response: any) => {
        this.productDetails = response;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  showSelectedProducts() {
    this.selectedProducts = this.getAllSelectedProducts();
  }

  private getAllSelectedProducts(): any[] {
    const selectedProducts: any[] = [];

    if (this.productDetails && this.productDetails.data.details) {
      for (const category of this.productDetails.data.details) {
        for (const product of category.product_details) {
          if (product.isCheckboxCheck) {
            selectedProducts.push({
              category: category.mst_cat_name,
              product: product.mst_product_name
            });
          }
        }
      }
    }

    return selectedProducts;
  }
}
