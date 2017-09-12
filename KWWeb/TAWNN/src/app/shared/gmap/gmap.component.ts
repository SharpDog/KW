import { Component, NgZone, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {} from 'googlemaps';
import {} from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements OnInit, AfterViewInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // set google maps defaults
    this.zoom = 12;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();
  }

  ngAfterViewInit() {

    // set current position
    this.setCurrentPosition();

    // load Places Auto-complete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          navigator.geolocation.getCurrentPosition( (p: Position) => {
            alert(this.haversine(place.geometry.location.lat(), place.geometry.location.lng(), p.coords) + ' km.');
          });
      });
    });
  })
  }

  rad(x: number): number { return x * Math.PI / 180 };

  // Distance in kilometers between two points using the Haversine algorithm.
  public haversine(p1_lat: number, p1_lng: number, p2: Coordinates): number {
    const R = 6371  // radius of Earth in km.
    const dLat: number  = this.rad(p2.latitude - p1_lat)
    const dLong: number = this.rad(p2.longitude - p1_lng)

    var a: number = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.rad(p1_lat)) * Math.cos(this.rad(p2.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2)
    var c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d: number = R * c

    return Math.round(d)
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}
