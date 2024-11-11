import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent implements OnInit {
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();

  public products: Product[] = [];
  public currentPage: number = 1;
  public pages: number = 1;

  constructor(
    private readonly _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.changePage(1);

    this._productService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  public get canPrev(): boolean {
   return (this.currentPage != 1);
  }

  public get canNext(): boolean {
    return (this.currentPage != this.pages);
  }

  public changePage(page: number): void {
    this.currentPage = page;

    this._productService.getProductsByPage(this.currentPage)
      .subscribe(items => {
        this.products = items;
      });
  }

  public editProduct(item: Product): void {
    this.onEditProduct.emit(item);
  }
 
  public deleteProduct(product: Product): void {
    console.log(product)
    const swal = Swal.mixin({
      customClass: {
        confirmButton: 'bg-admin-primary-100 rounded-md py-2.5 px-4 flex justify-center items-center text-white hover:bg-admin-primary',
        denyButton: 'bg-gray-500 rounded-md py-2.5 px-4 flex justify-center items-center text-black hover:bg-gray-400'
      },
      buttonsStyling: false
    });

    swal.fire({
      title: `¿Está seguro de eliminar el producto ${ product.name }?`,
      text: `Está acción no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Regresar',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed){
        this._productService.deleteProduct(product.id)
          .subscribe((response: any) => {
           if(response.message.toUpperCase().includes('ERROR')){
            swal.fire({
              title: 'Error',
              text: response.message,
              icon: 'error'
            });
           } else {
            swal.fire({
              title: 'Eliminado',
              text: 'Producto eliminado correctamente',
              icon: 'success'
            }).then(() => {
              location.reload();
            });
           }
          });
      } else {
        swal.fire({
          title: 'Cancelado',
          text: 'Tu operación ha sido cancelada',
          icon: 'info'
        });
      }
    });
  }
}
