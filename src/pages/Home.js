import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import ServiceSection from '../components/ServicesSection';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Header/>
      <div className="container">
        <SearchSection id="search" className="section"/>
      </div>
      <ServiceSection id="service" className="section"/>
      <Footer></Footer>
    </div>
  );
}

export default Home;
