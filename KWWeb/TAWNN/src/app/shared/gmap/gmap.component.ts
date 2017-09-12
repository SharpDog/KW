import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var lat = 40.03287778;
    var lng = -105.5464028;

    var mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('agm-gmap'), mapProp);
  }

}
