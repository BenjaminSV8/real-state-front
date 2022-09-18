import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  img = '../../assets/image/img/img1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
