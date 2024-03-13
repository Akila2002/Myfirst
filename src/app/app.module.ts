import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './child/child.component';
import { SunComponent } from './sun/sun.component';
import { AkilaComponent } from './akila/akila.component';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { HttpClientModule } from '@angular/common/http';
import { AkiComponent } from './aki/aki.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    SunComponent,
    ChildComponent,
    AkilaComponent,
    ReactiveformComponent,
    PostComponent,
    GetComponent,
    AkiComponent,
    ProductSearchComponent,
    ProductDetailsComponent,
    ProductListComponent,
  
  


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }






