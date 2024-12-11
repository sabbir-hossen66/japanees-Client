import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Shared/DashboardNavbar';

const DashboardContent = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[250px] h-auto lg:h-screen bg-indigo-400'>
        <DashboardNavbar />
      </div>
      <div className='flex-1'>
        <h2>hello dashboard</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardContent;
