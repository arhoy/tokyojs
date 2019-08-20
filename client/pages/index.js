import React from 'react';
import Link from 'next/link';
import Layout from '../layout/Layout';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5;
  text-align: center;
  color: palevioletred;
`;
const Index = () => (
  <Layout>
    <Title> Tokyo JS </Title>
    <p>Start your Japa Venture </p>
  </Layout>
);

export default Index;
