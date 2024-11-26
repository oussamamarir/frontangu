import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
