import React from 'react';
import HeroSection from '../HeroSection.jsx';
import Cards from '../Cards.jsx';

import '../../App.css';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
