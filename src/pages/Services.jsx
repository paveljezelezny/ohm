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

const ServiceCard = ({ icon: Icon, title, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-ohm-cream rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-ohm-gold-light"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-gradient-to-br from-ohm-gold to-ohm-gold-light rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-ohm-dark" />
      </div>
      <h3 className="text-xl font-bold text-ohm-dark flex-1">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-ohm-warm-gray">
          <span className="block w-1.5 h-1.5 rounded-full bg-ohm-gold mt-2 flex-shrink-0" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SectionDark = ({ children, className = '' }) => (
  <section className={`bg-ohm-dark py-16 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const SectionLight = ({ children, className = '' }) => (
  <section className={`bg-ohm-cream py-16 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const SectionNavy = ({ children, className = '' }) => (
  <section className={`bg-ohm-navy py-16 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

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
      <SectionDark className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ohm-gold rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ohm-navy rounded-full filter blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-ohm-cream mb-6"
          >
            Naše služby
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-ohm-gold max-w-3xl mx-auto leading-relaxed"
          >
            Komprehenzivní řešení pro organický HR marketing. Od strategie a auditu až po
            produkci obsahu, komunikaci a měření dopadů.
          </motion.p>
        </motion.div>
      </SectionDark>

      {/* Services Grid */}
      <SectionLight>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {servicesData.slice(0, 2).map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </motion.div>
      </SectionLight>

      {/* Service 3 - Navy Background */}
      <SectionNavy>
        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-ohm-dark/40 to-ohm-dark/20 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-ohm-gold/30 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-lidi-coral to-ohm-gold rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="w-6 h-6 text-ohm-cream" />
              </div>
              <h3 className="text-2xl font-bold text-ohm-cream flex-1">
                HR Marketing & Komunikace
              </h3>
            </div>
            <ul className="space-y-4">
              {servicesData[2].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-ohm-cream/90">
                  <span className="block w-1.5 h-1.5 rounded-full bg-lidi-coral mt-2 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionNavy>

      {/* Services 4-5 */}
      <SectionLight>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {servicesData.slice(3, 5).map((service, idx) => (
            <ServiceCard key={idx + 3} {...service} index={idx} />
          ))}
        </motion.div>
      </SectionLight>

      {/* Bottom CTA */}
      <SectionDark>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ohm-cream mb-8">
            Chcete vědět více?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cenik"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ohm-gold to-ohm-gold-light text-ohm-dark font-bold rounded-lg hover:shadow-lg transition-shadow duration-300"
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
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ohm-gold text-ohm-cream font-bold rounded-lg hover:bg-ohm-gold/10 transition-colors duration-300"
              >
                Kontaktujte nás
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </SectionDark>
    </>
  );
};

export default Services;
