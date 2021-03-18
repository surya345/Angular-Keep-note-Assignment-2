import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private authUrl:string;
  constructor(private http:HttpClient) {
  this.authUrl=('http://localhost:3000/auth/v1');
  }

  authenticateUser(data:any) {
  return this.http.post('this.authUrl',data);
  }

  setBearerToken(token) {
  localStorage.setItem('bearerToken',token);
  }

  getBearerToken() {
  return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.http.post(this.authUrl + 'isAuthenticated', {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();
  }
}
