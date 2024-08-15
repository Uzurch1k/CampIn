import CampItem from '../CampItem/CampItem';

import css from './CampList.module.scss';

const CampList = () => {
  return (
    <div className={css.body}>
      <CampItem />
      CampList
    </div>
  );
};

export default CampList;
