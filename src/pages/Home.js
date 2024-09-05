import React from 'react';
import HomeBanner from '../Screen/HomeBanner';
import HomeDetails from '../Screen/HomeDetails';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className='homescreen'>
      <HomeBanner/>
      <HomeDetails/>
      <Footer/>
    </div>
  );
}

export default Home;