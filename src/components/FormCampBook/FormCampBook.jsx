import { useEffect } from 'react';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import clsx from 'clsx';
import css from './FormCampBook.module.scss';

const FormCampBook = () => {
  useEffect(() => {
    flatpickr('#booking-date', {
      altInput: true,
      altFormat: 'M j, Y',
      dateFormat: 'd.m.Y',
      showMonths: 1,
      minDate: 'today',
      shorthandCurrentMonth: true,
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

  return (
    <form className={css.form}>
      <h2 className={css.form__title}>Book your campervan now</h2>
      <p className={css.form__text}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.form__wrapp}>
        <label className={css.form__label}>
          <input type="text" name="form-name" id="" placeholder="Name" />
        </label>

        <label className={css.form__label}>
          <input type="email" name="form-email" id="" placeholder="Email" />
        </label>

        <label className={css.form__label}>
          <input
            type="text"
            name="form-date"
            id="booking-date"
            placeholder="Booking date"
          />
        </label>

        <label className={css.form__label}>
          <textarea
            name="form-email"
            id=""
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
