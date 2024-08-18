import { useEffect, useState } from 'react';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import icons from '../../img/icons/icons.svg';

import clsx from 'clsx';
import css from './FormCampBook.module.scss';

const FormCampBook = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    date: false,
  });

  useEffect(() => {
    flatpickr('#booking-date', {
      altInput: true,
      altFormat: 'M j, Y',
      dateFormat: 'd.m.Y',
      showMonths: 1,
      minDate: 'today',
      disableMobile: true,
      locale: {
        firstDayOfWeek: 0,
        weekdays: {
          shorthand: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          longhand: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
        },
      },
    });

    const monthDropdown = document.querySelector(
      '.flatpickr-monthDropdown-months'
    );
    if (monthDropdown) monthDropdown.disabled = true;

    const style = document.createElement('style');
    style.innerHTML = `
      .flatpickr-calendar .dayContainer span:nth-child(n+36) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form['form-name'].value.trim();
    const email = form['form-email'].value.trim();
    const date = form['form-date'].value.trim();

    let valid = true;
    const newErrors = { name: false, email: false, date: false };

    if (!name) {
      newErrors.name = true;
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.email = true;
      valid = false;
    }

    if (!date) {
      newErrors.date = true;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      form.submit();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.form__title}>Book your campervan now</h2>
      <p className={css.form__text}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.form__wrapp}>
        <label className={clsx(css.form__label, errors.name && css.error)}>
          <input type="text" name="form-name" placeholder="Name" />
        </label>

        <label className={clsx(css.form__label, errors.email && css.error)}>
          <input type="text" name="form-email" placeholder="Email" />
        </label>

        <label
          className={clsx(
            css.form__label,
            css.bookingDate,
            errors.date && css.error
          )}
        >
          <input
            type="text"
            name="form-date"
            id="booking-date"
            placeholder="Booking date"
          />
          <span className={css.form__icon}>
            <svg>
              <use href={`${icons}#icon-date`}></use>
            </svg>
          </span>
        </label>

        <label className={css.form__label}>
          <textarea
            name="form-comment"
            placeholder="Comment"
            rows="4"
          ></textarea>
        </label>
      </div>

      <button className={clsx(css.form__btn, 'btn-def')} type="submit">
        Send
      </button>
    </form>
  );
};

export default FormCampBook;
