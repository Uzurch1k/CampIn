import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite } from '../../redux/camp/slice';
import { selectFavorites } from '../../redux/camp/selectors';

import icons from '../../img/icons/icons.svg';

import clsx from 'clsx';
import css from './FavoritesBtn.module.scss';

const FavoritesBtn = ({ idItem }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(favorit => favorit._id === idItem);

  const handleToggleFavorite = campId => {
    dispatch(toggleFavorite(campId));
  };

  return (
    <button
      className={clsx(css.btn, isFavorite && css.selected)}
      onClick={() => handleToggleFavorite(idItem)}
    >
      <svg width="24" height="24">
        <use href={`${icons}#icon-like`}></use>
      </svg>
    </button>
  );
};

export default FavoritesBtn;
