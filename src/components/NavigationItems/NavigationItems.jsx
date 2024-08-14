import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import css from './NavigationItems.module.scss';

const NavigationItems = ({ csslink, onItemClick }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, csslink, isActive && css.navActive);
  };

  return (
    <>
      <li className={css.navItem}>
        <NavLink to="/" className={buildLinkClass} onClick={onItemClick}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog" className={buildLinkClass} onClick={onItemClick}>
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={buildLinkClass}
          onClick={onItemClick}
        >
          Favorites
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItems;
