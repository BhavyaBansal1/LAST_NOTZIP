import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';
 
@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) {}
 
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  products() {
    this.router.navigate(['/products']);
  }
  input() {
    this.router.navigate(['/input']);
  }
 
}
