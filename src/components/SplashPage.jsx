import React, { useState } from 'react';

const SplashPage = ({ onStart }) => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-300  via-purple-400 to-violet-600 text-white">
      <div className="text-4xl font-nosi mb-4">Tech-30</div>
      <div className="relative">
        <div className="p-12 w-40 h-40 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(/logo.png)` }}>
          <div className="absolute inset-0 bg-indigo-400 bg-opacity-30 rounded-full"></div>
        </div>
      </div>
      {!showRules && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-violet-50 text-center font-tang font-bold w-[90vw]" style={{ textShadow: '-1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime' }}>
          Welcome to the Tech-30!
        </div>
      )}
      {!showRules ? (
        <div className="mt-6">
          <button onClick={handleShowRules} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold">
            Start
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-4">
            <p className="text-xl">Game Rules:</p>
            <p>1. You have 30 seconds to cover 5 tech terms on display.</p>
            <p>2. Explain the term to your team mates without saying the actual term.</p>
            <p>3. If you explanation is good your team mates will guess the term.</p>
            <p>4. One correct term equals one point</p>
            <p>5. The team with the most points wins!</p>
            <p>6. Click "Next" when you are ready to play.</p>
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