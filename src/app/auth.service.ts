import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ConfigService } from './services/config.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiUrl: string;

  constructor(private http: HttpClient,private configService: ConfigService,) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(tap(response => {localStorage.setItem('token',response.token)}));
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/register`, { email, password });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}