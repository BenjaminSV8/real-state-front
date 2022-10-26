import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerOverlayService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() message = 'Espere un momento..';

  constructor(public spinner: SpinnerOverlayService) { }

  ngOnInit(): void {
  }

}
