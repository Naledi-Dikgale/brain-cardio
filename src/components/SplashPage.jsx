import React, { useState } from 'react';

const SplashPage = ({ onStart }) => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <div className="text-5xl font-bold mb-4">Tech-30</div>
      <div className="relative">
  <div className="w-40 h-40 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(/logo.png)` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full"></div>
  </div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white  text-center w-[90%]">Welcome to the Tech-30!</div>
</div>
      {!showRules ? (
        <button onClick={handleShowRules} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold">
          Start
        </button>
      ) : (
        <div className="text-center">
          <div className="mb-4">
            <p className="text-xl">Game Rules:</p>
            <p>1. You have 30 seconds to cover 5 tech terms on display.</p>
            <p>2. Explain the term to your team mates without saying the actual term.</p>
            <p>3. If you explanation is good your team mates will guess the term.</p>
            <p>4. One correct term equals one point</p>
            <p>5. The team with the most points wins!</p>
            <p>6. Click "start" when you are ready to play.</p>
          </div>
          <button onClick={onStart} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SplashPage;