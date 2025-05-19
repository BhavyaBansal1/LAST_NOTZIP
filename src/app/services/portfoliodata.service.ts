import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private portfolioData: any;
  private productData:any;

  setPortfolioData(data: any): void {
    this.portfolioData = data;
  }

  setProductData(data: any): void {
    this.productData = data;
  }

  getProductData(): any {
    return this.productData;
  }

  getPortfolioData(): any {
    return this.portfolioData;
  }
}