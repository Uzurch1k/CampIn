import icons from '../../img/icons/icons.svg';

import clsx from 'clsx';
import css from './ReviewsItem.module.scss';

const ReviewsItem = ({ revie }) => {
  const { comment, reviewer_name, reviewer_rating } = revie;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <li key={i} className={css.revie__star}>
          <svg
            width="16"
            height="16"
            className={clsx({ [css.yellowStar]: i <= reviewer_rating })}
          >
            <use href={`${icons}#icon-star`}></use>
          </svg>
        </li>
      );
    }

    return stars;
  };

  return (
    <li className={css.revie}>
      <div className={css.revie__box}>
        <div className={css.revie__ava}>
          <span>{reviewer_name[0]}</span>
        </div>
        <div className={css.revie__info}>
          <h3 className={css.revie__name}>{reviewer_name}</h3>
          <ul className={css.revie__rating}>{renderStars()}</ul>
        </div>
      </div>
      <p className={css.revie__comment}>{comment}</p>
    </li>
  );
};

export default ReviewsItem;
