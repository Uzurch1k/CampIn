import SearchLocation from '../SearchLocation/SearchLocation';
import TypeList from '../TypeList/TypeList';
import EquipmentList from '../EquipmentList/EquipmentList';

import css from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={css.body}>
      Sidebar
      <SearchLocation />
      <TypeList />
      <EquipmentList />
    </div>
  );
};

export default Sidebar;
