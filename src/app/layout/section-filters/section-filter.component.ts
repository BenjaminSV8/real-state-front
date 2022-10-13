import { Component } from '@angular/core';
import { HousesService } from '../../service/houses';

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent {
  title = 'ngSlick';
  items = [];
  slides = [342, 453, 846, 855, 234, 564, 744, 243];
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

  constructor (private housesService: HousesService) {}
  
  ngOnInit(): void {
    this._requestGetHouses();
  }

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
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