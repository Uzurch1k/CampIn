import icons from '../../img/icons/icons.svg';
import css from './AmenitiesList.module.scss';

const AmenitiesList = ({ details, adults }) => {
  const {
    CD,
    TV,
    airConditioner,
    beds,
    freezer,
    gas,
    hob,
    kitchen,
    microwave,
    radio,
    shower,
    toilet,
    water,
  } = details;

  return (
    <ul className={css.amenitiesList}>
      {adults > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon2}>
              <use href={`${icons}#icon-users`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>{adults} adults</p>
        </li>
      )}
      {CD > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-cd`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>CD</p>
        </li>
      )}
      {TV > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-tv`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>TV</p>
        </li>
      )}
      {airConditioner > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-conditioner`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>{airConditioner} air conditioner</p>
        </li>
      )}
      {beds > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-bed`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>{beds} beds</p>
        </li>
      )}
      {freezer > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-freezer`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Freezer</p>
        </li>
      )}
      {hob > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-hob`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>{hob} hob</p>
        </li>
      )}
      {kitchen > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-kitchen`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Kitchen</p>
        </li>
      )}
      {microwave > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-microwave`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Microwave</p>
        </li>
      )}
      {radio > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-radio`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Radio</p>
        </li>
      )}
      {shower > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-shower`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Shower</p>
        </li>
      )}
      {toilet > 0 && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon2}>
              <use href={`${icons}#icon-toilet`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Toilet</p>
        </li>
      )}
      {gas && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon2}>
              <use href={`${icons}#icon-gas`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Gas</p>
        </li>
      )}
      {water && (
        <li className={css.amenitiesItem}>
          <div className={css.amenitiesIcon}>
            <svg className={css.icon1}>
              <use href={`${icons}#icon-water`}></use>
            </svg>
          </div>
          <p className={css.amenitiesText}>Water</p>
        </li>
      )}
    </ul>
  );
};

export default AmenitiesList;
