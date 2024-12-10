import React from 'react';

const Button = ({ text, onClick, className = "" }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-4 py-1 text-white font-semibold rounded-lg transition-color duration-500 ease-in-out transform hover:scale-105 focus:outline-none ${className} bg-purple-400 hover:bg-indigo-500`}
      >
        {text}
      </button>

    </div>
  );
};

export default Button;