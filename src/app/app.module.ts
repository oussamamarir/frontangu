import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; // Added CUSTOM_ELEMENTS_SCHEMA
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes like currency

// Root Component
import { AppComponent } from './app.component';

// Components
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ReviewComponent } from './review/review.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FilterPipe } from './filter.pipe/filter.pipe.component';
import { CartComponent } from './cart/cart.component';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Angular Pipes
import { CurrencyPipe, DatePipe } from '@angular/common'; // Import Angular pipes

// Services
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { ReviewService } from './services/review.service';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent,
    NavbarComponent,
    CookiesComponent,
    SecondNavbarComponent,
    AboutComponent,
    ProfileComponent,
    OrderHistoryComponent,
    OrderTrackingComponent,
    ReviewComponent,
    OrderDetailsComponent,
    FilterPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    CommonModule, // For built-in pipes like currency
    HttpClientModule, // To handle HTTP requests
  ],
  providers: [
    CartService, // Manages cart actions
    OrderService, // Handles order-related tasks
    UserService, // Manages user authentication and user data
    ReviewService, // Handles reviews functionality
    ProfileService, // Updates user profiles
    CurrencyPipe, // For currency formatting
    DatePipe, // For date formatting
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Added this line to resolve schema-related issues
  bootstrap: [AppComponent], // Bootstraps the root component
})
export class AppModule {}
