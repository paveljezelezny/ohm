import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Apple, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LidiFooter() {
  const streamingLinks = [
    {
      name: 'Spotify',
      url: 'https://spotify.com',
      icon: Music,
    },
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com',
      icon: Apple,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
    },
  ];

  return (
    <footer
      className="border-t border-gray-200 py-12"
      style={{ backgroundColor: '#FFF5EE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Branding */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col space-y-2"
          >
            <Link to="/lidi-prosim" className="group cursor-pointer w-fit">
              <div
                className="text-2xl font-bold tracking-tight group-hover:opacity-75 transition-opacity"
                style={{ color: '#E86C5A' }}
              >
                LIDI, prosím...
              </div>
              <div
                className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                style={{ color: '#E86C5A' }}
              >
                Podcast by OHM - Organic HR Marketing
              </div>
            </Link>
          </motion.div>

          {/* Streaming Platforms */}
          <div>
            <h3
              className="font-semibold mb-4 text-sm uppercase tracking-wide"
              style={{ color: '#E86C5A' }}
            >
              Poslouchejte
            </h3>
            <div className="flex space-x-6">
              {streamingLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-gray-600 hover:transition-colors"
                    style={{
                      color: '#E86C5A',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.75';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Zpět na ohmarketing.cz
          </Link>
          <p className="text-sm text-gray-600">
            Podcast o lidech. Pro lidi. Od lidí. © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
