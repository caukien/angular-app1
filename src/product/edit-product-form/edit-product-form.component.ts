import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  @Input() product: Product | null = null;
  @Output() productEdited: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (!this.product) {
      this.product = new Product(0, '', 0, 0, new Date(), '');
    }
  }

  saveProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product);
      this.productEdited.emit(true);
    }
  }

}
