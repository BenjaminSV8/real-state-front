import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor( public router : Router ) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['']);
  }

}
