import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Category } from '../../../../core/interfaces/category.interface';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styles: ``
})
export class CategoriesTableComponent implements OnInit {
  public currentPage: number = 1;


  constructor(
    private readonly _categoriesService: CategoriesService
  ){}

  ngOnInit(): void {
    
  }

}
