import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <a> Tokyo JS </a>
      </Link>
      <Link href="/about">
        <a> About Us </a>
      </Link>
    </nav>
  );
};

export default Header;
