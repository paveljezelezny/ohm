import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mic,
  Target,
  Users,
  BarChart3,
  Sparkles,
  Leaf,
  Video,
  Megaphone,
  ChevronRight,
  Building2,
  Heart,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

// Animated blob variants
const blobMint = {
  animate: {
    borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
    x: [0, 30, 0],
    y: [0, -20, 0],
    scale: [1, 1.08, 1],
  },
  transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
};

const blobRose = {
  animate: {
    borderRadius: ['30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%'],
    x: [0, -25, 0],
    y: [0, 25, 0],
    scale: [1, 1.1, 1],
  },
  transition: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
};

const blobLavender = {
  animate: {
    borderRadius: ['70% 30% 40% 60% / 30% 70% 60% 40%', '40% 60% 30% 70% / 70% 30% 40% 60%', '70% 30% 40% 60% / 30% 70% 60% 40%'],
    x: [0, 20, 0],
    y: [0, -15, 0],
    scale: [1, 1.07, 1],
  },
  transition: { duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
};

export default function Home() {
  const pillars = [
    {
      icon: Target,
      title: 'HR Strategie',
      text: 'Audit vaší značky zaměstnavatele, definice EVP a employer branding strategie postavená na datech a 15+ letech zkušeností.',
    },
    {
      icon: Video,
      title: 'Profesionální obsah',
      text: 'Podcasty, video, články — autentický obsah, který ukazuje vaši firemní kulturu zevnitř a přitahuje správné lidi.',
    },
    {
      icon: Megaphone,
      title: 'Organický marketing',
      text: 'Žádné umělé triky. Budujeme vaši reputaci zaměstnavatele přirozeně — skrze to, jak se o vás mluví a co ukazujete světu.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Audit & Analýza', desc: 'Zmapujeme vaši aktuální pozici na trhu práce, firemní kulturu a komunikaci.' },
    { num: '02', title: 'Strategie', desc: 'Navrhneme plán — EVP, obsahovou strategii, komunikační kanály, klíčové metriky.' },
    { num: '03', title: 'Produkce & Realizace', desc: 'Tvoříme obsah, spouštíme kampaně, natáčíme podcasty, budujeme vaši značku.' },
    { num: '04', title: 'Měření & Optimalizace', desc: 'Sledujeme výsledky, reportujeme a průběžně optimalizujeme celý systém.' },
  ];

  const reasons = [
    { icon: Award, title: '15+ let v HR', text: 'Martin Kaleta a Human Capital přinášejí hlubokou expertizu v HR strategii a recruitmentu.' },
    { icon: Mic, title: 'Profi produkce', text: 'Pavel Železný a Podcasters vytvářejí obsah, který firmy opravdu chtějí sdílet.' },
    { icon: Heart, title: 'Organický přístup', text: 'Neděláme jednorázové kampaně. Budujeme systém, který funguje dlouhodobě.' },
    { icon: TrendingUp, title: 'Měřitelné výsledky', text: 'Každá aktivita má jasný cíl a měřitelný dopad na váš nábor i engagement.' },
    { icon: Users, title: 'Partnerský přístup', text: 'Jsme prodloužená ruka vašeho HR. Pracujeme s vámi, ne pro vás.' },
    { icon: Zap, title: 'Unikátní kombinace', text: 'HR strategie + profesionální obsahová produkce. Tohle na českém trhu nikdo jiný nedělá.' },
  ];

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ohm-deep">
        {/* Animated fluid blobs background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Mint blob - top left */}
          <motion.div
            variants={blobMint}
            animate="animate"
            className="absolute -top-32 -left-32 w-[400px] h-[350px] blur-2xl opacity-70"
            style={{
              background: 'radial-gradient(ellipse at 30% 30%, #7AEDC6 0%, #7AEDC680 40%, transparent 75%)',
            }}
          />

          {/* Rose blob - center right */}
          <motion.div
            variants={blobRose}
            animate="animate"
            className="absolute top-1/2 -right-20 w-[380px] h-[320px] blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 40% 50%, #E8A0BF 0%, #E8A0BF70 45%, transparent 80%)',
            }}
          />

          {/* Lavender blob - bottom left */}
          <motion.div
            variants={blobLavender}
            animate="animate"
            className="absolute -bottom-20 -left-40 w-[420px] h-[360px] blur-2xl opacity-65"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, #9B7AEA 0%, #9B7AEA75 45%, transparent 75%)',
            }}
          />

          {/* Decorative geometric elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-24 left-1/4 w-32 h-32 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/5 rounded-full"
          />

          {/* Small + marks */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-32 right-1/4 text-white/20 text-2xl font-light"
          >
            +
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1/3 left-1/3 text-white/15 text-2xl font-light"
          >
            ×
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32"
        >
          {/* Tagline chip */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-ohm-mint/15 border border-ohm-mint/30 rounded-full mb-8">
            <Leaf className="w-4 h-4 text-ohm-mint" />
            <span className="text-sm font-medium text-ohm-mint">Organic HR Marketing</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Budujte značku
            <br />
            zaměstnavatele,
            <br />
            <span className="gradient-text">která přitahuje.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-ohm-slate max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Pomáháme firmám vybudovat autentický employer brand organicky — skrze strategii, profesionální obsah a skutečné příběhy vašich lidí.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/kontakt" className="btn-primary text-base">
                Nezávazná konzultace
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/sluzby" className="btn-outline text-base">
                Jak to děláme
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={fadeInUp}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 mx-auto border-2 border-ohm-mint/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-ohm-mint rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== KLIENTI / TRUST BAR ===================== */}
      <section className="bg-ohm-dark py-12 border-y border-ohm-violet/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-ohm-slate uppercase tracking-widest mb-8"
          >
            Důvěřují nám
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {['Firma Alpha', 'TechCorp', 'InnoGroup', 'Digital Solutions', 'HR Pro'].map((name) => (
              <motion.div
                key={name}
                variants={fadeInUp}
                className="text-ohm-slate font-semibold text-lg tracking-wide hover:text-ohm-mint transition-colors duration-300 cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== 3 PILÍŘE ===================== */}
      <section className="bg-ohm-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-ohm-deep mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Tři pilíře OHM
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-ohm-slate max-w-2xl mx-auto">
              Spojujeme hlubokou HR expertizu, profesionální produkci obsahu a organický marketing do jednoho uceleného systému.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((p, i) => {
              const gradients = [
                'from-ohm-mint to-ohm-lavender',
                'from-ohm-rose to-ohm-peach',
                'from-ohm-lavender to-ohm-mint',
              ];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group glass-card-light p-8 hover:border-ohm-mint/40 transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradients[i]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon className="w-7 h-7 text-ohm-deep" />
                  </div>
                  <h3 className="text-xl font-bold text-ohm-deep mb-3">{p.title}</h3>
                  <p className="text-ohm-slate leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== PROCES ===================== */}
      <section className="relative bg-ohm-dark py-20 md:py-28 overflow-hidden">
        {/* Background blob decoration */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-96 h-96 blur-2xl opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #7AEDC6 0%, #7AEDC660 50%, transparent 80%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Jak spolupráce funguje
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-ohm-slate max-w-2xl mx-auto">
              Od prvního setkání po měřitelné výsledky — transparentní proces, který funguje.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="glass-card p-8 h-full hover:border-ohm-mint/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-ohm-mint/30 group-hover:text-ohm-mint/60 transition-colors mb-4">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-ohm-slate text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-ohm-mint/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== LIDI PROSÍM PREVIEW ===================== */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-rose/10 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative rose-tinted blobs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-0 w-72 h-72 blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #E8A0BF 0%, #E8A0BF60 50%, transparent 80%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ohm-rose/15 border border-ohm-rose/30 rounded-full mb-6">
                <Mic className="w-4 h-4 text-ohm-rose" />
                <span className="text-sm font-medium text-ohm-rose">Podcast</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ohm-deep mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                LIDI, prosím...
              </h2>
              <p className="text-lg text-ohm-slate mb-6 leading-relaxed">
                Náš vlastní formát pořadu, ve kterém si zveme lídry, manažery a majitele firem. Mluvíme o tom, jak to u nich funguje, jaká je jejich kultura a co dělá jejich firmu výjimečnou.
              </p>
              <p className="text-ohm-slate mb-8 leading-relaxed">
                Každá epizoda je nejen obsah pro vaše sítě, ale i autentická vizitka vaší firmy jako zaměstnavatele — s přímými odkazy na vaše kariérní stránky.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/lidi-prosim" className="btn-lidi">
                  Prozkoumat epizody
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div variants={fadeInUp}>
              <div className="glass-card-light p-8 border border-ohm-rose/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ohm-rose to-ohm-peach rounded-xl flex items-center justify-center">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ohm-deep text-lg">LIDI, prosím...</h3>
                    <p className="text-ohm-slate text-sm">Podcast by OHM</p>
                  </div>
                </div>

                {/* Episode previews */}
                {[
                  { guest: 'Jan Novák', company: 'TechCorp', topic: 'Jak jsme vybudovali remote kulturu pro 400 lidí' },
                  { guest: 'Marie Dvořáková', company: 'InnoGroup', topic: 'Proč u nás lidé zůstávají 7+ let' },
                  { guest: 'Petr Svoboda', company: 'Digital Solutions', topic: 'Z 50 na 200 zaměstnanců za 2 roky' },
                ].map((ep, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-ohm-rose/10 transition-colors mb-2 last:mb-0"
                  >
                    <div className="w-10 h-10 bg-ohm-rose/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-ohm-rose font-bold text-sm">E{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ohm-deep text-sm truncate">{ep.topic}</p>
                      <p className="text-ohm-slate text-xs">{ep.guest} · {ep.company}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-ohm-slate flex-shrink-0" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PROČ OHM ===================== */}
      <section className="bg-ohm-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Proč právě OHM
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-ohm-slate max-w-2xl mx-auto">
              Jedinečná kombinace HR strategie a profesionální produkce obsahu na českém trhu.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((r, i) => {
              const iconColors = ['bg-ohm-mint/15', 'bg-ohm-rose/15', 'bg-ohm-lavender/15'];
              const iconTextColors = ['text-ohm-mint', 'text-ohm-rose', 'text-ohm-lavender'];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group glass-card p-6 hover:border-ohm-mint/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${iconColors[i % 3]} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity`}>
                      <r.icon className={`w-6 h-6 ${iconTextColors[i % 3]}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{r.title}</h3>
                      <p className="text-ohm-slate text-sm leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section className="bg-gradient-to-r from-ohm-mint to-ohm-lavender py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: '15+', label: 'Let v HR' },
              { num: '5+', label: 'Let v produkci obsahu' },
              { num: '100+', label: 'Realizovaných projektů' },
              { num: '50+', label: 'Podcastových epizod' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-3xl sm:text-4xl font-bold text-ohm-deep mb-1">{s.num}</div>
                <div className="text-ohm-deep/70 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FOUNDERS STRIP ===================== */}
      <section className="relative bg-ohm-dark py-20 md:py-28 overflow-hidden">
        {/* Decorative blobs */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-12 w-80 h-80 blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #7AEDC6 0%, #7AEDC660 50%, transparent 80%)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-0 right-8 w-72 h-72 blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #E8A0BF 0%, #E8A0BF60 50%, transparent 80%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Za OHM stojí
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Martin */}
            <motion.div variants={fadeInUp} className="glass-card p-8 hover:border-ohm-mint/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ohm-mint/30 to-ohm-mint/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-ohm-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Martin Kaleta</h3>
                  <p className="text-ohm-mint text-sm font-medium">Human Capital</p>
                </div>
              </div>
              <p className="text-ohm-slate text-sm leading-relaxed mb-4">
                15+ let v HR. Specialista na employer branding, recruitment a firemní kulturu. Gallup certifikovaný konzultant.
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/martin-kaleta-human-capital/" target="_blank" rel="noopener noreferrer" className="text-sm text-ohm-mint hover:text-ohm-mint-light transition-colors font-medium">
                  LinkedIn →
                </a>
                <a href="https://humancapital.cz" target="_blank" rel="noopener noreferrer" className="text-sm text-ohm-rose hover:text-ohm-rose-light transition-colors font-medium">
                  Human Capital →
                </a>
              </div>
            </motion.div>

            {/* Pavel */}
            <motion.div variants={fadeInUp} className="glass-card p-8 hover:border-ohm-rose/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ohm-rose/30 to-ohm-rose/10 rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-ohm-rose" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pavel Železný</h3>
                  <p className="text-ohm-rose text-sm font-medium">Pracovna / Podcasters</p>
                </div>
              </div>
              <p className="text-ohm-slate text-sm leading-relaxed mb-4">
                5+ let v produkci profesionálního obsahu pro firmy. Zakladatel Pracovny a Podcasters — studia pro firemní podcasty.
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/pavel-zelezny/" target="_blank" rel="noopener noreferrer" className="text-sm text-ohm-mint hover:text-ohm-mint-light transition-colors font-medium">
                  LinkedIn →
                </a>
                <a href="https://pracovna.cz" target="_blank" rel="noopener noreferrer" className="text-sm text-ohm-rose hover:text-ohm-rose-light transition-colors font-medium">
                  Pracovna →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative bg-ohm-deep py-20 md:py-28 overflow-hidden">
        {/* Centered lavender blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse, #9B7AEA 0%, #9B7AEA60 50%, transparent 75%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Připraveni budovat značku,
              <br />
              která přitahuje ty správné lidi?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-ohm-slate mb-10 max-w-2xl mx-auto">
              Začněme nezávaznou konzultací. Povíme si o vašich výzvách a navrhneme řešení na míru.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/kontakt" className="btn-primary text-lg">
                  Pojďme si promluvit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/cenik" className="btn-outline text-lg">
                  Zobrazit ceník
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
