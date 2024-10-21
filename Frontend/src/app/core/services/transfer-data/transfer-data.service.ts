import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferData } from '../../interfaces/transfer-data.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private _baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getTransferData(): Observable<TransferData> {
    return this.http.get<TransferData>(`${ this._baseUrl }/transferData`);
  }
}
