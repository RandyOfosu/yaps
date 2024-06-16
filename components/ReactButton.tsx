import React from 'react'

const ReactButton = ({
    title,
    handleClick,
  }: {
    title: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
    return (
      <button
      className="relative z-20 mt-4 mb-4 shadow-xl shadow-green-300/70 px-4 py-2 md:px-8 md:py-4 bg-gradient-to-br from-green-300 via-teal-300 to-cyan-400 rounded-md text-gray-800 text-base md:text-2xl font-semibold transition duration-200 ease-linear"
        onClick={handleClick}
      >
        {title}
      </button>
    );
  };
  
  export default ReactButton;