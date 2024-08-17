import css from './VehicleDetails.module.scss';

const VehicleDetails = ({ campItem }) => {
  const { form, length, width, height, tank, consumption } = campItem;

  return (
    <div className={css.details}>
      <h2 className={css.details__title}>Vehicle details</h2>
      <ul className={css.details__list}>
        <li className={css.details__item}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li className={css.details__item}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={css.details__item}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={css.details__item}>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className={css.details__item}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={css.details__item}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
