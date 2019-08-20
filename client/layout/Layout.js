import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../scss/main.scss';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

const Main = styled.div`
  grid-column: 1/-1;
`;
