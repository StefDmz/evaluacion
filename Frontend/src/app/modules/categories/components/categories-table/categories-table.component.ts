import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

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

  public deleteCategory(category: Category): void {
    const swal = Swal.mixin({
      customClass: {
        confirmButton: 'bg-admin-primary-100 rounded-md py-2.5 px-4 flex justify-center items-center text-white hover:bg-admin-primary',
        denyButton: 'bg-gray-500 rounded-md py-2.5 px-4 flex justify-center items-center text-black hover:bg-gray-400'
      },
      buttonsStyling: false
    });

    swal.fire({
      title: `¿Está seguro de eliminar la categoría ${ category.name }?`,
      text: `Está acción no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Regresar',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed){
        this._categoriesService.deleteCategory(category.id)
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
              text: 'Categoría eliminada correctamente',
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
