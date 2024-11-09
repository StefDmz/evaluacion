import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _baseUrl: string = environment.baseUrl + "/categories.php";

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this._baseUrl);
  }

  public getPages(): Observable<number> {
    return this.getCategories().pipe(
      map(items => Math.ceil(items.length / 5)) 
    );
  }

  public getCategoriesByPage(page: number): Observable<Category[]> {
    let url = `${ this._baseUrl }?page=${ page }`;

    return this.http.get<Category[]>(url);
  }

  public addCategory(category: Category): Observable<string> {
    return this.http.post<string>(this._baseUrl, category);
  }

  public updateCategory(category: Category): Observable<string> {
    return this.http.put<string>(this._baseUrl, category);
  }
}
