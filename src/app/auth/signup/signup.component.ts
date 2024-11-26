import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService) {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  registerUser(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = { name: this.name, email: this.email, password: this.password };

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        alert('User registered successfully!');
        console.log('Registration response:', response);
      },
      error: (err) => {
        alert('Error registering user: ' + (err.error.message || 'Unknown error'));
        console.error(err);
      },
    });
  }
}
