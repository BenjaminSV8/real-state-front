import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  descriptionSub = '';
  constructor(public router : Router) { }

  ngOnInit(): void {
    this.descriptionSub = this.description.substring(0, 60) + "...";
  }

  openDetail(id: any){
    localStorage.setItem('id', id);
    this.router.navigate(['detail']);
  }

}
