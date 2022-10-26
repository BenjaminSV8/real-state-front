import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../service/houses.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  img = '../../assets/image/homes/house-10.jpg';
  item;
  constructor(
    private housesService: HousesService
    ) { }

  ngOnInit(): void {
    this._requestGetHouse();
  }

  private _requestGetHouse() {
    const id = localStorage.getItem('id');
    this.housesService.getHouse(id).subscribe(
      (data: any) => {
        this.item = data.data;
        console.log(this.item);
    })
  }

}
