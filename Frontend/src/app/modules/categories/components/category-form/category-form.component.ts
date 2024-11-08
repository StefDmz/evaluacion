import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../core/interfaces/category.interface';
import { SidebarType } from '../../../../core/types/sidebarType';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { CategoriesService } from '../../../../core/services/categories/categories.service';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styles: ``
})
export class CategoryFormComponent implements OnInit {
  @Input() sidebarType!: SidebarType;
  @Input() category?: Category;

  public loading: boolean = false;

  public categoryForm = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
    icon: new FormControl<string>('', [Validators.required])
  });

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _categoriesService: CategoriesService
  ){}

  ngOnInit(): void {
    if(this.sidebarType === 'Create') return;

    if(this.category){
      this.categoryForm.reset(this.category);
    }
  }

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get currentCategory(): Category {
    return this.categoryForm.value as Category;
  }

  public submit(): void {
    if(this.categoryForm.invalid) return;

    this.loading = true;

    if(this.sidebarType === 'Create'){
      this._categoriesService.addCategory(this.currentCategory)
        .subscribe(() => {
          location.reload();
        });
        return;
    }

    this._categoriesService.updateCategory(this.currentCategory)
      .subscribe(() => {
        location.reload();
      });
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
