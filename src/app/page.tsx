'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import HomeGallery from './components/HomeGallery';
import Services from './components/Services';
import Accomodation from './components/Accomodation';
import Standart from './components/Standart';
import Cottage from './components/Cottage';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import YoutubePlaylist from './components/YoutubePlaylist';
import CTA from './components/CTA';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HomeGallery />
      <Services />
      <Accomodation />
      <Standart />
      <Cottage />
      <Facilities />
      <Testimonials />
      <YoutubePlaylist />
      <CTA />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home;