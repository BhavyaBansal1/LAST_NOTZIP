import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getApiBaseUrl(): string {
    return environment.apiBaseUrl;
  }

  getLogoPath(): string {
    return `${environment.assetsPath}${environment.logoFileName}`;
  }
}
