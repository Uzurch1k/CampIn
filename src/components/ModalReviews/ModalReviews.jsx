import FormCampBook from '../FormCampBook/FormCampBook';
import ReviewsList from '../ReviewsList/ReviewsList';

import css from './ModalReviews.module.scss';

const ModalReviews = () => {
  return (
    <div className={css.reviews}>
      <ReviewsList />
      <FormCampBook />
    </div>
  );
};

export default ModalReviews;
