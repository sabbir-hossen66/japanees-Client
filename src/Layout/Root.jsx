import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Root = () => {
  const location = useLocation();
  console.log(location);
  const withoutHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div className="flex flex-col min-h-screen font-Roboto">
      {withoutHeaderFooter || <Header />}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      {withoutHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;