import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
// import TermsDisplay from './components/TermsDisplay';
import Categories from './components/Categories';
import Coding from './components/Coding';
import Animals from './components/Animals';
import Cars from './components/Cars';
import Entertainment from './components/Entertainment';
import Other from './components/Other';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/game" element={<TermsDisplay count={5} />} /> */}
        <Route path="/" element={<SplashPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/coding" element={<Coding count={5} />} />
       <Route path="/category/animals" element={<Animals count={5} />} />
         <Route path="/category/cars" element={<Cars count={5} />} />
        <Route path="/category/entertainment" element={<Entertainment count={5} />} />
        <Route path="/category/other" element={<Other count={5} />} />
      </Routes>
    </Router>
  );
};

export default App;