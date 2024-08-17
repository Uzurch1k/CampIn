import AmenitiesList from '../AmenitiesList/AmenitiesList';
import FormCampBook from '../FormCampBook/FormCampBook';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

import css from './ModalFeatures.module.scss';

const ModalFeatures = ({ campItem }) => {
  const { details, adults } = campItem;

  return (
    <div className={css.features}>
      <div className={css.features__box}>
        <AmenitiesList details={details} adults={adults} />
        <VehicleDetails campItem={campItem} />
      </div>
      <FormCampBook />
    </div>
  );
};

export default ModalFeatures;
