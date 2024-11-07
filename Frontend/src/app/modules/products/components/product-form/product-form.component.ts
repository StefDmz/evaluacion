import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarType } from '../../../../core/types/sidebarType';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  @Input() sidebarType!: SidebarType;
  @Input() product?: Product;

  public productForm = new FormGroup({
    id: new FormControl<string>(''),
    image: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(1, [Validators.required, Validators.min(0.01)]),
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    available: new FormControl<boolean>(true),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(150)]),
    stock: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    sku: new FormControl<string>('')
  });
  
  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  ngOnInit(): void {
    if(this.sidebarType === 'Create') return;

    if(this.product){
      this.productForm.reset(this.product);
    }
  }

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public submit(): void {
    console.log(this.productForm.value)
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
