import { Suspense } from 'react';

import { LoaderMain } from '../Loader/Loader';

import clsx from 'clsx';
import css from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="main">
        <Suspense fallback={<LoaderMain />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
