import { MutatingDots, ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.scss';
import clsx from 'clsx';

export const LoaderMain = () => {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#E44848"
      secondaryColor="#101828"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.main}
    />
  );
};

export const LoaderDetails = isPositioning => {
  return (
    <ThreeDots
      visible={true}
      height="50"
      width="50"
      color={isPositioning ? 'white' : '#87d28d'}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ color: 'yellow' }}
      wrapperClass={clsx({
        [css.details]: true,
        [css.loaderPositioning]: isPositioning,
      })}
    />
  );
};
