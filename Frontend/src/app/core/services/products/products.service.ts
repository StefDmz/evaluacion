import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
    let url = `${ this.baseUrl }/products.php`;

    if(category){
      url += `?categoryId=${category}`;
    }

    return this.http.get<Product[]>(url);
  }

  public getPages(): Observable<number> {
    return this.getProducts().pipe(
      map(items => Math.ceil(items.length / 5)) 
    );
  }

  public getProductsByPage(page: number): Observable<Product[]> {
    const begin = (page - 1) * 5;

    let url = `${ this.baseUrl }/products?_sort=name&_start=${ begin }&_limit=5`;

    return this.http.get<Product[]>(url);
  }
}
