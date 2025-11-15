import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CheckBalance from './pages/CheckBalance';
import Pin from './pages/Pin';
import AvailableBalance from './pages/AvailableBalance';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-balance' element={<CheckBalance />} />
        <Route path='/pin' element={<Pin />} />
        <Route path='/avlBalance' element={<AvailableBalance />} />
      </Routes>
    </Router>
  );
};

export default App;
