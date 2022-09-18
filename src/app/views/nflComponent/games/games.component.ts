import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../service/games.service';
import { EquipmentArray } from '../../../models/equipmentArray.interface';
import { StandingsArray } from 'src/app/models/standingsArray.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  teamsStats = [];
  gamesSchedule = [];
  teamArray: any = [];
  teams = [];
  teamsLogo = [];
  week;
  count = 0;
  counter = 0;
  img = '../../assets/image/teams/NFL.jpg';
  arrayCompleteTeam = [];
  arrayCompleteTeamMDB = [];
  equipmentArray: EquipmentArray;
  constructor(
    private gamesService: GamesService,
    private router: Router
  ) { }



  ngOnInit() {
    // this._requestGetForecastData();
    this._requestGetCurrentWeek();

  }

  private _requestGetForecastData() {
    // ForecastData
    console.log('ForecastData ====> ');
    this.gamesService.getForecastData().subscribe(
      (data: any) => {
        // this.week = data
        // this._requestGetSchedules();
      }, (e) => {
        console.log(e);
      }
    );
  }

  private _requestGetCurrentWeek() {
    // CurrentWeek
    console.log('CurrentWeek ====> ');
    this.gamesService.getCurrentWeek().subscribe(
      (data: any) => {
        this.week = parseFloat(data.body);
        this._requestGetSchedules();
      }, (e) => {
        console.log(e);
      }
    );
  }

  private _requestGetSchedules() {
    // Schedule
    console.log('Schedule ====> ');
    this.gamesService.getGames().subscribe(
      (data: any) => {
        const dat = JSON.parse(data.body);
        dat.forEach(element => {
          if (element.Week === this.week) {

            this.gamesSchedule.push(element);
          }
        });
        this._requestGetDataEquipment();
      }, (e) => {

      }
    );
  }

  private _requestGetDataEquipment() {
    // Data Equipment
    console.log('DataEquipment ====> ');
    this.gamesService.getTeamsStanding().subscribe(
      (data: any) => {
        data.forEach(element => {
          const kv1: EquipmentArray = {
            Name: element.Name,
            GlobalTeamID: element.GlobalTeamID,
            MaddenOvr: element.MaddenOvr,
            MaddenOvrOff: element.MaddenOvrOff,
            MaddenOvrDff: element.MaddenOvrDff,
            Color: element.SecondaryColor,
            Pick: element.Pick
          };

          this.arrayCompleteTeam[element.GlobalTeamID] = kv1;
        });
        this._requestGetStandings();
      }, (e) => {
        console.log(e);
      }
    );
  }

  private _requestGetStandings() {
    // Standings
    console.log('Standings ====> ');
    this.gamesService.getStandings().subscribe(
      (data: any) => {
        const dat = JSON.parse(data.body);
        dat.forEach(element => {
          const target: StandingsArray = {
            Conference: element.Conference,
            Division: element.Division,
            Wins: element.Wins,
            Losses: element.Losses,
            NetPoints: element.NetPoints,
            Touchdowns: element.Touchdowns,
            DivisionWins: element.DivisionWins,
            DivisionLosses: element.DivisionLosses,
            ConferenceWins: element.ConferenceWins,
            ConferenceLosses: element.ConferenceLosses,
            GlobalTeamID: element.GlobalTeamID,
            DivisionRank: element.DivisionRank,
            ConferenceRank: element.ConferenceRank
          };
          this.arrayCompleteTeam[element.GlobalTeamID] = Object.assign(this.arrayCompleteTeam[element.GlobalTeamID], target);
        });
        console.log(this.arrayCompleteTeam);
        this._requestGetTeamSeasonStats();
      }, (e) => {
        console.log(e);
      }
    );
  }

  private _requestGetTeamSeasonStats() {
      // TeamSeasonStats
      console.log('TeamSeasonStats ====> ');
      this.gamesService.getTeamSeasonStats().subscribe(
        (data: any) => {
          const dat = JSON.parse(data.body);
          dat.forEach(element => {
            const target = {
              OffensivePassRank: element.PassingYards,
              OffensiveRunRank: element.RushingYards,
              DefensivePassRank: element.OpponentPassingYards,
              DefensiveRunRank: element.OpponentRushingYards,
              OffensiveScore: element.Score,
              DefensiveScore: element.OpponentScore,
              ShortName: element.Team
            };
            this.arrayCompleteTeam[element.GlobalTeamID] = Object.assign(this.arrayCompleteTeam[element.GlobalTeamID], target);
          });
          this._requestGetTeamsSeason();
        }, (e) => {
        }
      );
  }

  private _requestGetTeamsSeason() {
    // TeamsSeasons
    console.log('TeamsSeasons ====> ');
    this.gamesService.getTeamsSeason().subscribe(
      (data: any) => {
        const dat = JSON.parse(data.body);
        dat.forEach(element => {
          const target = {
            Logo: element.WikipediaLogoUrl
          };
          this.arrayCompleteTeam[element.GlobalTeamID] = Object.assign(this.arrayCompleteTeam[element.GlobalTeamID], target);
        });
        this._requestGetTeamGameStats();
      }, (e) => {
        console.log(e);
      }
    );
  }

  private _requestGetTeamGameStats() {
    const week = this.week - 1;
    // TeamGameStats
    console.log('TeamGameStats ====> ');
    if (week > 0) {
      this.gamesService.getScores(week).subscribe(
        (data: any) => {
          const dat = JSON.parse(data.body);
          dat.forEach(element => {
            let lastgame = 0;
            const team = element.ScoreQuarter1 + element.ScoreQuarter2 + element.ScoreQuarter3 +
                        element.ScoreQuarter4 + element.ScoreOvertime;
            const opponent = element.OpponentScoreQuarter1 + element.OpponentScoreQuarter2 + element.OpponentScoreQuarter3 +
                            element.OpponentScoreQuarter4 + element.OpponentScoreOvertime;
            if (team > opponent) {
              lastgame = 1;
            } else {
              lastgame = 0;
            }
            const target = {
              LastGame: lastgame
            };
            this.arrayCompleteTeam[element.GlobalTeamID] = Object.assign(this.arrayCompleteTeam[element.GlobalTeamID], target);
          });
          this.teamsArrayValidate();
        }, (e) => {
        }
      );
    } else {
      const target = {
        LastGame: 0
      };
      this.arrayCompleteTeam.forEach(element => {
      this.arrayCompleteTeam[element.GlobalTeamID] = Object.assign(this.arrayCompleteTeam[element.GlobalTeamID], target);
      });
      this.teamsArrayValidate();
    }
  }

  teamsArrayValidate() {
    let key = 0;
    this.gamesSchedule.forEach(elementSchedule => {

      if (elementSchedule.AwayTeam !== 'BYE' && elementSchedule.Status !== 'Postponed' &&
      this.arrayCompleteTeam[elementSchedule.GlobalHomeTeamID] !== null) {
        this.teamArray[key] = {
          HomeTeam: this.arrayCompleteTeam[elementSchedule.GlobalHomeTeamID],
          AwayTeam: this.arrayCompleteTeam[elementSchedule.GlobalAwayTeamID],
          Key: key
        };
        const targetHome = {
          MoneyLine: elementSchedule.HomeTeamMoneyLine,
          HomeOrAway: true
        };
        const targetAway = {
          MoneyLine: elementSchedule.AwayTeamMoneyLine,
          HomeOrAway: false
        };
        this.teamArray[key].HomeTeam =
          Object.assign(this.teamArray[key].HomeTeam, targetHome);
        this.teamArray[key].AwayTeam =
          Object.assign(this.teamArray[key].AwayTeam, targetAway);
        key++;
      }
    });
    this.validateHomeOrAway();
  }

  validateHomeOrAway() {
    this.teamArray.forEach(elementTeamArray => {
      const PointsHome = 3;
      const PointsAway = 0;
      const targetHome = {
        Points: PointsHome
      };
      const targetAway = {
        Points: PointsAway
      };
      this.teamArray[elementTeamArray.Key].HomeTeam =
        Object.assign(this.teamArray[elementTeamArray.Key].HomeTeam, targetHome);
      this.teamArray[elementTeamArray.Key].AwayTeam =
        Object.assign(this.teamArray[elementTeamArray.Key].AwayTeam, targetAway);
    });
    this.validateDivision();
  }

  validateDivision() {
    this.teamArray.forEach(elementTeamArray => {
      if (elementTeamArray.HomeTeam.Conference === elementTeamArray.AwayTeam.Conference &&
        elementTeamArray.HomeTeam.Division === elementTeamArray.AwayTeam.Division) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 2;
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 5;
      }
    });
    this.validateMaddenOvr();
  }


  validateMaddenOvr() {
    this.teamArray.forEach(elementTeamArray => {
      if (elementTeamArray.HomeTeam.MaddenOvr > elementTeamArray.AwayTeam.MaddenOvr) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 1;
      } else if (elementTeamArray.HomeTeam.MaddenOvr < elementTeamArray.AwayTeam.MaddenOvr) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 1;
      }
      if (elementTeamArray.HomeTeam.MaddenOvrOff > elementTeamArray.AwayTeam.MaddenOvrDff) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 1;
      } else if (elementTeamArray.HomeTeam.MaddenOvrOff < elementTeamArray.AwayTeam.MaddenOvrDff) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 1;
      }
      if (elementTeamArray.HomeTeam.MaddenOvrDff > elementTeamArray.AwayTeam.MaddenOvrOff) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 1;
      } else if (elementTeamArray.HomeTeam.MaddenOvrDff < elementTeamArray.AwayTeam.MaddenOvrOff) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 1;
      }
    });
    this.validateRank();
  }


  validateRank() {
    this.teamArray.forEach(elementTeamArray => {
      if (elementTeamArray.HomeTeam.OffensivePassRank > elementTeamArray.AwayTeam.DefensivePassRank) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 4;
      } else if (elementTeamArray.HomeTeam.OffensivePassRank < elementTeamArray.AwayTeam.DefensivePassRank) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 4;
      }
      if (elementTeamArray.HomeTeam.OffensiveRunRank > elementTeamArray.AwayTeam.DefensiveRunRank) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 4;
      } else if (elementTeamArray.HomeTeam.OffensiveRunRank < elementTeamArray.AwayTeam.DefensiveRunRank) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 4;
      }
    });
    this.validateBets();
  }


  validateBets() {
    this.teamArray.forEach(elementTeamArray => {
      if (elementTeamArray.HomeTeam.Pick > elementTeamArray.AwayTeam.Pick) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 5;
      } else if (elementTeamArray.HomeTeam.Pick < elementTeamArray.AwayTeam.Pick) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 5;
      }
      if (elementTeamArray.HomeTeam.MoneyLine < elementTeamArray.AwayTeam.MoneyLine) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 8;
      } else if (elementTeamArray.HomeTeam.MoneyLine > elementTeamArray.AwayTeam.MoneyLine) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 8;
      }
    });
    this.validateHistoricalTeam();
  }

  validateHistoricalTeam() {
    let count = 0;
    this.teamArray.forEach(elementTeamArray => {

      if (elementTeamArray.HomeTeam.Losses < elementTeamArray.AwayTeam.Losses) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 4;
      } else if (elementTeamArray.HomeTeam.Losses > elementTeamArray.AwayTeam.Losses) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 4;
      }

      if (elementTeamArray.HomeTeam.LastGame > elementTeamArray.AwayTeam.LastGame) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 4;
      } else if (elementTeamArray.HomeTeam.LastGame < elementTeamArray.AwayTeam.LastGame) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 4;
      }
      if (elementTeamArray.HomeTeam.NetPoints > elementTeamArray.AwayTeam.NetPoints) {
        this.teamArray[elementTeamArray.Key].HomeTeam.Points = this.teamArray[elementTeamArray.Key].HomeTeam.Points + 6;
      } else if (elementTeamArray.HomeTeam.NetPoints < elementTeamArray.AwayTeam.NetPoints) {
        this.teamArray[elementTeamArray.Key].AwayTeam.Points = this.teamArray[elementTeamArray.Key].AwayTeam.Points + 6;
      }
      count++;
    });
    if (this.teamArray.length === count) {
      this.percentageWin();
      this.validatePoints();
    }
  }

  percentageWin() {
    this.teamArray.forEach(elementTeamArray => { 
      this.teamArray[elementTeamArray.Key].HomeTeam.Percentage =
      ((this.teamArray[elementTeamArray.Key].HomeTeam.Points / 48) * 100).toFixed(2);
      this.teamArray[elementTeamArray.Key].AwayTeam.Percentage =
      ((this.teamArray[elementTeamArray.Key].AwayTeam.Points / 48) * 100).toFixed(2);
      const tieHome = parseInt(this.teamArray[elementTeamArray.Key].HomeTeam.Percentage);
      const tieAway = parseInt(this.teamArray[elementTeamArray.Key].AwayTeam.Percentage);
      const tieValue =  tieHome + tieAway;
      this.teamArray[elementTeamArray.Key].tie = 100 - tieValue;
    });
  }

  validatePoints() {
    this.teamArray.forEach(elementTeamArray => {
      if (elementTeamArray.HomeTeam.Points > elementTeamArray.AwayTeam.Points) {
        const targetH = {
          TeamWin: {
            ImgWin: elementTeamArray.HomeTeam.Logo,
            TeamWinName: elementTeamArray.HomeTeam.Name
          }
        };
        this.teamArray[elementTeamArray.Key] = Object.assign(this.teamArray[elementTeamArray.Key], targetH);
      } else if (elementTeamArray.HomeTeam.Points < elementTeamArray.AwayTeam.Points) {
        const targetA = {
          TeamWin: {
            ImgWin: elementTeamArray.AwayTeam.Logo,
            TeamWinName: elementTeamArray.AwayTeam.Name
          }
        };
        this.teamArray[elementTeamArray.Key] = Object.assign(this.teamArray[elementTeamArray.Key], targetA);
      } else {
        const targetE = {
          TeamWin: {
            ImgWin: '../assets/image/teams/NFL.png',
            TeamWinName: 'Empate........'
          }
        };
        this.teamArray[elementTeamArray.Key] = Object.assign(this.teamArray[elementTeamArray.Key], targetE);
      }
    });
    console.log(this.teamArray);
  }

  openTeam(team) {
    console.log(this.arrayCompleteTeam[team]);
    localStorage.setItem('team', JSON.stringify(this.arrayCompleteTeam[team]));
    this.router.navigate(['/team']);
  }
}
