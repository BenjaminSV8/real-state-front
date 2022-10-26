import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-section-contact",
  templateUrl: "./section-contact.component.html",
  styleUrls: ["./section-contact.component.scss"],
})
export class SectionContactComponent implements OnInit {
  @Input() name = '';
  @Input() cost = '';
  @Input() id = ''; 

  constructor() {}

  ngOnInit(): void {
  }
}
