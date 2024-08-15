import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCamps,
  selectCampsLoading,
  selectCurrentPage,
  selectItemsPerPage,
} from '../../redux/camp/selectors';
import { setPage } from '../../redux/camp/slice';
import { fetchCamp } from '../../redux/camp/operations';

import CampItem from '../CampItem/CampItem';

import css from './CampList.module.scss';

const CampList = () => {
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

  return (
    <>
      <ul className={css.body}>
        {camps.map(camp => (
          <CampItem key={camp._id} campItems={camp} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};

export default CampList;
