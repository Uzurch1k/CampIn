import { Link } from 'react-router-dom';

import icons from '../../img/icons/icons.svg';
import mp4Video from '../../img/media/mov-mp4.mp4';
import webmVideo from '../../img/media/mov-webm.webm';

import css from './WelcomeSection.module.scss';

const WelcomeSection = () => {
  return (
    <section className={css.welcome}>
      <video preload="auto" autoPlay muted loop className={css.welcome__video}>
        <source src={mp4Video} type="video/mp4" />
        <source src={webmVideo} type="video/webm" />
      </video>
      <div className={css.welcome__body}>
        <div className="container">
          <div className={css.welcome__content}>
            <h1 className={css.welcome__title}>Welcome to CampIn</h1>
            <p className={css.welcome__text}>
              Ready to CampIn? Adventure Awaits!
            </p>
            <Link className={css.welcome__link} to="/catalog">
              Let's go!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
