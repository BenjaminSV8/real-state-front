import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  img = '../../assets/image/img/img1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
