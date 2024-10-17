import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Token } from '../../../../environments/tokens';

@Component({
  selector: 'shared-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  public map: mapboxgl.Map | undefined;
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat: number = 30.2672;
  public lng: number = -97.7431;

  private token: string = Token.mapbox;

  ngOnInit(): void {
    mapboxgl.accessToken = this.token;
    
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}
