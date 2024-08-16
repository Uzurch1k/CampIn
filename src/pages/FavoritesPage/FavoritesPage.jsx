import { useSelector } from 'react-redux';

import {
  selectCampsLoading,
  selectFavorites,
} from '../../redux/camp/selectors';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';
import CampList from '../../components/CampList/CampList';

import clsx from 'clsx';
import css from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const camps = useSelector(selectFavorites);
  const loading = useSelector(selectCampsLoading);
  console.log(camps);

  if (loading) return <p>loading...</p>;

  return (
    <div className={css.body}>
      <DocumentTitle>Favorites</DocumentTitle>
      <SectionWrapp>
        <CampList camps={camps} />
      </SectionWrapp>
    </div>
  );
};

export default FavoritesPage;
