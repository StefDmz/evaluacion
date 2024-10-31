import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private readonly _productService: ProductsService
  ){ }

  ngOnInit(): void {
    
  }
}
