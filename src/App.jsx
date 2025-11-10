import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CheckBalance from './pages/CheckBalance';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-balance' element={<CheckBalance />} />
      </Routes>
    </Router>
  );
};

export default App;
