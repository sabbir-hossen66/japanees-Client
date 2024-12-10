import React from 'react';
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';
import Skill from '../../components/Skill/Skill';
import Bonus from '../../components/Bonus/Bonus';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Skill />
      <Bonus />
    </div>
  );
};

export default LandingPage;