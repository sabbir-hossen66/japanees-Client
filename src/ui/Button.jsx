import React from 'react';

const Button = ({ text, onClick, className = "" }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-6 py-2 text-white font-semibold rounded transition-color duration-500 ease-in-out transform hover:scale-105 focus:outline-none ${className} bg-indigo-500 hover:bg-purple-400`}
      >
        {text}
      </button>

    </div>
  );
};

export default Button;