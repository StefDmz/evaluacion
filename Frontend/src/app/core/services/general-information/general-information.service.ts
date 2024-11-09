import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GeneralInformation } from '../../interfaces/general-information.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {
  private _baseUrl: string = environment.baseUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  public getInformation(): Observable<GeneralInformation> {
    let url = `${ this._baseUrl }/general-information.php`;

    return this.http.get<GeneralInformation[]>(url)
      .pipe(
        map((data) => {
          return data[0];
        })
      );
  }

  public uploadLogo(data: FormData): Observable<string> {
    let url = `${ this._baseUrl }/upload-image.php`;

    return this.http.post<string>(url, data);
  }

  public updateInformation(info: GeneralInformation): Observable<string> {
    let url = `${ this._baseUrl }/general-information.php`;
    
    return this.http.put<string>(url, info);
  }
}
