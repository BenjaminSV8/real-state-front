import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-seller',
  templateUrl: './section-seller.component.html',
  styleUrls: ['./section-seller.component.scss']
})
export class SectionSellerComponent implements OnInit {

  @Input('img') public img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
