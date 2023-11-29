import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private loginUrl = 'http://localhost:5000/user/login';

   constructor(private http: HttpClient) { }
   login(userCredentials: any) {
    return this.http.post(this.loginUrl, userCredentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
