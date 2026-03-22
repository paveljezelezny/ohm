import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Video,
  Megaphone,
  GraduationCap,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animated blob component
const AnimatedBlob = ({ delay = 0, size = 'large' }) => {
  const sizeClass = size === 'large' ? 'w-80 h-80' : 'w-64 h-64';
  return (
    <motion.div
      animate={{
        borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 46% 66% / 33% 66% 33% 67%', '100% 60% 60% 100% / 100% 100% 60% 60%', '30% 70% 66% 34% / 66% 30% 66% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
        x: [0, 20, -10, 15, 0],
        y: [0, -15, 20, -10, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className={`absolute ${sizeClass} opacity-40 filter blur-3xl`}
    />
  );
};

// Decorative elements
const DecorativeElements = () => (
  <>
    {/* Scattered circles and symbols */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
      >
        {i % 2 === 0 ? (
          <div className="w-8 h-8 border border-white/20 rounded-full" />
        ) : (
          <div className="text-white/15 text-xl font-light">+</div>
        )}
      </motion.div>
    ))}
  </>
);

// Service card with glass morphism
const ServiceCard = ({ icon: Icon, title, items, index, accentColor }) => {
  const colorMap = {
    mint: 'from-ohm-mint/20 to-ohm-mint/10 border-ohm-mint/20',
    rose: 'from-ohm-rose/20 to-ohm-rose/10 border-ohm-rose/20',
    lavender: 'from-ohm-lavender/20 to-ohm-lavender/10 border-ohm-lavender/20',
  };

  const colors = ['mint', 'rose', 'lavender'];
  const color = colors[index % 3];
  const colorClass = colorMap[color];

  const accentColors = {
    mint: 'bg-gradient-to-br from-ohm-mint to-ohm-mint/70',
    rose: 'bg-gradient-to-br from-ohm-rose to-ohm-rose/70',
    lavender: 'bg-gradient-to-br from-ohm-lavender to-ohm-lavender/70',
  };

  const dotColors = {
    mint: 'bg-ohm-mint',
    rose: 'bg-ohm-rose',
    lavender: 'bg-ohm-lavender',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card-light group p-8 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`${accentColors[color]} rounded-xl p-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-ohm-deep flex-1">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-ohm-slate">
            <span className={`block w-1.5 h-1.5 rounded-full ${dotColors[color]} mt-2 flex-shrink-0`} />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: Target,
      title: 'HR Strategie & Audit',
      items: [
        'Audit aktuální značky zaměstnavatele',
        'Analýza HR komunikace (interní i externí)',
        'Definice EVP (Employee Value Proposition)',
        'Konkurenční analýza v HR',
        'Strategie employer brandingu',
      ],
    },
    {
      icon: Video,
      title: 'Obsahová produkce',
      items: [
        'Podcast "LIDI, prosím..." - vlastní formát rozhovorů s lídry firem',
        'Video obsah pro sociální sítě',
        'Články a blog posty o firemní kultuře',
        'Fotografie a vizuální obsah',
        'Interní komunikační materiály',
      ],
    },
    {
      icon: Megaphone,
      title: 'HR Marketing & Komunikace',
      items: [
        'Správa kariérních stránek a profilů',
        'Social media strategie zaměřená na HR',
        'Employer branding kampaně (organic)',
        'Interní komunikace a engagement programy',
        'Onboarding komunikace pro nové zaměstnance',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Vzdělávání & Konzultace',
      items: [
        'Workshopy pro HR týmy',
        'Školení manažerů v oblasti komunikace',
        'Konzultace employer brandingu',
        'Přístup do klientské zóny s materiály',
        'Pravidelné reporty a doporučení',
      ],
    },
    {
      icon: BarChart3,
      title: 'Měření & Analytics',
      items: [
        'Tracking dopadů na nábor',
        'Měření employee engagement',
        'Analýza dosahu obsahu',
        'ROI reporting',
        'Gallup metodologie (corporate culture measurement)',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ohm-deep py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-screen">
        {/* Animated blobs */}
        <AnimatedBlob delay={0} />
        <AnimatedBlob delay={0.5} />

        {/* Decorative elements */}
        <DecorativeElements />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center z-10 max-w-3xl px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Naše služby
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-ohm-mint max-w-3xl mx-auto leading-relaxed"
          >
            Komprehenzivní řešení pro organický HR marketing. Od strategie a auditu až po
            produkci obsahu, komunikaci a měření dopadů.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid - First 2 */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {servicesData.slice(0, 2).map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Service - Card 3 with Navy Background */}
      <section className="bg-ohm-navy py-16 md:py-24 relative overflow-hidden">
        <AnimatedBlob delay={0} />
        <DecorativeElements />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <div className="flex items-start gap-4 sm:gap-6 mb-8">
              <div className="bg-gradient-to-br from-ohm-rose to-ohm-rose/70 rounded-xl p-5 flex-shrink-0">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex-1">
                HR Marketing & Komunikace
              </h3>
            </div>
            <ul className="space-y-4">
              {servicesData[2].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/90">
                  <span className="block w-1.5 h-1.5 rounded-full bg-ohm-rose mt-2 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Last 2 */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {servicesData.slice(3, 5).map((service, idx) => (
              <ServiceCard key={idx + 3} {...service} index={idx + 3} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ohm-dark py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ohm-mint via-ohm-rose to-ohm-lavender bg-clip-text text-transparent mb-8"
          >
            Chcete vědět více?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cenik"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                Prohlédněte si ceník
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/kontakt"
                className="btn-outline inline-flex items-center gap-2 px-8 py-4 border-2 border-ohm-mint text-ohm-mint font-bold rounded-xl hover:bg-ohm-mint/10 transition-colors duration-300"
              >
                Kontaktujte nás
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
