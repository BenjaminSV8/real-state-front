import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { style, animate, transition, trigger } from "@angular/animations";

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
      transition(":leave", [animate(50, style({ opacity: 1 }))]),
    ]),
  ],
})
export class FilterCardsComponent {
  form: FormGroup;

  @Output() filter = new EventEmitter<Object>();
  @Output() deleteFilter = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // DON'T FORGET THE FORM INITIALISATION
      type: new FormControl(""),
      country: new FormControl(""),
      range: new FormControl(""),
    });
  }
  foo = 'Selecciona un estado';

  websiteList: any = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "CDMX",
    "Chiapas",
    "Chihuahua",
    "Coahuila",
    "Colima",
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

  get f() {
    return this.form.controls;
  }

  submit() {
    this.test2 = true;
    this.filter.emit(this.form.value);
  }

  changeRange(value: string) {
    this.test = value;
  }

  delete() {
    this.test2 = true;
    this.deleteFilter.emit();
  }

  visibilidad() {
    if (this.test2) {
      this.test2 = false;
    } else {
      this.test2 = true;
    }
  }
}
