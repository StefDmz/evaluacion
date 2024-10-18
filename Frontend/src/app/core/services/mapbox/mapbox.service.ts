import { Injectable } from '@angular/core';
import { Token } from '../../../../environments/tokens';
import mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapboxResponse } from '../../interfaces/mapbox-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private _token: string = Token.mapbox;
  private _baseUrl: string = 'https://api.mapbox.com/search/geocode/v6/reverse?';

  constructor(
    private http: HttpClient
  ){}

  public reverseGeocodeToGetAddress(lngLat: mapboxgl.LngLat): Observable<MapboxResponse> {
    const url = `${ this._baseUrl }longitude=${ lngLat.lng }&latitude=${ lngLat.lat }&types=address&access_token=${ this._token }`;
    return this.http.get<MapboxResponse>(url);
  }
}
