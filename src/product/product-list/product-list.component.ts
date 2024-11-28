import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showAddProductForm = false;
  showEditProductForm = false;
  

  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
  }

  productToEdit: Product | null = null;

  items : Product[] = [
  ]

  chooseItem(item: Product, action: string): void {
    if(action === 'delete'){
      this.productService.deleteProduct(item);
      this.items = this.productService.getProduct();
    }else if(action === "edit"){
      this.productToEdit = { ...item };
      this.showEditProductForm = true;
    }

  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.items = this.productService.getProduct();
  }
  closeAddProductForm(isAdded: boolean): void {
    if (isAdded) {
      this.showAddProductForm = false;
    }
  }
  closeEditProductForm(isEdited: boolean): void {
    if (isEdited) {
      this.showEditProductForm = false;
    }
  }

}
