import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  constructor(private productService: ProductService,private router:Router) {}
   pooja1=new FormGroup({
    product_id:new FormControl(),
    branch_id:new FormControl(),
    checkbox:new FormControl()
  });

onSubmit() {
  const data = {
    "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
    "language_code": "en",
    "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
    "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
    "device_type": "android",
    "mst_product_id":41199,
    "branch_id":4,
    "price_type":1,
    "dishtype_id":"0",
    "is_for_repeat_set_combo":0
  };
   this.productService.getProductDetails(data).subscribe(
    (response)=>{
      console.log('Response:',response);
      this.productDetails = response; 
     this.router.navigate(["/product-list"])
     

    },
    (error)=>{
      console.log('Error:',error);
    }
    );
  }
   productDetails: any;
}
      