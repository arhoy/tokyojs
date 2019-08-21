// server is on localhost:5000

import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import styled from 'styled-components';

import Layout from '../layout/Layout';
import Tour from '../components/Tours/Tour';

const Index = ({ tours }) => {
  //Get the tours data
  return (
    <Layout>
      <Head>
        <title>Tokyo JS Home Page</title>
        <meta
          name="index page"
          content="initial-scale=1.0, width=device-width"
          key="index"
        />
      </Head>
      <Title> Redux with Next Boiler Plate</Title>
      <div className="Tours">
        {tours.data.map(tour => (
          <Tour
            key={tour.id}
            name={tour.name}
            price={tour.price}
            slug={tour.slug}
            ratingsAverage={tour.ratingsAverage}
            nextStartDate={tour.startDates[0]}
            summary={tour.summary}
            startingAt={tour.startLocation.description}
            maxGroupSize={tour.maxGroupSize}
            imageCover={tour.imageCover}
            difficulty={tour.difficulty}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;

// on page load get tours
Index.getInitialProps = async () => {
  const res = await axios.get('http://localhost:5000/api/tours');
  return { tours: res.data };
};

// STYLES
const Title = styled.h1`
  color: red;
`;
