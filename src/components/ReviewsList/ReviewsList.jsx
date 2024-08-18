import ReviewsItem from '../ReviewsItem/ReviewsItem';

import css from './ReviewsList.module.scss';

const ReviewsList = ({ campItem }) => {
  const { reviews } = campItem;

  return (
    <ul className={css.reviews}>
      {reviews.map((revie, index) => (
        <ReviewsItem key={index} revie={revie} />
      ))}
    </ul>
  );
};

export default ReviewsList;
