import { useState } from 'react';

import AmenitiesList from '../AmenitiesList/AmenitiesList';
import FavoritesBtn from '../FavoritesBtn/FavoritesBtn';
import ReviewsLocal from '../ReviewsLocal/ReviewsLocal';
import { LoaderImg } from '../../components/Loader/Loader';

import clsx from 'clsx';
import css from './CampItem.module.scss';

const CampItem = ({ campItems, openModal }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const {
    _id,
    gallery,
    details,
    adults,
    name,
    price,
    rating,
    location,
    reviews,
    description,
  } = campItems;

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <li className={css.item}>
      <div className={css.item__body}>
        <div className={css.item__imgWrapp}>
          {isImageLoading && <LoaderImg />}
          <img
            src={gallery[0]}
            alt="Camp"
            onLoad={handleImageLoad}
            style={{ display: isImageLoading ? 'none' : 'block' }}
          />
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
          <AmenitiesList details={details} adults={adults} />
          <button
            className={clsx(css.item__btn, 'btn-def')}
            type="button"
            onClick={() => openModal(campItems)}
          >
            Show more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CampItem;
