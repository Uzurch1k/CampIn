import css from './SectionWrapp.module.scss';

const SectionWrapp = ({ children }) => {
  return (
    <section className={css.section}>
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWrapp;
