import { MutatingDots, ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.scss';

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
      wrapperClass={css.mainLoder}
    />
  );
};

export const LoaderImg = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#E44848"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.imgLoader}
    />
  );
};
