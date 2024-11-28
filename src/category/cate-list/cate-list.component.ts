import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CateService } from '../cate.service';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
    chooseItem(_t14: Category,arg1: string) {
      throw new Error('Method not implemented.');
    }

  items : Category[] = [
  ]

  constructor(private cateService: CateService) { }

  ngOnInit() {
    this.items = this.cateService.getProduct();
  }

}
