import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const pricingTiers = [
    {
      name: 'START',
      subtitle: 'Pro firmy, které začínají s employer brandingem',
      price: 'od 45 000 Kč / měsíc',
      badge: null,
      featured: false,
      features: [
        'Audit značky zaměstnavatele',
        'EVP definice',
        'Obsahová strategie',
        '2 podcastové epizody / čtvrtletí',
        'Správa 1 sociální sítě',
        'Měsíční reporting',
        'Přístup do klientské zóny',
      ],
    },
    {
      name: 'GROW',
      subtitle: 'Pro firmy s ambicí růst a přitahovat talenty',
      price: 'od 85 000 Kč / měsíc',
      badge: 'Nejoblíbenější',
      featured: true,
      features: [
        'Vše z balíčku START',
        '4 podcastové epizody / čtvrtletí',
        'Video obsah pro sociální sítě',
        'Správa 2 sociálních sítí',
        'Interní komunikační materiály',
        'Čtvrtletní workshop pro HR tým',
        'Kariérní stránky optimalizace',
        'Prioritní podpora',
      ],
    },
    {
      name: 'SCALE',
      subtitle: 'Pro enterprise firmy s komplexními HR potřebami',
      price: 'od 150 000 Kč / měsíc',
      badge: null,
      featured: false,
      features: [
        'Vše z balíčku GROW',
        'Neomezený podcastový obsah',
        'Komplexní video produkce',
        'Správa všech sociálních sítí',
        'Employee engagement programy',
        'Manažerská školení',
        'Dedicovaný account manager',
        'Gallup měření firemní kultury',
        'Strategické HR konzultace',
      ],
    },
  ];

  const oneTimeServices = [
    {
      name: 'HR Audit',
      price: 'od 80 000 Kč',
      description: 'Kompletní audit vaší značky zaměstnavatele',
    },
    {
      name: 'Workshop',
      price: 'od 25 000 Kč',
      description: 'Půldenní workshop pro HR tým nebo management',
    },
    {
      name: 'Podcast epizoda',
      price: 'od 15 000 Kč',
      description: 'Jedna profesionálně produkovaná epizoda',
    },
    {
      name: 'EVP projekt',
      price: 'od 120 000 Kč',
      description: 'Definice Employee Value Proposition',
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: 'Jaká je minimální délka spolupráce?',
      answer:
        'Doporučujeme minimálně 6 měsíců. Organický marketing je maraton, ne sprint. První výsledky se dostavují typicky po 3-4 měsících.',
    },
    {
      id: 2,
      question: 'Pro jak velké firmy jsou služby určeny?',
      answer:
        'Primárně spolupracujeme s firmami od 100 zaměstnanců výše. Naše služby jsou navrženy pro firmy, které berou employer branding vážně a jsou připraveny investovat do dlouhodobé strategie.',
    },
    {
      id: 3,
      question: 'Můžeme si vybrat jen některé služby?',
      answer:
        'Ano, balíčky jsou orientační. Vždy sestavujeme řešení na míru vašim potřebám a rozpočtu.',
    },
    {
      id: 4,
      question: 'Jak měříte úspěšnost?',
      answer:
        'Sledujeme mix metrik: kvalitu a kvantitu kandidátů, engagement zaměstnanců, dosah obsahu, sentiment značky zaměstnavatele a další KPIs definované společně.',
    },
  ];

  return (
    <div className="bg-ohm-dark text-white">
      {/* Hero Section */}
      <section className="section-dark px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Investice do vaší značky zaměstnavatele
          </h1>
          <p className="text-lg sm:text-xl text-ohm-warm-gray mb-8 max-w-2xl mx-auto">
            Každý balíček navrhujeme na míru. Zde jsou naše orientační rámce.
          </p>
        </motion.div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="section-light px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-2xl transition-all duration-300 ${
                  tier.featured
                    ? 'md:scale-105 glass-card-light border-2 border-ohm-gold shadow-2xl shadow-ohm-gold/20'
                    : 'glass-card-light'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ohm-gold text-ohm-dark px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 sm:p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-ohm-dark mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-ohm-slate text-sm sm:text-base mb-4">
                      {tier.subtitle}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-ohm-gold">
                        {tier.price.split('/')[0].trim()}
                      </span>
                      <span className="text-ohm-slate">/ měsíc</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-ohm-gold flex-shrink-0 mt-0.5" />
                        <span className="text-ohm-dark">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/kontakt"
                      className="btn-primary w-full text-center block"
                    >
                      Nezávazná konzultace
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* One-Time Services Section */}
      <section className="section-navy px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Jednorázové služby
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {oneTimeServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 text-center group hover:border-ohm-gold/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-ohm-gold text-2xl font-bold mb-4">
                  {service.price}
                </p>
                <p className="text-ohm-warm-gray text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center text-ohm-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Časté otázky
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass-card-light overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(
                      expandedFaq === item.id ? null : item.id
                    )
                  }
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/60 transition-colors duration-200 text-left"
                >
                  <span className="text-lg font-semibold text-ohm-dark">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: expandedFaq === item.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedFaq === item.id ? (
                      <ChevronUp className="w-5 h-5 text-ohm-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-ohm-gold flex-shrink-0" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFaq === item.id ? 'auto' : 0,
                    opacity: expandedFaq === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 py-6 border-t border-ohm-gold/10 bg-white/40 text-ohm-dark">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Připraveni investovat do svých lidí?
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/kontakt" className="btn-primary text-lg">
              Pojďme si promluvit
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
