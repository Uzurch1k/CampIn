import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';

import clsx from 'clsx';
import css from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <div className={css.body}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SectionWrapp>Catalog</SectionWrapp>
    </div>
  );
};

export default CatalogPage;
