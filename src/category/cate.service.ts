import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CateService {

  private cates: Category[] = [
    new Category(1, 'Clothes'),
    new Category(2, 'Phone'),
    new Category(4, 'CCMK'),
    new Category(5, 'laptop'),
  ];
  private lastId = 0;

  constructor() { }

  addProduct(category: Category): void{
    this.lastId++;
    category.id = this.lastId;
    this.cates.push(category);
  }

  getProduct(): Category[]{
    return this.cates;
  }

  // getProductById(id: number): Product | undefined {
  //   return this.products.find((product) => product.id === id);
  // }

  // updateProduct(updateProduct: Product): void {
  //   const index = this.products.findIndex((product) => product.id == updateProduct.id);
  //   if(index !== -1){
  //     this.products[index] = updateProduct;
  //   }
  // }

  deleteProduct(item: Category): void {
    this.cates = this.cates.filter((c) => c.id !== item.id);
  }



}
