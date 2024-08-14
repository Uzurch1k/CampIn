import { Suspense } from 'react';

import Navigation from '../Navigation/Navigation';
import { LoaderMain } from '../Loader/Loader';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navigation />
      <main className="main">
        <Suspense fallback={<LoaderMain />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
