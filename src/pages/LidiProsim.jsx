import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mic,
  Play,
  Clock,
  Building2,
  ExternalLink,
  Users,
  Radio,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LidiProsim = () => {
  const [hoveredEpisode, setHoveredEpisode] = useState(null);

  // Placeholder episodes data
  const episodes = [
    {
      id: 1,
      number: 1,
      guest: 'Jana Nováková',
      company: 'TechStart Prague',
      title: 'Jak budovat firemní kulturu od nuly',
      description:
        'Jana Nováková, CEO TechStart Prague, mluví o vytváření týmu a hodnot, které drží firmu pohromadě.',
      duration: '45 min',
      date: '15. března 2026',
      companyUrl: 'https://techstart-prague.cz/kariery',
    },
    {
      id: 2,
      number: 2,
      guest: 'Petr Dvořák',
      company: 'Global Solutions Ltd',
      title: 'Nábor talentů v konkurenčním prostředí',
      description:
        'Petr Dvořák sdílí strategie, které jeho firmě pomáhají získat nejlepší lidi na trhu.',
      duration: '52 min',
      date: '8. března 2026',
      companyUrl: 'https://global-solutions.cz/jobs',
    },
    {
      id: 3,
      number: 3,
      guest: 'Markéta Svobodová',
      company: 'Creative Studio XYZ',
      title: 'Remote práce: Jak si nechat rádi',
      description:
        'Markéta vypráví, jak její agentura úspěšně funguje v rozprostřeném týmu.',
      duration: '38 min',
      date: '1. března 2026',
      companyUrl: 'https://creativestudio-xyz.cz/nabor',
    },
    {
      id: 4,
      number: 4,
      guest: 'David Kučera',
      company: 'Manufacturing Pro',
      title: 'Jak přežít transformaci v tradičním průmyslu',
      description:
        'David sdílí svůj příběh digitalizace a změny kultury v tradiční manufaktuře.',
      duration: '48 min',
      date: '22. února 2026',
      companyUrl: 'https://manufacturing-pro.cz/kariera',
    },
    {
      id: 5,
      number: 5,
      guest: 'Olga Kovalenko',
      company: 'EdTech Innovations',
      title: 'Školení a rozvoj zaměstnanců - investice budoucnosti',
      description:
        'Olga vysvětluje, proč je vzdělávání klíčem k dlouhodobému úspěchu firmy.',
      duration: '41 min',
      date: '15. února 2026',
      companyUrl: 'https://edtech-innovations.cz/jobs',
    },
    {
      id: 6,
      number: 6,
      guest: 'Roman Horák',
      company: 'Startup Accelerator Hub',
      title: 'Startup kultura: Jak se motivují malé týmy',
      description:
        'Roman mluví o výzvách a příležitostech v prostředí rychle rostoucích startupů.',
      duration: '44 min',
      date: '8. února 2026',
      companyUrl: 'https://startup-hub.cz/apply',
    },
  ];

  // Placeholder companies featured
  const companiesFeatured = [
    {
      id: 1,
      name: 'TechStart Prague',
      industry: 'Technologie',
      episodeLink: '#',
      careersLink: 'https://techstart-prague.cz/kariery',
    },
    {
      id: 2,
      name: 'Global Solutions',
      industry: 'Consulting',
      episodeLink: '#',
      careersLink: 'https://global-solutions.cz/jobs',
    },
    {
      id: 3,
      name: 'Creative Studio XYZ',
      industry: 'Marketing & Design',
      episodeLink: '#',
      careersLink: 'https://creativestudio-xyz.cz/nabor',
    },
    {
      id: 4,
      name: 'Manufacturing Pro',
      industry: 'Průmysl',
      episodeLink: '#',
      careersLink: 'https://manufacturing-pro.cz/kariera',
    },
    {
      id: 5,
      name: 'EdTech Innovations',
      industry: 'Vzdělávání',
      episodeLink: '#',
      careersLink: 'https://edtech-innovations.cz/jobs',
    },
    {
      id: 6,
      name: 'Startup Accelerator Hub',
      industry: 'Startup Ecosystem',
      episodeLink: '#',
      careersLink: 'https://startup-hub.cz/apply',
    },
  ];

  // How it works steps
  const steps = [
    {
      number: 1,
      title: 'Ozvete se nám',
      description: 'Domluvíme si úvodní hovor a zjistíme, co vás zajímá.',
      icon: '💬',
    },
    {
      number: 2,
      title: 'Briefing',
      description: 'Připravíme témata a otázky, které budou relevantní pro vaši firmu.',
      icon: '📋',
    },
    {
      number: 3,
      title: 'Natáčení',
      description: 'Profesionální studio Pracovny v Praze připraveno na natáčení.',
      icon: '🎙️',
    },
    {
      number: 4,
      title: 'Postprodukce',
      description: 'Střih, zvuk, grafika - vše v nejlepší kvalitě.',
      icon: '✨',
    },
    {
      number: 5,
      title: 'Distribuce',
      description: 'Dostupné na všech platformách a vašich kanálech.',
      icon: '📢',
    },
  ];

  const platforms = [
    { name: 'Spotify', url: '#' },
    { name: 'Apple Podcasts', url: '#' },
    { name: 'YouTube', url: '#' },
    { name: 'Google Podcasts', url: '#' },
  ];

  // Animation variants
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-lidi-warm min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-lidi-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-lidi-coral/5 rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto px-4 py-20 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            {/* OHM Project Tag */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/"
                className="text-sm font-semibold text-lidi-coral hover:text-lidi-rose transition-colors flex items-center gap-2"
              >
                <Radio className="w-4 h-4" />
                Projekt OHM - Organic HR Marketing
              </Link>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-lidi-coral mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LIDI, prosím...
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Podcast, kde se lídři firem otevřeně baví o tom, jak to u nich funguje.
            </motion.p>

            {/* Description */}
            <motion.div
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-4">
                Zveme si manažery, šéfy a majitele firem. Mluvíme o firemní kultuře, hodnotách,
                náborech i o tom, co dělá firmu skvělým místem k práci.
              </p>
              <p>
                Každý rozhovor je příležitost nahlédnout pod pokličku úspěšných firem — a zároveň je
                zviditelnit jako atraktivního zaměstnavatele.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="btn-lidi flex items-center gap-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Poslechnout epizody
              </button>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-lidi-coral text-lidi-coral font-semibold rounded-full hover:bg-lidi-coral hover:text-white transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Chci být hostem
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Microphone Visual */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Mic className="w-96 h-96 text-lidi-coral" strokeWidth={0.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* Latest Episodes Section */}
      <section className="bg-white py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div className="mb-16 text-center" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nejnovější epizody</h2>
            <p className="text-xl text-gray-600">Poslouchejte příběhy lídrů, kteří sdílí své zkušenosti</p>
          </motion.div>

          {/* Episodes Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                className="bg-white border-2 border-lidi-warm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                variants={itemVariants}
                onMouseEnter={() => setHoveredEpisode(episode.id)}
                onMouseLeave={() => setHoveredEpisode(null)}
              >
                {/* Card Header with Episode Number */}
                <div className="bg-gradient-to-r from-lidi-coral to-lidi-rose p-6 relative">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">#{episode.number}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-semibold mb-2">EPIZODA</p>
                      <h3 className="text-white text-lg font-bold mb-2">{episode.guest}</h3>
                      <p className="text-white/90 font-semibold">{episode.company}</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{episode.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{episode.description}</p>

                  {/* Duration and Date */}
                  <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-lidi-warm">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4 text-lidi-coral" />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span>{episode.date}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-lidi-coral text-white rounded-lg font-semibold hover:bg-lidi-rose transition-colors duration-300 group">
                      <Play className="w-4 h-4" />
                      Poslechnout
                    </button>
                    <a
                      href={episode.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 border border-lidi-coral text-lidi-coral rounded-lg font-semibold hover:bg-lidi-warm transition-colors duration-300"
                    >
                      <Building2 className="w-4 h-4" />
                      Kariéra
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Episodes Button */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <button className="btn-lidi flex items-center gap-2 mx-auto">
              Všechny epizody
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* For Companies Section */}
      <section className="bg-lidi-sand py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Pro firmy: Vaše firma v hlavní roli</h2>

            <p className="text-xl text-gray-700 mb-10">
              Podcast LIDI, prosím... je ideální platformou pro prezentaci vaší firmy jako atraktivního zaměstnavatele.
              Věřte autentičnosti — umožní vám mluvit o tom, co vás dělá výjimečnými.
            </p>

            {/* Value Propositions */}
            <motion.div className="space-y-6 mb-12" variants={containerVariants}>
              {[
                {
                  title: 'Profesionálně produkovaný rozhovor',
                  description: 'Vysoká kvalita zvuku, videa a střihu s vaším lídrem v hlavní roli.',
                },
                {
                  title: 'Distribuce na všechny platformy',
                  description:
                    'Spotify, Apple Podcasts, YouTube a sociální sítě — vaš obsah bude dostupný všude.',
                },
                {
                  title: 'Videosestřihy pro sociální sítě',
                  description:
                    'Krátké formáty připravené na LinkedIn, Instagram, TikTok a další kanály.',
                },
                {
                  title: 'Přímý odkaz na kariérní stránky',
                  description:
                    'V každé epizodě je odkaz na vaše kariérní stránky a nabídky pracovních míst.',
                },
                {
                  title: 'Zvýšení povědomí o vaší firmě',
                  description: 'Buďte vidět jako zaměstnavatel volby v průmyslu a mimo něj.',
                },
                {
                  title: 'Autentický obsah, který nelze koupit v reklamě',
                  description:
                    'Opravdový rozhovor s vaším lídrem — jednoznačně více věřemný než standartní reklama.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-lidi-coral text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div className="text-center" variants={itemVariants}>
              <a
                href="/kontakt"
                className="btn-lidi inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Chci být hostem
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-gray-600 mt-4 text-sm">Ozvěte se nám a domluvíme si detaily</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Jak to probíhá</h2>
            <p className="text-xl text-gray-600">Od prvního kontaktu až po publikaci</p>
          </motion.div>

          {/* Steps */}
          <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 mb-16" variants={containerVariants}>
            {steps.map((step, index) => (
              <motion.div key={step.number} className="relative" variants={itemVariants}>
                {/* Card */}
                <div className="bg-gradient-to-br from-lidi-warm to-lidi-sand p-8 rounded-2xl text-center h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  <div className="mt-4 text-lidi-coral font-bold text-lg">Krok {step.number}</div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-lidi-coral" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline text for mobile */}
          <motion.div className="md:hidden text-center text-gray-600 text-sm" variants={itemVariants}>
            <p>Následující kroky za sebou — vše řídíme my, vy se jen věnujete natáčení!</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Companies Featured Section */}
      <section className="bg-gray-50 py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Firmy, které už mluvily</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Každá firma, která se zúčastní, získá prostor mluvit o tom, co ji dělá výjimečnou — a přímý
              odkaz na své kariérní stránky.
            </p>
          </motion.div>

          {/* Companies Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
            {companiesFeatured.map((company) => (
              <motion.div
                key={company.id}
                className="bg-white p-8 rounded-2xl border-2 border-lidi-warm hover:border-lidi-coral transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                variants={itemVariants}
              >
                {/* Company Logo Placeholder */}
                <div className="w-full h-24 bg-gradient-to-br from-lidi-coral/10 to-lidi-rose/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-lidi-coral/20 group-hover:to-lidi-rose/20 transition-colors duration-300">
                  <Building2 className="w-12 h-12 text-lidi-coral/50 group-hover:text-lidi-coral transition-colors duration-300" />
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h4>
                <p className="text-lidi-coral font-semibold text-sm mb-6">{company.industry}</p>

                {/* Links */}
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 py-2 bg-lidi-coral/10 text-lidi-coral rounded-lg font-semibold hover:bg-lidi-coral hover:text-white transition-all duration-300 group/btn">
                    <Radio className="w-4 h-4" />
                    Slyšet epizodu
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <a
                    href={company.careersLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 border border-lidi-coral/30 text-lidi-coral rounded-lg font-semibold hover:border-lidi-coral hover:bg-lidi-warm transition-all duration-300"
                  >
                    <Users className="w-4 h-4" />
                    Kariéra
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Listen On Section */}
      <section className="bg-gradient-to-r from-lidi-coral to-lidi-rose py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Poslouchejte na</h2>
            <p className="text-white/80 text-xl mb-12">
              Podcast je dostupný na všech oblíbených platformách
            </p>
          </motion.div>

          {/* Platform Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                className="flex items-center gap-2 px-8 py-4 bg-white text-lidi-coral font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
              >
                <Headphones className="w-5 h-5" />
                {platform.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div className="text-center mt-8" variants={itemVariants}>
            <p className="text-white/60 text-sm">🎧 Více platforem připravujeme</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-lidi-warm py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="max-w-3xl mx-auto text-center" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Chcete svou firmu v pořadu LIDI, prosím...?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Dejte nám vědět a připravíme vám epizodu na míru. Rádi slyšíme vaše příběhy.
            </p>

            <a
              href="/kontakt"
              className="btn-lidi inline-flex items-center gap-2 text-lg px-10 py-4 mx-auto group"
            >
              Ozvěte se nám
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Alternative contact info */}
            <p className="text-gray-600 mt-8 text-sm">
              Nebo nám napište na <span className="font-semibold text-lidi-coral">podcasty@ohm.cz</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Newsletter/Follow Section */}
      <section className="bg-white py-16 border-t-2 border-lidi-warm">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-gray-600 mb-4">
              <span className="inline-block mb-2">Chcete být informováni o nových epizodách?</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Vaš e-mail"
                className="flex-1 px-4 py-3 border-2 border-lidi-warm rounded-full focus:outline-none focus:border-lidi-coral transition-colors duration-300 text-gray-800 placeholder-gray-500"
              />
              <button className="btn-lidi px-8 py-3">Přihlásit</button>
            </div>
            <p className="text-gray-500 text-xs mt-3">Bez spamu, jen nové epizody a zajímavé články.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default LidiProsim;
