import React, {useEffect} from 'react';
import ReviewItem from '../review-item/review-item';
import { store } from '../../store';
import { fetchReviewsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/store';

type ReviewListProps = {
  offerId?: string;
};

function ReviewList({ offerId }: ReviewListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    store.dispatch(fetchReviewsAction(Number(offerId)));
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
