import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'shared-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  @Output() onConfirmAddress: EventEmitter<google.maps.GeocoderResult> = new EventEmitter();

  @ViewChild(GoogleMap) map!: GoogleMap;

  public coordinates: google.maps.LatLng = new google.maps.LatLng({
    lat: 19.587670,
    lng: -99.016135
  });

  public mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14
  };
  
  private _marker!: google.maps.Marker;
  private _geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  
  ngAfterViewInit(): void {
    const input = document.getElementById('place-autocomplete-input') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    if (this.map.googleMap) {
      autocomplete.bindTo('bounds', this.map.googleMap);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          this.addMarker(place.geometry.location);
          this.map.googleMap?.panTo(place.geometry.location);
        }
      });
    }

    this.addMarker(this.coordinates);
  }

  public addMarker(coord: google.maps.LatLng): void {
    if(this._marker){
      this._marker.setPosition(coord);
    } else {
      this._marker = new google.maps.Marker({
        position: coord,
        map: this.map.googleMap,
        draggable: true
      });
    }
  }

  public confirmAddress(): void {
    const position = this._marker.getPosition();

    this._geocoder.geocode({location: position}, (results, status) => {
      if(status === google.maps.GeocoderStatus.OK){
        if(results && results.length > 0){
          this.onConfirmAddress.emit(results[0]);
        } else {
          alert("No se encontraron datos para la ubicación");
        }
      } else {
        alert("Error en la geocodificación: " + status);
      }
    });
  }
}
