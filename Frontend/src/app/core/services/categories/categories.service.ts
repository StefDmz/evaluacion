import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${ this._baseUrl }/categories.php`);
  }

  public getPages(): Observable<number> {
    return this.getCategories().pipe(
      map(items => Math.ceil(items.length / 5)) 
    );
  }

  public getCategoriesByPage(page: number): Observable<Category[]> {
    let url = `${ this._baseUrl }/categories.php?page=${ page }`;

    return this.http.get<Category[]>(url);
  }
}
