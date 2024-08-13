import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';

import clsx from 'clsx';
import css from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  return (
    <div className={css.body}>
      <DocumentTitle>Favorites</DocumentTitle>
      <SectionWrapp>Favorites</SectionWrapp>
    </div>
  );
};

export default FavoritesPage;
