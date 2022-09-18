import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public urlJson = environment.api.urlJson;
  public urlMiddleware = environment.api.urlMiddleware.middleware;

  constructor(
    private http: HttpClient
  ) {

  }

    // Data Eaquipment
    public getForecastData(): any {
      // const url = this.urlDemo + this.url.urlForecast;
      // return this.http.get(url);
    }


  // Data Eaquipment
  public getTeamsStanding(): any {
    return this.http.get(this.urlJson.urlTeams);
  }

  // Schedule
  public getGames(): any {
    const url = this.urlMiddleware + 'schedules';
    return this.http.get(url);
  }

  // TeamsSeasons
  public getTeamsSeason(): any {
    const url = this.urlMiddleware + 'teamsSeasons';
    return this.http.get(url);
  }
// Standings
  public getStandings(): any {
    const url = this.urlMiddleware + 'standings';
    return this.http.get(url);
  }

  // TeamSeasonStats
  public getTeamSeasonStats(): any {
    const url = this.urlMiddleware + 'teamSeasonStats';
    return this.http.get(url);
  }

  // CurrentWeek
  public getCurrentWeek(): any {
    const url = this.urlMiddleware + 'current-week';
    return this.http.get(url);
  }

  // TeamGameStats
  public getScores(week): any {
    const url = this.urlMiddleware + 'teamGameStats?week=' + week;
    return this.http.get(url);
  }
}
