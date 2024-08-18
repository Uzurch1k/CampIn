import css from './DefaultFavorite.module.scss';

const DefaultFavorite = () => {
  return (
    <div className={css.default}>
      <h2 className={css.default__title}>There are no favourites yet</h2>
    </div>
  );
};

export default DefaultFavorite;
