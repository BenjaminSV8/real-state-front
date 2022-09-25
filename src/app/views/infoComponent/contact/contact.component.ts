import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  img = '../../assets/image/img/houses-2.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
