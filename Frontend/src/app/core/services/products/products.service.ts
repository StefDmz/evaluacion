import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(category?: string): Observable<Product[]> {
    let url = `${ this.baseUrl }/products`;

    if(category){
      url += `?categoryId=${category}`;
    }

    return this.http.get<Product[]>(url);
  }

  public getPages(): number {
    let products: Product[] = [];

    this.getProducts()
      .subscribe(items => products = items);

    return Math.ceil((products.length + 1) / 5);
  }

  
}
