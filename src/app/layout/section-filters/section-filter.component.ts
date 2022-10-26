import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from '../../service/houses.service';

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent {
  title = 'ngSlick';
  items = [];
  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay":true,
    "arrows":false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor (private housesService: HousesService, public router : Router) {}
  
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

  openDetail(id: any){
    localStorage.setItem('id', id);
    this.router.navigate(['']);
  }
}