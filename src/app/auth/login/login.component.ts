import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ''; // Email de l'utilisateur
  password: string = ''; // Mot de passe de l'utilisateur

  constructor(private userService: UserService, private router: Router) {}

  // Ouvrir un lien externe
  openLink(url: string): void {
    window.open(url, '_blank');
  }

  // Méthode de connexion
  onLogin(): void {
    const loginData = { email: this.email, password: this.password };
    this.userService.loginUser(loginData.email, loginData.password).subscribe({
      next: (response) => {
        alert('Login successful!');
        console.log('Token:', response);
        // Sauvegardez le token JWT ici si nécessaire
      },
      error: (error) => {
        console.error('Login failed:', error);
        const errorMessage = error?.error?.message || 'An error occurred during login.';
        alert(`Login failed: ${errorMessage}`);
      },
    });
  }
  
}
