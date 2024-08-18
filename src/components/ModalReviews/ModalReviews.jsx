import FormCampBook from '../FormCampBook/FormCampBook';
import ReviewsList from '../ReviewsList/ReviewsList';

import css from './ModalReviews.module.scss';

const ModalReviews = ({ campItem }) => {
  return (
    <div className={css.reviews}>
      <ReviewsList campItem={campItem} />
      <FormCampBook />
    </div>
  );
};

export default ModalReviews;
