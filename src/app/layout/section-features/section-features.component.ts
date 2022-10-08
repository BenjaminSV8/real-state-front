import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-features',
  templateUrl: './section-features.component.html',
  styleUrls: ['./section-features.component.scss']
})
export class SectionFeaturesComponent implements OnInit {

  @Input() features = [];
  @Input() extras = [];

  constructor() { }

  ngOnInit(): void {
  }

}
