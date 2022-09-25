import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  public urlJson = environment.api.urlJson;
  public urlMiddleware = environment.api.urlMiddleware.middleware;

  constructor(
    private http: HttpClient
  ) {

  }

    
  // Data Houses
  public getHouses(): any {
    return this.http.get(this.urlJson.urlHouses);
  }

}
