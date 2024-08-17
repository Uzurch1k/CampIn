import { useEffect, useState } from 'react';

import ModalInfo from '../ModalInfo/ModalInfo';
import ModalFeatures from '../ModalFeatures/ModalFeatures';
import ModalReviews from '../ModalReviews/ModalReviews';
import ModalDesc from '../ModalDesc/ModalDesc';

import icons from '../../img/icons/icons.svg';

import clsx from 'clsx';
import css from './Modal.module.scss';

const Modal = ({ campItem, onClose }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (campItem) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [campItem]);

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  if (!campItem) return null;
  console.log(campItem);

  const { description, gallery } = campItem;

  return (
    <div
      className={clsx(css.overlay, { [css.show]: isVisible })}
      onClick={handleOverlayClick}
    >
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.modal__close} onClick={onClose}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
        <ModalInfo campItem={campItem} />

        <div className={css.modal__wrapp}>
          <ModalDesc gallery={gallery} description={description} />

          <ul className={css.modal__list}>
            <li>
              <button
                className={clsx(
                  css.modal__link,
                  activeTab === 'features' && css.linkActive
                )}
                onClick={() => handleTabClick('features')}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={clsx(
                  css.modal__link,
                  activeTab === 'reviews' && css.linkActive
                )}
                onClick={() => handleTabClick('reviews')}
              >
                Reviews
              </button>
            </li>
          </ul>

          <div className={css.modal__line}></div>

          <div className={css.modal__content}>
            {activeTab === 'features' && <ModalFeatures campItem={campItem} />}
            {activeTab === 'reviews' && <ModalReviews campItem={campItem} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
