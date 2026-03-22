import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/sluzby', label: 'Služby' },
    { path: '/o-nas', label: 'O nás' },
    { path: '/cenik', label: 'Ceník' },
    { path: '/lidi-prosim', label: 'Lidi prosím' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ohm-dark/95 backdrop-blur-sm shadow-lg'
          : 'bg-ohm-dark/50 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white tracking-wider"
            >
              OHM
            </motion.div>
            <div className="text-xs text-gray-400 group-hover:text-ohm-gold transition-colors">
              Organic HR Marketing
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-ohm-gold bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Client Portal + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/klientska-zona"
              className={({ isActive }) =>
                `hidden md:flex items-center space-x-1 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-ohm-gold bg-white/10'
                    : 'text-gray-300 hover:text-ohm-gold hover:bg-white/5'
                }`
              }
            >
              <Lock size={16} />
              <span>Klientská zóna</span>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
            className="md:hidden border-t border-white/10 bg-ohm-dark/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-ohm-gold bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/klientska-zona"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-ohm-gold bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Lock size={18} />
                <span>Klientská zóna</span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
