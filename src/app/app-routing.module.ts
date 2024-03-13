import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { AkiComponent } from './aki/aki.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'product',component: ProductComponent},
  {path:'error',component: ErrorComponent},
  {path:'post',component:PostComponent},
  {path:'get',component:GetComponent},
  {path:'aki',component:AkiComponent},
  {path:'product-search',component:ProductSearchComponent},
  {path:'product-details', component:ProductDetailsComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'',redirectTo:'product-search',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
