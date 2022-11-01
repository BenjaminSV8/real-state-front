import { Component, OnInit } from "@angular/core";
import { HousesService } from "../../../service/houses.service";

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
  error = false;
  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [3, 6, 9];
  images = [
    {
      imagePath: "../../assets/image/homes/house-10.jpg",
    },
    {
      imagePath: "../../assets/image/homes/home-1.jpg",
    },
    {
      imagePath: "../../assets/image/homes/home-2.jpg",
    },
    {
      imagePath: "../../assets/image/homes/home-3.jpg",
    },
    {
      imagePath: "../../assets/image/homes/home-4.jpg",
    },
  ];
  items = [];
  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this._requestGetHouses();
  }

  handlePageChange(event): void {
    console.log(event)
    this.page = event;
    this._requestGetHouses();
  }

  submitFilter(event) {
    console.log(event);
    this.page = 1;
    this.error = false;
    this._requestGetHousesFilter(event);
  }

  deleteFilter() {
    this.error = false;
    this.handlePageChange(1);
  }

  private _requestGetHousesFilter(filterValues) {
    let houses = [];
    const url = filterValues.type + filterValues.country;
    this.housesService.getHousesFilter(url).subscribe(
      (data: any) => {
        try {
          const dat = data?.data.propertyList;
          console.log(dat);
          dat.forEach((element) => {
            if (element?.status === "Active") {
              houses.push(element);
            }
          });
          console.log(houses);

          this.items = houses;
        } catch (error) {
          this.items = [];
          this.error = true;
        }
      },
      (err) => {
        this.error = true;
        this.items = [];
        console.log(err);
      }
    );
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
