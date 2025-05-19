import { SignupComponent } from './signup/signup.component';
import { Router, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AuthGuard } from './services/auth.guard';
 
export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent,canActivate: [AuthGuard] },
    { path: 'input', component: InvestmentFormComponent, canActivate: [AuthGuard]},
    {path:'products', component:ProductsComponent, canActivate: [AuthGuard]},
  // { path: 'portfolio', component: PortfolioComponent }
  { path: 'portfolio', component: PortfolioPageComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }
  // other routes...
];
