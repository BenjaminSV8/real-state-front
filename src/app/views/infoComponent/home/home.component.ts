import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../service/houses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img = '../../assets/image/img/houses-2.jpg';
  items = {};
  constructor(
    private housesService: HousesService
    ) { }

  ngOnInit(): void {
    this._requestGetHouses();
  }

  private _requestGetHouses() {
    let houses = [];
    this.housesService.getHouses().subscribe(
      (data: any) => {
        const dat = data.properties;
        console.log(dat);
        dat.forEach(element => {
          if (element.status === 'Active') {
            houses.push(element);
          }
      })
      console.log(houses);
      this.items = houses;
    })
  }

}
