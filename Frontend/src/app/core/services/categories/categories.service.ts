import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<Category[]>(`${ this._baseUrl }/categories`);
  }
}
