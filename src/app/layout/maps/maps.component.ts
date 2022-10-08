import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  center: google.maps.LatLngLiteral = {
    lat: 40.714, lng: -74.005
  };
  zoom = 15;
  radius = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
