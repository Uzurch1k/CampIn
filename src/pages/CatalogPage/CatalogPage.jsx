import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../../redux/camp/slice';
import {
  selectCamps,
  selectCampsLoading,
  selectCurrentPage,
  selectItemsPerPage,
} from '../../redux/camp/selectors';
import { fetchCamp } from '../../redux/camp/operations';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';
// import Sidebar from '../../components/Sidebar/Sidebar';
import CampList from '../../components/CampList/CampList';
import { LoaderMain } from '../../components/Loader/Loader';

import css from './CatalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const camps = useSelector(selectCamps);
  const loading = useSelector(selectCampsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(fetchCamp({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  return (
    <div className={css.body}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SectionWrapp>
        {/* <Sidebar /> */}
        {!loading ? <CampList camps={camps} /> : <LoaderMain />}
        {currentPage !== itemsPerPage && (
          <div className={css.btnWrapp}>
            <button className={css.btn} type="button" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </SectionWrapp>
    </div>
  );
};

export default CatalogPage;
