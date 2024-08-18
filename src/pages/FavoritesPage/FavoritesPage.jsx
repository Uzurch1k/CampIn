import { useSelector } from 'react-redux';

import {
  selectCampsLoading,
  selectFavorites,
} from '../../redux/camp/selectors';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';
import CampList from '../../components/CampList/CampList';
import { LoaderMain } from '../../components/Loader/Loader';
import DefaultFavorite from '../../components/DefaultFavorite/DefaultFavorite';

const FavoritesPage = () => {
  const camps = useSelector(selectFavorites);
  const loading = useSelector(selectCampsLoading);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <SectionWrapp>
        {!loading ? (
          camps.length > 0 ? (
            <CampList camps={camps} />
          ) : (
            <DefaultFavorite />
          )
        ) : (
          <LoaderMain />
        )}
      </SectionWrapp>
    </>
  );
};

export default FavoritesPage;
