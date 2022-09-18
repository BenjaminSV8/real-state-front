import { Component } from '@angular/core';
import { GamesService } from './service/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cms';
  constructor(
    private games: GamesService
  ) { }
}
