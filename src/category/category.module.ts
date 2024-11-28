import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CateService } from './cate.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CategoryComponent],
  providers: [CateService]
})
export class CategoryModule { }
