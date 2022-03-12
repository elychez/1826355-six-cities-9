import React from 'react';
import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/reviews';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
