import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {
  apiUrl: string;
  constructor(private http: HttpClient,private configService: ConfigService) {
    this.apiUrl=`${this.configService.getApiBaseUrl()}/api/Allocation/compute`;
  }

  submitUserInput(data: UserInput): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

export interface UserInput {
  riskTolerance: string;
  investmentHorizon: number;
  age: number;
  goal: string;
  targetAmount: number;
}