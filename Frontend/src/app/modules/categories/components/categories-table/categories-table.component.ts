import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Category } from '../../../../core/interfaces/category.interface';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styles: ``
})
export class CategoriesTableComponent implements OnInit {
  @Output() onEditCategory: EventEmitter<Category> = new EventEmitter();

  public categories: Category[] = [];
  public currentPage: number = 1;
  public pages: number = 1;

  constructor(
    private readonly _categoriesService: CategoriesService
  ){}

  ngOnInit(): void {
    this.changePage(1);

    this._categoriesService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  public get canPrev(): boolean {
    return (this.currentPage != 1);
  }

  public get canNext(): boolean {
    return (this.currentPage != this.pages);
  }

  public editCategory(item: Category): void {
    this.onEditCategory.emit(item);
  }

  public changePage(page: number): void {
    this.currentPage = page;

    this._categoriesService.getCategoriesByPage(this.currentPage)
      .subscribe(item => {
        this.categories = item
      });
  }
}
