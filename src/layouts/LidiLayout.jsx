import React from 'react';
import { Outlet } from 'react-router-dom';
import LidiNavbar from '../components/LidiNavbar';
import LidiFooter from '../components/LidiFooter';

export default function LidiLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-lidi-warm">
      <LidiNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <LidiFooter />
    </div>
  );
}
