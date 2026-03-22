import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LidiNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/lidi-prosim', label: 'Epizody', exact: true },
    { path: '/lidi-prosim/o-poradu', label: 'O pořadu' },
    { path: '/lidi-prosim/pro-firmy', label: 'Pro firmy' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/lidi-prosim" className="flex flex-col group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#E86C5A' }}
            >
              LIDI, prosím...
            </motion.div>
            <div className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">
              podcast by OHM
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.exact}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#E86C5A' : 'transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Back to OHM + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="hidden md:flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Zpět na OHM</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-100 bg-gray-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.exact}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#E86C5A' : 'transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Zpět na OHM</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
