// import React from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Layout from '../../layout/Layout';

// const FullTour = ({ tour }) => {
//   const router = useRouter();

//   console.log(router);
//   return (
//     <Layout>
//       <h1> {router.query.slug} </h1>
//       <p> {tour.name} </p>
//     </Layout>
//   );
// };

// FullTour.getInitialProps = async ({ req }) => {
//   console.log('req is', req);
//   const res = await axios.get(`http://localhost:5000/api/tour/the-wine-taster`);

//   return { tour: res.data };
// };

// export default FullTour;
