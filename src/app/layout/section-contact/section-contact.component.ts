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
  @Input() mail = ''; 

  constructor() {}

  ngOnInit(): void {
    this.mail = 'https://formsubmit.co/' + this.mail;
    console.log(this.mail)
  }
}
