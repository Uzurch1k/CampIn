import css from './VehicleDetails.module.scss';

const VehicleDetails = ({ campItem }) => {
  const { form, length, width, height, tank, consumption } = campItem;

  const formatForm = value => {
    const formatted = value.replace(/([a-z])([A-Z])/g, '$1 $2');

    return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
  };

  const formatTank = tank => {
    return tank.replace(/(\d+)(\D+)/, '$1 $2');
  };

  const formatDimensions = dimension => {
    return dimension.replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2');
  };

  const formatConsumption = consumption => {
    return consumption.replace(
      /([0-9.]+[a-zA-Z]+\/[0-9]+)([a-zA-Z]+)/,
      '$1 $2'
    );
  };

  return (
    <div className={css.details}>
      <h2 className={css.details__title}>Vehicle details</h2>
      <ul className={css.details__list}>
        <li className={css.details__item}>
          <span>Form</span>
          <span>{formatForm(form)}</span>
        </li>
        <li className={css.details__item}>
          <span>Length</span>
          <span>{formatDimensions(length)}</span>
        </li>
        <li className={css.details__item}>
          <span>Width</span>
          <span>{formatDimensions(width)}</span>
        </li>
        <li className={css.details__item}>
          <span>Height</span>
          <span>{formatDimensions(height)}</span>
        </li>
        <li className={css.details__item}>
          <span>Tank</span>
          <span>{formatTank(tank)}</span>
        </li>
        <li className={css.details__item}>
          <span>Consumption</span>
          <span>{formatConsumption(consumption)}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
