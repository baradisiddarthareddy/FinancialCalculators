// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BudgetCalculator from './components/calculators/BudgetCalculator';
import CompoundInterestCalculator from './components/calculators/CompoundInterestCalculator';
import GSTCalculator from './components/calculators/GSTCalculator';

import FDCalculator from './components/calculators/FDCalculator';
import ForeClosureCalculator from './components/calculators/ForeClosureCalculator';
import PostOfficeMISCalculator from './components/calculators/PostOfficeMISCalculator';
import RDCalculator from './components/calculators/RDCalculator';
import SimpleInterestCalculator from './components/calculators/SimpleInterestCalculator';
import SIPCalculator from './components/calculators/SIPCalculator';
import SSYCalculator from './components/calculators/SSYCalculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LogIn';
import SignIn from './pages/SignIn';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/budget" element={<BudgetCalculator />} />
          <Route path="/simple-interest" element={<SimpleInterestCalculator/>} />
          <Route path="/gst-calculator" element={<GSTCalculator />} />
          <Route path="/compound-interest-calculator" element={<CompoundInterestCalculator />} />
          <Route path="/post-office-mis-calculator" element={<PostOfficeMISCalculator />} />
          <Route path="/rd-calculator" element={<RDCalculator />} />
          <Route path="/sip-calculator" element={<SIPCalculator />} />
          <Route path="/fd-calculator" element={<FDCalculator />} />
          <Route path="/ssy-calculator" element={<SSYCalculator />} />
          <Route path="/foreclosure-calculator" element={<ForeClosureCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
