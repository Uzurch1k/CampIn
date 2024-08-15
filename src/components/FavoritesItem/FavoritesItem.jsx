import { useDispatch } from 'react-redux';

import { toggleFavorite } from '../../redux/camp/slice';

import AmenitiesList from '../AmenitiesList/AmenitiesList';
import FavoritesBtn from '../FavoritesBtn/FavoritesBtn';
import ReviewsLocal from '../ReviewsLocal/ReviewsLocal';

import css from './FavoritesItem.module.scss';

const FavoritesItem = ({ campItems }) => {
  const dispatch = useDispatch();

  const { _id, description } = campItems;

  const handleToggleFavorite = campId => {
    dispatch(toggleFavorite(campId));
  };

  return (
    <li className={css.body}>
      {description}
      <AmenitiesList />
      <ReviewsLocal />
      <FavoritesBtn />
      <button onClick={() => handleToggleFavorite(_id)}>❤️</button>
    </li>
  );
};

export default FavoritesItem;
