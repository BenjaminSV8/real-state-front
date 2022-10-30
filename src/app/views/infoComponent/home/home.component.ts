import { Component, OnInit } from "@angular/core";
import { HousesService } from "../../../service/houses.service";
import { SpinnerOverlayService } from "../../../service/spinner.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = "";

  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [3, 6, 9];
  images = 
  [
    {
      "imagePath": "../../assets/image/homes/house-10.jpg"
  },
    {
        "imagePath": "../../assets/image/homes/home-1.jpg"
    },
    {
        "imagePath": "../../assets/image/homes/home-2.jpg"
    },
    {
        "imagePath": "../../assets/image/homes/home-3.jpg"
    },
    {
        "imagePath": "../../assets/image/homes/home-4.jpg"
    }
];
  items = [];
  constructor(
    private housesService: HousesService,
    private spinnerService: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    this._requestGetHouses();
  }

  getRequestParams(searchTitle, page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event): void {
    this.page = event;
    this._requestGetHouses();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this._requestGetHouses();
  }

  private _requestGetHouses() {
    let houses = [];
    this.housesService.getHouses().subscribe((data: any) => {
      const dat = data?.data.propertyList;
      console.log(dat);
      dat.forEach((element) => {
        if (element?.status === "Active") {
          houses.push(element);
        }
      });
      console.log(houses);
      this.items = houses;
    });
  }
}
