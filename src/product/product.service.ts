import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private products: Product[] = [];
  private lastId = 0;

  constructor() { }

  addProduct(product: Product): void{
    this.lastId++;
    product.id = this.lastId;
    this.products.push(product);
  }

  getProduct(): Product[]{
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(updateProduct: Product): void {
    const index = this.products.findIndex((product) => product.id == updateProduct.id);
    if(index !== -1){
      this.products[index] = updateProduct;
    }
  }

  deleteProduct(item: Product): void {
    this.products = this.products.filter((product) => product.id !== item.id);
  }
}
