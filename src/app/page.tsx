import type { NextPage } from 'next';
import React from 'react';
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero'; // Adjust the path as needed
import Testimonials from '../../components/Testimonials';
import OurStats from '../../components/OurStats';
import Instruments from '../../components/OurInstruments';
import FreeBookForm from '../../components/FreeBookForm';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Hero /> {/* Now just statically includes the Hero component */}
      <Testimonials />
      <OurStats />
      <Instruments />
      <FreeBookForm />
    
      <main id="main-content">
        <h1>Welcome to Our Website</h1>
        <p>This is a demo page showing the NavBar component in use.</p>
        {/* Additional content can go here */}
      </main>
      {/* Other sections */}
    </div>
  );
};

export default Home;
