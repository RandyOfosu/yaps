import React from 'react'

const ReactButton = ({
    title,
    handleClick,
    otherClasses,
  }: {
    title: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
    return (
      <button
      className="relative z-20 mt-4 mb-4 shadow-xl shadow-green-300/70 px-8 py-4 bg-gradient-to-br from-green-300 via-teal-300 to-cyan-400 rounded-md text-gray-800 text-xl md:text-2xl font-semibold transition duration-200 ease-linear"
        onClick={handleClick}
      >
        {title}
      </button>
    );
  };
  
  export default ReactButton;