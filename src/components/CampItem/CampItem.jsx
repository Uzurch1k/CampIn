import AmenitiesList from '../AmenitiesList/AmenitiesList';
import FavoritesBtn from '../FavoritesBtn/FavoritesBtn';
import ReviewsLocal from '../ReviewsLocal/ReviewsLocal';

import clsx from 'clsx';
import css from './CampItem.module.scss';

const CampItem = ({ campItems }) => {
  const { _id, gallery, name, price, rating, location, reviews, description } =
    campItems;

  return (
    <li className={css.item}>
      <div className={css.item__body}>
        <div className={css.item__imgWrapp}>
          <img src={gallery[0]} alt="Camp" />
        </div>
        <div className={css.item__content}>
          <div className={css.item__info}>
            <div className={css.item__top}>
              <h2 className={css.item__title}>{name}</h2>
              <div className={css.item__box}>
                <p className={css.item__price}>€{price}</p>
                <FavoritesBtn idItem={_id} />
              </div>
            </div>
            <ReviewsLocal
              rating={rating}
              reviews={reviews.length}
              location={location}
            />
          </div>
          <p className={css.item__desc}>{description}</p>
          <AmenitiesList />
          <button className={clsx(css.item__btn, 'btn-def')} type="button">
            Show more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CampItem;
