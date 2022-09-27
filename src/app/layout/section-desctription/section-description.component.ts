import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-description',
  templateUrl: './section-description.component.html',
  styleUrls: ['./section-description.component.scss']
})
export class SectionDescriptionComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() cost = '';
  @Input() location

  constructor() { }

  ngOnInit(): void {
    
  }

}
