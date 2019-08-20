import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/counters';
import Layout from '../layout/Layout';
import styled from 'styled-components';

const Index = ({ counters, incrementCount, decrementCount }) => {
  const { count } = counters;
  const increment = () => {
    incrementCount();
  };

  const decrement = () => {
    decrementCount();
  };

  return (
    <Layout>
      <Title> Redux with Next Boiler Plate</Title>
      <p>Counter {count} </p>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
    </Layout>
  );
};

const mapStateToProps = state => ({
  counters: state.counters
});

export default connect(
  mapStateToProps,
  { incrementCount, decrementCount }
)(Index);

// STYLES
const Title = styled.h1`
  color: red;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 1rem;
`;
