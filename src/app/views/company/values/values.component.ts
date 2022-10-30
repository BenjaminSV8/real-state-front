import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor( public router : Router ) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['']);
  }

}
