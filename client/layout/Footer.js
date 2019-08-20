import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterStyle>
      <div>TokyoJs &copy; {new Date().getFullYear()}</div>
      <div>A Full Stack Next JS App with Redux created by Alex Quasar</div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: darkred;
  width: 100%;
  grid-column: 1/-1;
  padding: 1rem;
  text-align: center;
  color: white;
`;
