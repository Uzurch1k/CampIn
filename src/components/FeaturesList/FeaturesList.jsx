import FeaturesItem from '../FeaturesItem/FeaturesItem';

import css from './FeaturesList.module.scss';

const FeaturesList = () => {
  return (
    <div className={css.body}>
      FeaturesList
      <FeaturesItem />
    </div>
  );
};

export default FeaturesList;
