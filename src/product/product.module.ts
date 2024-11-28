import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';
import { CateListComponent } from '../category/cate-list/cate-list.component';
import { CateService } from '../category/cate.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductFormComponent,
    EditProductFormComponent,
    CateListComponent
  ],
  exports: [
    ProductComponent,
  ],
  providers: [ProductService, CateService]
})
export class ProductModule { }
