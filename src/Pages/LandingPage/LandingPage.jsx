import React from 'react';
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';
import Skill from '../../components/Skill/Skill';
import Bonus from '../../components/Bonus/Bonus';
import State from '../../components/Skill/State/State';
import ContactUs from '../../components/ContactUs/ContactUs';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Skill />
      <Bonus />
      <State />
      <ContactUs />
    </div>
  );
};

export default LandingPage;