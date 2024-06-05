import React from 'react';

const Navbar = ({ duration }) => {
  return (
    <div className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="text-2xl  font-bold">Tech-30</div>
        <div className="text-lg">Countdown: {duration} seconds</div>
      </div>
    </div>
  );
};

export default Navbar;
