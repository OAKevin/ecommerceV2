import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import Add from './pages/Add';

import './components/Navbar/Navbar.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars/add" element={<Add />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;