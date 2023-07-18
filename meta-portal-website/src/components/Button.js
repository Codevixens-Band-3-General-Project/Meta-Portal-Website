import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
        className={`bg-transparent text-white font-bold py-2 px-4 rounded border-2 border-purple-600 hover:border-purple-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

// #17102c