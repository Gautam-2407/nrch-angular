import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticate(username: string, password: string): boolean {
    // Replace with your actual username and password check
    return username === 'abc' && password === '123';}
}
