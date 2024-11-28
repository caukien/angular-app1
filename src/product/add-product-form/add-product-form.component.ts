import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../model/product';
import { CateService } from '../../category/cate.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  product: Product = new Product(0, '', 0, 0, new Date(), '');

  cateItems: Category[] = []

  @Output() productAdded: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  constructor(private productService: ProductService, private cateSevice: CateService) { }

  ngOnInit() {
    this.cateItems = this.cateSevice.getProduct();
  }
  addProduct(): void {
    if (this.product.id === 0) {
      this.productService.addProduct(this.product);      
      this.productAdded.emit(true);
    } else {
      this.productService.updateProduct(this.product);
    }

    this.product = new Product(0, '', 0, 0, new Date(), '');
  }

  editProduct(item: Product): void {
    this.product = item;
    console.log(item);
    
  }
}
