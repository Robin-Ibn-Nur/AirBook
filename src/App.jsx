import React from 'react';
import Header from './HomeComponent/Header/Header';
import Banner from './HomeComponent/Banner/Banner';
import Destinations from './HomeComponent/Destinations/Destinations';
import Offers from './HomeComponent/Offers/Offers';
import Airlines from './HomeComponent/Airlines/Airlines';
import Testimonials from './HomeComponent/Testimonials/Testimonials';
import TravelBlog from './HomeComponent/TravelBlog/TravelBlog';
import Subscribe from './HomeComponent/Subscribe/Subscribe';
import Footer from './HomeComponent/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Destinations />
      <Offers />
      <Airlines />
      <Testimonials />
      <TravelBlog />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;