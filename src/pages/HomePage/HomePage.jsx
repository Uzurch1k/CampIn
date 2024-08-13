import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';

import clsx from 'clsx';
import css from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={css.body}>
      <DocumentTitle>Home</DocumentTitle>
      <SectionWrapp>Home</SectionWrapp>
    </div>
  );
};

export default HomePage;
