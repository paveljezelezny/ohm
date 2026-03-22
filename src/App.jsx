import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import LidiLayout from './layouts/LidiLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import LidiProsim from './pages/LidiProsim';
import ClientPortal from './pages/ClientPortal';
import ClientLogin from './pages/ClientLogin';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/cenik" element={<Pricing />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/klientska-zona" element={<ClientPortal />} />
          <Route path="/klientska-zona/login" element={<ClientLogin />} />
        </Route>

        {/* Lidi Prosím Layout Routes */}
        <Route element={<LidiLayout />}>
          <Route path="/lidi-prosim" element={<LidiProsim />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
