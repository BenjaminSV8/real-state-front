import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() img = [];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay":true,
    "arrows":false,
  };
  constructor( public router : Router ) {}

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
  }

}
