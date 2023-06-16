import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

export default function App(): JSX.Element {
  return (
    <>
    <Header />
    <Home />
    </>
  )
}