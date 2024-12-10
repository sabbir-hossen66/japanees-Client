import React from 'react';
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';
import Skill from '../../components/Skill/Skill';
import Bonus from '../../components/Bonus/Bonus';
import State from '../../components/Skill/State/State';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Skill />
      <Bonus />
      <State />
    </div>
  );
};

export default LandingPage;