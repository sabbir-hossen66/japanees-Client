import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Shared/DashboardNavbar';
import Graphs from '../Pages/CommonDashboard/Graphs';

const DashboardContent = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[300px] h-auto lg:h-screen bg-indigo-400'>
        <DashboardNavbar />
      </div>
      <div className='flex-grow p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardContent;
