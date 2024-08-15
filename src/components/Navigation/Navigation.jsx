import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';

import icons from '../../img/icons/icons.svg';

import clsx from 'clsx';
import css from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const headerClass = clsx(css.nav, {
    [css.otherPage]: location.pathname !== '/',
    [css.bgHeader]: menuOpen,
  });
  const navItemClass = clsx({
    [css.itemLink]: location.pathname !== '/',
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className={css.nav__body}>
            <Link className={css.logo} to="/">
              <div className={css.logo__icon}>
                <svg width="40" height="40">
                  <use href={`${icons}#icon-logo`}></use>
                </svg>
              </div>
              <span className={css.logo__name}>CampIn</span>
            </Link>

            <div className={css.nav__sideBar}>
              <ul className={css.listDesc}>
                <NavigationItems
                  csslink={navItemClass}
                  onItemClick={handleNavItemClick}
                />
              </ul>

              <button
                className={clsx(css.burgerBtn, menuOpen && css.isOpened)}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={clsx(css.burgerBox, menuOpen && css.isOpened)}>
        <ul className={css.listMob}>
          <NavigationItems
            csslink={navItemClass}
            onItemClick={handleNavItemClick}
          />
        </ul>
      </div>
    </>
  );
};

export default Navigation;
