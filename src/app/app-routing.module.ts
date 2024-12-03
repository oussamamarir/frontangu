import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component'; // Import OrderTrackingComponent
import { CartComponent } from './cart/cart.component'; 
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Default to Dashboard
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about', component: AboutComponent },
  
  { path: 'cart', component: CartComponent },  
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'order-tracking/:orderId', component: OrderTrackingComponent }, // Order ID passed in URL
  
  { path: '**', redirectTo: '' } // Wildcard route for non-existing paths, redirects to default dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
