import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CheckBalance from './pages/CheckBalance';
import Pin from './pages/Pin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-balance' element={<CheckBalance />} />
        <Route path='/pin' element={<Pin />} />
      </Routes>
    </Router>
  );
};

export default App;
