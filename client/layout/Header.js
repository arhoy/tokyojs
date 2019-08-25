import Link from 'next/link';
import styled from 'styled-components';
import { connect } from 'react-redux';

// to do: style a make mobile responsive
const Header = ({ auth }) => {
  console.log(auth.isAuthenticated);
  return (
    <Nav>
      <Logo> Tokyo JS </Logo>
      <NavLinks>
        <Link href='/'>
          <a> Home </a>
        </Link>
        <Link href='/about'>
          <a> About Us </a>
        </Link>
        {auth.isAuthenticated ? (
          <a> Logout </a>
        ) : (
          <Link href='/auth/login'>
            <a> Login </a>
          </Link>
        )}
      </NavLinks>
    </Nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Header);

const Nav = styled.nav`
  background-color: red;
  width: 100%;
  grid-column: 1/-1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 4rem;
`;

const NavLinks = styled.div`
  margin-right: 1rem;
`;
