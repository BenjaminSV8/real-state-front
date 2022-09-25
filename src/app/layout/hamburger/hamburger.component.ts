import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  @Input('title') public title: string;

  constructor() { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $('#menu_on').click(function(){ // Al hacer click...
        console.log('hola')
         $('body').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
       })
    });
  }

}
