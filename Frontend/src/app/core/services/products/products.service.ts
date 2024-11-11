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

  public getProducts(category?: number): Observable<Product[]> {
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
    let url = `${ this.baseUrl }/products.php?page=${ page }`;

    return this.http.get<Product[]>(url);
  }

  public uploadImage(data: FormData): Observable<any> {
    let url = `${ this.baseUrl }/upload-image.php`;

    return this.http.post<any>(url, data);
  }

  public addProduct(product: Product): Observable<string> {
    let url = `${ this.baseUrl }/products.php`;
   
    return this.http.post<string>(url, product);
  }

  public updateProduct(product: Product): Observable<string> {
    let url = `${ this.baseUrl }/products.php`;

    return this.http.put<string>(url, product);
  }

  public deleteProduct(id: number): Observable<string> {
    let url = `${ this.baseUrl }/products.php?id=${ id }`;

    return this.http.delete<string>(url);
  }
}
