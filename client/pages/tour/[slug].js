import React from 'react';
import axios from 'axios';
import Layout from '../../layout/Layout';

const FullTour = ({ tour }) => {
  return (
    <Layout>
      <h1> {tour.name} </h1>
      <p> {tour.name} </p>
    </Layout>
  );
};

FullTour.getInitialProps = async context => {
  const { slug } = context.query;
  console.log(slug);
  const res = await axios.get(`http://localhost:5000/api/tour/${slug}`);

  return { tour: res.data };
};

export default FullTour;
