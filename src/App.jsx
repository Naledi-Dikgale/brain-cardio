import React, { useState } from 'react';
import Timer from './components/Timer';
import TermsDisplay from './components/TermsDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashPage from './components/SplashPage';

const App = () => {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(5);
  const duration = 30;

  const handlePrev = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleNext = () => {
    if (count < 10) setCount(count + 1);
  };

  const startGame = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!started ? (
        <SplashPage onStart={startGame} />
      ) : (
        <>
          <Navbar duration={duration} />
          <main className="flex-grow container mx-auto p-4">
            <Timer duration={duration} />
            <TermsDisplay count={count} />
          </main>
          <Footer onPrev={handlePrev} onNext={handleNext} />
        </>
      )}
    </div>
  );
};

export default App;
