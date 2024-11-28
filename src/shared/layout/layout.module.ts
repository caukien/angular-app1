import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductModule } from "../../product/product.module";

@NgModule({
  imports: [
    CommonModule,
    ProductModule
],
  declarations: [LayoutComponent, NavBarComponent, FooterComponent],
  exports: [
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    ProductModule
  ]
})
export class LayoutModule { }
