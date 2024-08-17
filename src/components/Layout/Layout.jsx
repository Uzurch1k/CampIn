import { Suspense } from 'react';

import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navigation />
      <main className="main">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
