import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public headers = environment.api.headers;
  public url = environment.api.urlMiddleware.middleware;
  // public urlDemo = environment.api.demo;
  constructor( private http: HttpClient ) { }

  public login(user): any {
    const url = this.url + 'authentication/login';
    return this.http.post(url , user );
  }
}
