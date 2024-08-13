import clsx from 'clsx';
import css from './SectionWrapp.module.scss';

const SectionWrapp = ({ children }) => {
  return (
    <div className="container">
      <div className={css.section}>{children}</div>
    </div>
  );
};

export default SectionWrapp;
