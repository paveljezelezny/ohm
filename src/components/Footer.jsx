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
    <footer className="bg-ohm-deep border-t border-ohm-violet">
      {/* Decorative top gradient line */}
      <div className="h-px bg-gradient-to-r from-ohm-mint via-ohm-lavender to-ohm-rose" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col space-y-3"
          >
            <Link to="/" className="group cursor-pointer w-fit">
              <div className="gradient-text text-xl font-bold tracking-wider">
                OHM
              </div>
              <div className="text-xs text-ohm-slate group-hover:text-ohm-mint transition-colors">
                Organic HR Marketing
              </div>
            </Link>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ohm-slate hover:text-ohm-mint transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-ohm-mint font-semibold mb-4 text-sm uppercase tracking-wide">
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
                        className="text-ohm-slate hover:text-ohm-mint transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-ohm-slate hover:text-ohm-mint transition-colors text-sm"
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
            <h3 className="text-ohm-mint font-semibold mb-4 text-sm uppercase tracking-wide">
              Kontakt
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info} className="text-ohm-slate text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ohm-violet pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-ohm-slate">
              © {currentYear} OHM - Organic HR Marketing. Projekt Human Capital & Pracovna.
            </p>
            <div className="flex space-x-6 text-sm text-ohm-slate">
              <a href="#" className="hover:text-ohm-mint transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-ohm-mint transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
