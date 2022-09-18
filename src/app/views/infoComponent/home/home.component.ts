import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img = '../../assets/image/img/img1.png';
  constructor() { }

  ngOnInit(): void {
  }

}
