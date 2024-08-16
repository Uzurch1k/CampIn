import CampItem from '../CampItem/CampItem';

import css from './CampList.module.scss';

const CampList = ({ camps }) => {
  return (
    <ul className={css.list}>
      {camps.map(camp => (
        <CampItem key={camp._id} campItems={camp} />
      ))}
    </ul>
  );
};

export default CampList;
