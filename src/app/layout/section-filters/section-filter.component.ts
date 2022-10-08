import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent implements OnInit {

  @Input('img') public img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
