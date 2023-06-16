import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}