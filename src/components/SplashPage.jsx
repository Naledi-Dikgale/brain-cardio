import React, { useState } from 'react';

const SplashPage = ({ onStart }) => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <div className="text-5xl font-bold mb-4">Tech-30</div>
      <div className="text-2xl mb-4">Welcome to the Tech-30 Challenge!</div>
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
