import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @Input('img') public img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
