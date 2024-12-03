// src/app/review/review.component.ts
import { Component } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  reviewText = '';

  constructor(private reviewService: ReviewService) {}

  submitReview() {
    this.reviewService.submitReview(this.reviewText).subscribe({
      next: () => {
        alert('Review submitted successfully');
      },
      error: (error: HttpErrorResponse) => { // Use HttpErrorResponse for error typing
        alert('Error submitting review: ' + error.message);
      },
    });
  }
}
