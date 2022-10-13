import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
