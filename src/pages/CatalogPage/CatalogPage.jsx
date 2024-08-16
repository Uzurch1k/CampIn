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
import Sidebar from '../../components/Sidebar/Sidebar';
import CampList from '../../components/CampList/CampList';

import clsx from 'clsx';
import css from './CatalogPage.module.scss';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const camps = useSelector(selectCamps);
  const loading = useSelector(selectCampsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  console.log(camps);

  useEffect(() => {
    dispatch(fetchCamp({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  if (loading) return <p>loading...</p>;

  return (
    <div className={css.body}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SectionWrapp>
        <Sidebar />
        <CampList camps={camps} />
        <button onClick={handleLoadMore}>Load more</button>
      </SectionWrapp>
    </div>
  );
};

export default CatalogPage;
