import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
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
const AnimatedBlob = ({ delay = 0 }) => {
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
      className="absolute w-80 h-80 opacity-40 filter blur-3xl"
    />
  );
};

// Decorative elements
const DecorativeElements = () => (
  <>
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

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const pricingTiers = [
    {
      name: 'START',
      subtitle: 'Pro firmy, které začínají s employer brandingem',
      price: '45 000',
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
      price: '85 000',
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
      price: '150 000',
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
      price: '80 000',
      description: 'Kompletní audit vaší značky zaměstnavatele',
    },
    {
      name: 'Workshop',
      price: '25 000',
      description: 'Půldenní workshop pro HR tým nebo management',
    },
    {
      name: 'Podcast epizoda',
      price: '15 000',
      description: 'Jedna profesionálně produkovaná epizoda',
    },
    {
      name: 'EVP projekt',
      price: '120 000',
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
    <>
      {/* Hero Section */}
      <section className="bg-ohm-deep py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-screen">
        <AnimatedBlob delay={0} />
        <AnimatedBlob delay={0.5} />
        <DecorativeElements />

        <motion.div
          className="max-w-4xl mx-auto text-center z-10 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Investice do vaší značky zaměstnavatele
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Každý balíček navrhujeme na míru. Zde jsou naše orientační rámce.
          </motion.p>
        </motion.div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative rounded-2xl transition-all duration-300 ${
                  tier.featured
                    ? 'md:scale-105'
                    : ''
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-ohm-mint to-ohm-lavender text-ohm-deep px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className={`glass-card-light rounded-2xl p-8 sm:p-10 h-full flex flex-col border transition-all duration-300 ${
                  tier.featured
                    ? 'border-2 border-ohm-mint shadow-2xl shadow-ohm-mint/20'
                    : 'border border-white/10'
                } backdrop-blur-md`}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-ohm-deep mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-ohm-slate text-sm sm:text-base mb-6">
                      {tier.subtitle}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ohm-mint to-ohm-lavender bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      <span className="text-ohm-slate text-lg">Kč / měsíc</span>
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
                        <Check className="w-5 h-5 text-ohm-mint flex-shrink-0 mt-0.5" />
                        <span className="text-ohm-deep text-sm">{feature}</span>
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
                      className="btn-primary w-full text-center block font-bold rounded-xl py-3"
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
      <section className="bg-ohm-navy py-20 sm:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <AnimatedBlob delay={0} />
        <DecorativeElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Jednorázové služby
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {oneTimeServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-8 text-center group hover:border-white/20 transition-colors duration-300 border border-white/10 backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{service.name}</h3>
                <p className="bg-gradient-to-r from-ohm-mint to-ohm-rose bg-clip-text text-transparent text-3xl font-bold mb-4">
                  {service.price} Kč
                </p>
                <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center text-ohm-deep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Časté otázky
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {faqItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="glass-card-light rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(
                      expandedFaq === item.id ? null : item.id
                    )
                  }
                  className={`w-full px-8 py-6 flex items-center justify-between hover:bg-white/60 transition-colors duration-200 text-left ${
                    expandedFaq === item.id ? 'border-b border-ohm-mint/10' : ''
                  }`}
                >
                  <span className="text-lg font-semibold text-ohm-deep">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: expandedFaq === item.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedFaq === item.id ? (
                      <ChevronUp className="w-5 h-5 text-ohm-lavender flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-ohm-lavender flex-shrink-0" />
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
                  <div className="px-8 py-6 border-t border-ohm-mint/10 bg-white/40 text-ohm-deep leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ohm-deep py-16 sm:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <AnimatedBlob delay={0} />
        <DecorativeElements />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Připraveni investovat do svých lidí?
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/kontakt" className="btn-primary text-lg font-bold rounded-xl px-8 py-4 inline-block">
              Pojďme si promluvit
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
