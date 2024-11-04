import { Component, OnInit } from '@angular/core';
import { Page } from '../../../../core/interfaces/page.interface';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Category } from '../../../../core/interfaces/category.interface';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styles: ``
})
export class CategoriesTableComponent implements OnInit {
  public currentPage: number = 1;

  private _categoryPage!: Page;

  constructor(
    private readonly _categoriesService: CategoriesService
  ){}

  ngOnInit(): void {
    this.changePage(1);
  }

  public get lastPage(): number {
    return this._categoryPage.last;
  }

  public get canPrev(): boolean {
    return this._categoryPage.prev != null;
  }

  public get canNext(): boolean {
    return this._categoryPage.next != null;
  }

  public get pages(): number {
    return this._categoryPage.pages;
  }

  public get categories(): Category[] {
    return this._categoryPage.data;
  }

  public changePage(page: number): void {
    this.currentPage = page;

    this._categoriesService.getCatgoriesByPage(this.currentPage)
      .subscribe(item => {
        this._categoryPage = item
      });
  }
}
