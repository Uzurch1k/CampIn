import ReviewsItem from '../ReviewsItem/ReviewsItem';

import css from './ReviewsList.module.scss';

const ReviewsList = () => {
  return (
    <div className={css.body}>
      ReviewsList
      <ReviewsItem />
    </div>
  );
};

export default ReviewsList;
