import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SidebarType } from '../../../../core/types/sidebarType';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Category } from '../../../../core/interfaces/category.interface';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  @Input() sidebarType!: SidebarType;
  @Input() product?: Product;

  public categories: Category[] = [];
  public loading: boolean = false;
  public imageError: boolean = false;

  public productForm = new FormGroup({
    id: new FormControl<number>(0),
    price: new FormControl<number>(1, [Validators.required, Validators.min(0.01)]),
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    available: new FormControl<boolean>(true),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(150)]),
    categoryId: new FormControl<number>(0, [Validators.required]),
    stock: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    sku: new FormControl<string>(''),
    image: new FormControl<string>('')
  });

  private _imageFile: File | null = null;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _productsService: ProductsService,
    private readonly _categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this._categoriesService.getCategories()
    .subscribe(items => {
      this.categories = items;
    });
    
    if (this.sidebarType === 'Create') return;
    
    if (this.product) {
      this.productForm.reset(this.product);
    }
  }
  
  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get currentProduct(): Product {
    return this.productForm.value as Product;
  }

  public fileSelected(event: any): void {
    this._imageFile = event.target.files[0];
    this.imageError = false;
  }

  public submit(): void {
    if(this.productForm.invalid) return;
    
    if(this.sidebarType === 'Create' && !this._imageFile){
      this.imageError = true;
      return;
    }

    this.loading = true;
    
    if(this._imageFile){
      const formData = new FormData();
      formData.append('imageFile', this._imageFile);

      this._productsService.uploadImage(formData)
        .subscribe(x => {
          this.productForm.controls['image'].setValue(x.image);

          if(this.sidebarType === 'Create'){
            this._productsService.addProduct(this.currentProduct)
              .subscribe( () => {
                location.reload();
              }
              );
          } else {
            this._productsService.updateProduct(this.currentProduct)
              .subscribe(() => {
                location.reload();
              });
          }
        });
    }
    
    this._productsService.updateProduct(this.currentProduct)
      .subscribe(() => {
        location.reload();
      });
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
