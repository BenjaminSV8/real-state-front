import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-slide',
  templateUrl: './section-slide.component.html',
  styleUrls: ['./section-slide.component.scss']
})
export class SectionSlideComponent implements OnInit {
  @Input() img = [];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay":true,
    "arrows":false,
  };

  ngOnInit(): void {
  }

}
