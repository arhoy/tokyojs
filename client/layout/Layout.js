import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../scss/main.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
