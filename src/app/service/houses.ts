import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  public url
  constructor(
    private http: HttpClient
  ) {
    if (environment.mock) {
      this.url = environment.api.urlJson;
    } else {
      this.url = environment.api.urlMiddleware;
    }
  }

    
  // Data Houses
  public getHouses(): any {
    return this.http.get(this.url.urlProperties);
  }

    // Data House selected
    public getHouse(id: any): any {

      return this.http.get(this.url.urlPropertiesId);
    }
  
}
