import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

export interface ProductDTO {
  productName: string;
  annualReturn: number;
  assetClass: string;
  SubAssetClass: string;
  Liquidity: string;
  Pros: string[];
  Cons: string[];
  riskLevel: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = `${this.configService.getApiBaseUrl()}/api/Products/products`;
     console.log('API URL:', this.apiUrl);
  }

  getProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.apiUrl);
  }
}