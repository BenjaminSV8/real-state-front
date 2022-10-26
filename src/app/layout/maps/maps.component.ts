import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit {
  map: mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";

  lat = 19.4879455;
  lng = -99.1964761;
  constructor() {}

  ngOnInit() {
    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:
        "pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ",
      container: "map",
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.scrollZoom.disable();
    this.map.boxZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.dragPan.disable();
    this.map.dragRotate.disable();
    this.map.keyboard.disable();
    this.map.keyboard.disableRotation();
    this.map.touchZoomRotate.disable();
    this.map.touchZoomRotate.disableRotation();
    const marker1 = new mapboxgl.Marker({ color: "black" })
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
  }
}
