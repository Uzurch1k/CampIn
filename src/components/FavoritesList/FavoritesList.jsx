import { useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/camp/selectors';

import FavoritesItem from '../FavoritesItem/FavoritesItem';

import css from './FavoritesList.module.scss';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  return (
    <>
      <ul className={css.body}>
        {favorites.map(favorit => (
          <FavoritesItem key={favorit._id} campItems={favorit} />
        ))}
      </ul>
    </>
  );
};

export default FavoritesList;
