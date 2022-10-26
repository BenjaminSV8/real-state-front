import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import {
  style,
  state,
  animate,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-filter-cards",
  templateUrl: "./filter-cards.component.html",
  styleUrls: ["./filter-cards.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 0 })),
      ]),
      transition(":leave", [
        animate(50, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FilterCardsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // DON'T FORGET THE FORM INITIALISATION
    });
  }

  websiteList: any = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Coahuila",
    "Colima",
    "Distrito Federal",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  test = "";
  test2 = true;
  // this.form = new FormGroup({
  //   website: new FormControl('', Validators.required)
  // });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changeRange(value: string) {
    this.test = value;
  }

  visibilidad() {
    if (this.test2) {
      this.test2 = false;
    } else {
      this.test2 = true;
    }
  }
}
