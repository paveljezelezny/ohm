import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigace',
      links: [
        { label: 'Služby', to: '/sluzby' },
        { label: 'O nás', to: '/o-nas' },
        { label: 'Ceník', to: '/cenik' },
        { label: 'Kontakt', to: '/kontakt' },
      ],
    },
    {
      title: 'Projekty',
      links: [
        { label: 'Lidi, prosím...', to: '/lidi-prosim', external: false },
        { label: 'Klientská zóna', to: '/klientska-zona', external: false },
      ],
    },
    {
      title: 'Partneři',
      links: [
        { label: 'Human Capital', to: 'https://humancapital.cz', external: true },
        { label: 'Pracovna', to: 'https://pracovna.cz', external: true },
        { label: 'Podcasters', to: 'https://podcasters.cz', external: true },
      ],
    },
  ];

  const contactInfo = [
    'info@ohmarketing.cz',
    'Praha, Česká republika',
  ];

  return (
    <footer className="bg-ohm-dark text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col space-y-3"
          >
            <Link to="/" className="group cursor-pointer w-fit">
              <div className="text-xl font-bold text-white tracking-wider group-hover:text-ohm-gold transition-colors">
                OHM
              </div>
              <div className="text-xs text-gray-400 group-hover:text-ohm-gold transition-colors">
                Organic HR Marketing
              </div>
            </Link>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ohm-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-ohm-gold transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-ohm-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Kontakt
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info} className="text-gray-400 text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} OHM - Organic HR Marketing. Projekt Human Capital & Pracovna.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-ohm-gold transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-ohm-gold transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
