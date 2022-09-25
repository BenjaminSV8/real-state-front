import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() cost = '';
  @Input() image = '';
  @Input() id = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  openDetail(id: any){
    console.log(id)
  }

}
