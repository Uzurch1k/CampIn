import ReviewsLocal from '../ReviewsLocal/ReviewsLocal';

import css from './ModalInfo.module.scss';

const ModalInfo = ({ campItem }) => {
  const { name, price, rating, reviews, location } = campItem;

  return (
    <div className={css.info}>
      <h2 className={css.info__title}>{name}</h2>
      <ReviewsLocal
        rating={rating}
        reviews={reviews.length}
        location={location}
      />
      <p className={css.info__price}>€{price}</p>
    </div>
  );
};

export default ModalInfo;
