import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor( public router : Router ) { }

  ngOnInit(): void {
    console.log('about')
  }

  back() {
    this.router.navigate(['']);
  }

}
