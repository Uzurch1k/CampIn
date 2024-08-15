import AmenitiesList from '../AmenitiesList/AmenitiesList';
import FavoritesBtn from '../FavoritesBtn/FavoritesBtn';
import ReviewsLocal from '../ReviewsLocal/ReviewsLocal';

import css from './CampItem.module.scss';

const CampItem = () => {
  return (
    <div className={css.body}>
      CampItem
      <AmenitiesList />
      <ReviewsLocal />
      <FavoritesBtn />
    </div>
  );
};

export default CampItem;
