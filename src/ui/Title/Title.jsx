import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      {subtitle && <p className="text-sm font-bold text-gray-400 mt-2 uppercase mb-2">{subtitle}</p>}
      <h4 className="text-3xl font-semibold text-gray-700">{title}</h4>

    </div>
  );
};

export default Title;


