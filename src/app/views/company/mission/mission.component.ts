import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor( public router : Router ) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['']);
  }

}
