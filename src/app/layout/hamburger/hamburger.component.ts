import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html'
})
export class HamburgerComponent implements OnInit {
  @Input('title') public title: string;

  constructor() { }

  ngOnInit(): void {
      $('#menu_on').click(function(){ // Al hacer click...
        console.log('hola')
         $('body').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
       })
  }  

}
