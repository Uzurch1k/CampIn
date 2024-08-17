import { useState } from 'react';

import { LoaderImg } from '../Loader/Loader';

import css from './ModalDesc.module.scss';

const ModalDesc = ({ gallery, description }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <div className={css.desc}>
      <ul className={css.desc__list}>
        {gallery.map((image, index) => (
          <li key={index} className={css.desc__item}>
            {isImageLoading && <LoaderImg />}
            <img
              src={image}
              alt="Camp"
              onLoad={handleImageLoad}
              style={{ display: isImageLoading ? 'none' : 'block' }}
            />
          </li>
        ))}
      </ul>
      <p className={css.desc__text}>{description}</p>
    </div>
  );
};

export default ModalDesc;
