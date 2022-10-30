import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vision",
  templateUrl: "./vision.component.html",
  styleUrls: ["./vision.component.scss"],
})
export class VisionComponent implements OnInit {
  img = "../../../../assets/image/homes/house-10.jpg";
  constructor( public router : Router ) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate([""]);
  }
}
