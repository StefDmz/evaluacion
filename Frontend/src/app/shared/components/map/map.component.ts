import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { MapboxGeocoder } from '@mapbox/search-js-web';
import { Token } from '../../../../environments/tokens';
import { MapboxService } from '../../../core/services/mapbox/mapbox.service';
import { MapboxResponse } from '../../../core/interfaces/mapbox-response.interface';

@Component({
  selector: 'shared-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  @Output() onMapboxResponse: EventEmitter<MapboxResponse> = new EventEmitter();

  private token: string = Token.mapbox;
  private geocorderElement = new MapboxGeocoder();
  private map!: mapboxgl.Map; 
  private marker!: mapboxgl.Marker;
  private ubication: [number, number] = [-99.016293, 19.588174];

  constructor(
    private readonly _mapboxService: MapboxService
  ){}

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: this.token,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.ubication,
      zoom: 14
    });

    this.initializeGeocoder();

    this.addMarker(this.ubication);
  }

  private initializeGeocoder(): void {
    this.geocorderElement.accessToken = this.token;
    this.geocorderElement.mapboxgl = mapboxgl;
    this.geocorderElement.marker = false;
    this.geocorderElement.options = {
      language: 'es',
      country: 'MX'
    }

    this.geocorderElement.bindMap(this.map);

    this.geocorderElement.addEventListener('retrieve', (event) => {
      const coordinates = event.detail.geometry.coordinates;
      this.addMarker(coordinates);
    });

    document.getElementById('geocoder-container')?.appendChild(this.geocorderElement.onAdd(this.map));
  }

  private addMarker(coordinates: any): void {
    if(this.marker){
      this.marker.remove();
    }

    this.marker = new mapboxgl.Marker({ draggable: true, color: '#f597c3' })
      .setLngLat(coordinates)
      .addTo(this.map);
  }

  public confirmAddress(): void {
    const lngLat = this.marker.getLngLat();
    this._mapboxService.reverseGeocodeToGetAddress(lngLat)
      .subscribe(res => {
        this.onMapboxResponse.emit(res);
      });
  }
}
