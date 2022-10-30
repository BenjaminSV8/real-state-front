import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  img = '../../../../assets/image/homes/house-10.jpg';
  constructor( public router : Router ) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
  }
}
