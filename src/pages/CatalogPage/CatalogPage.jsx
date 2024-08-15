import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SectionWrapp from '../../components/SectionWrapp/SectionWrapp';
import Sidebar from '../../components/Sidebar/Sidebar';
import CampList from '../../components/CampList/CampList';

import clsx from 'clsx';
import css from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <div className={css.body}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SectionWrapp>
        <Sidebar />
        <CampList />
      </SectionWrapp>
    </div>
  );
};

export default CatalogPage;
