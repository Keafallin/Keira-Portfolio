import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Project';


const AppRouter = () => {

  return (
    <Router>
      <nav className="nav-con">
        <div className="navbar">

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;