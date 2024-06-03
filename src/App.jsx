import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import TermsDisplay from './components/TermsDisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<TermsDisplay count={5} />} />
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </Router>
  );
};

export default App;