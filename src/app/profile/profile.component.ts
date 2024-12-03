// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user = { name: '', email: '' };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Fetch the user's profile from the backend
    this.userService.getUserProfile().subscribe((data) => {
      this.user = data;
    });
  }

  updateProfile() {
    // Send updated profile information to the backend
    this.userService.updateUserProfile(this.user).subscribe({
      next: () => {
        alert('Profile updated successfully!');
      },
      error: (err) => {
        alert('Error updating profile: ' + err.message);
      },
    });
  }
}
