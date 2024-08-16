import icons from '../../img/icons/icons.svg';

import css from './ReviewsLocal.module.scss';

const ReviewsLocal = ({ rating, reviews, location }) => {
  return (
    <div className={css.body}>
      <div className={css.part}>
        <div className={css.iconStar}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-star`}></use>
          </svg>
        </div>
        <p className={css.rating}>
          {rating}
          <span>({reviews} Reviews)</span>
        </p>
      </div>
      <div className={css.part}>
        <div className={css.iconLocal}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-local`}></use>
          </svg>
        </div>
        <p className={css.local}>{location}</p>
      </div>
    </div>
  );
};

export default ReviewsLocal;
