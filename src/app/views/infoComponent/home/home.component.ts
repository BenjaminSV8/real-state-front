import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../service/houses.service';
import { SpinnerOverlayService } from '../../../service/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img = '../../assets/image/homes/house-10.jpg';
  items = [];
  constructor(
    private housesService: HousesService,
    private spinnerService: SpinnerOverlayService
    ) { }

  ngOnInit(): void {
    this._requestGetHouses();
  }

  private _requestGetHouses() {
    let houses = [];
    this.housesService.getHouses().subscribe(
      (data: any) => {
        const dat = data?.data.propertyList;
        console.log(dat)
        dat.forEach(element => {
          if (element?.status === 'Active') {
            houses.push(element);
          }
      })
      console.log(houses);
      this.items = houses;
    })
    
  }

}
