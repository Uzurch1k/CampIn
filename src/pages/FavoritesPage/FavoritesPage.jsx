import { useSelector } from 'react-redux';

import {
  selectCampsLoading,
  selectFavorites,
} from '../../redux/camp/selectors';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';
import CampList from '../../components/CampList/CampList';
import { LoaderMain } from '../../components/Loader/Loader';

import css from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const camps = useSelector(selectFavorites);
  const loading = useSelector(selectCampsLoading);

  return (
    <div className={css.body}>
      <DocumentTitle>Favorites</DocumentTitle>
      <SectionWrapp>
        {!loading ? <CampList camps={camps} /> : <LoaderMain />}
      </SectionWrapp>
    </div>
  );
};

export default FavoritesPage;
