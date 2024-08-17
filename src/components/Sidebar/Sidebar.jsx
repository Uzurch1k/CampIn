import SearchLocation from '../SearchLocation/SearchLocation';
import TypeList from '../VehicleType/VehicleType';
import EquipmentList from '../VehicleEquipment/VehicleEquipment';

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
