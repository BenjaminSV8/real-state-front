import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
