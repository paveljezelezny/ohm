import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  Target,
  Users,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

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

// Team member card
const TeamMember = ({ name, role, company, expertise, description, linkedIn, companySite, isSecond }) => {
  const accentColor = isSecond ? 'ohm-rose' : 'ohm-mint';
  const accentGradient = isSecond
    ? 'from-ohm-rose to-ohm-rose/70'
    : 'from-ohm-mint to-ohm-mint/70';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: isSecond ? 0.2 : 0 }}
      className="group"
    >
      <div className="glass-card overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:shadow-lg">
        {/* Image placeholder */}
        <div className={`h-64 sm:h-80 bg-gradient-to-br ${accentGradient.replace('ohm-mint', accentColor).replace('ohm-rose', accentColor)} opacity-20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
          <Sparkles className={`w-24 h-24 text-${accentColor}/40`} />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className={`text-${accentColor} font-semibold mb-6`}>{role}</p>

          <div className="glass-card-light rounded-xl p-4 mb-6 border border-white/10 backdrop-blur-sm">
            <p className="text-sm text-white mb-3">
              <span className={`text-${accentColor} font-semibold`}>Společnost:</span> {company}
            </p>
            <p className="text-sm text-white/90 leading-relaxed mb-4">{description}</p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className={`inline-block bg-${accentColor}/20 text-${accentColor} text-xs font-medium px-3 py-1 rounded-full border border-${accentColor}/30`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 bg-${accentColor}/20 text-${accentColor} text-sm font-medium rounded-lg hover:bg-${accentColor}/30 transition-colors duration-300 border border-${accentColor}/30`}
            >
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={companySite}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 bg-${accentColor}/20 text-${accentColor} text-sm font-medium rounded-lg hover:bg-${accentColor}/30 transition-colors duration-300 border border-${accentColor}/30`}
            >
              {company}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Partner card
const PartnerCard = ({ name, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card-light group rounded-2xl p-6 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:shadow-lg"
  >
    <h3 className="text-xl font-bold text-ohm-deep mb-3 group-hover:text-ohm-navy transition-colors">
      {name}
    </h3>
    <p className="text-ohm-slate mb-4 text-sm leading-relaxed">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-ohm-mint font-semibold hover:text-ohm-mint/80 transition-colors"
    >
      Navštívit web
      <ExternalLink className="w-4 h-4" />
    </a>
  </motion.div>
);

// Value card
const ValueCard = ({ icon: Icon, title, description }) => {
  const colors = ['mint', 'rose', 'lavender', 'peach'];
  const color = colors[Math.random() * colors.length >> 0];
  const colorClass = `ohm-${color}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card group rounded-2xl p-6 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`bg-gradient-to-br from-${colorClass} to-${colorClass}/70 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-${colorClass} transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const team = [
    {
      name: 'Martin Kaleta',
      role: 'Co-founder & HR Strategy',
      company: 'Human Capital',
      description:
        'Martin přináší do OHM hluboké znalosti HR trhu, strategické myšlení a síť kontaktů budovanou přes 15 let v oboru. Specialista na employer branding, EVP a kulturní transformace.',
      expertise: [
        'HR Strategie',
        'Recruitment',
        'Corporate Culture',
        'Gallup',
        'EVP',
        'Assessment',
      ],
      linkedIn: 'https://www.linkedin.com/in/martin-kaleta-human-capital/',
      companySite: 'https://humancapital.cz',
    },
    {
      name: 'Pavel Železný',
      role: 'Co-founder & Content & Digital',
      company: 'Pracovna / Podcasters',
      description:
        'Pavel přináší více než 5 let zkušeností s tvorbou profesionálního obsahu pro firmy. Provozuje Pracovnu - kreativní hub v Praze a Podcasters - studio pro firemní podcasty.',
      expertise: [
        'Podcasty',
        'Video Produkce',
        'Digitální Marketing',
        'Eventy',
        'Business Komunita',
      ],
      linkedIn: 'https://www.linkedin.com/in/pavel-zelezny/',
      companySite: 'https://pracovna.cz',
    },
  ];

  const partners = [
    {
      name: 'Human Capital',
      description:
        'Vedoucí HR poradenská firma s 15+ lety zkušeností v oblasti HR strategie, náboru a rozvoje talentů.',
      link: 'https://humancapital.cz',
    },
    {
      name: 'Pracovna',
      description:
        'Kreativní hub v Praze, prostor pro inovaci, setkávání a růst. Komunita tvůrců, podnikatelů a liderů.',
      link: 'https://pracovna.cz',
    },
    {
      name: 'Podcasters',
      description:
        'Profesionální studio pro tvorbu podcastů a audio obsahu. Komplexní řešení od produkce po distribuci.',
      link: 'https://podcasters.cz',
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Autenticita',
      description:
        'No BS. Mluvíme pravdu a tvoříme obsah, který je skutečný. Věříme v transparentnost a upřímnost.',
    },
    {
      icon: Leaf,
      title: 'Organický přístup',
      description:
        'Žádné umělé triky. Budujeme značku přirozeně. Klademe důraz na dlouhodobý vztah se zaměstnanci.',
    },
    {
      icon: Target,
      title: 'Dlouhodobost',
      description:
        'Neřešíme jednorázové kampaně. Stavíme systémy. Naším cílem je udržitelný růst a vývoj.',
    },
    {
      icon: Users,
      title: 'Partnerství',
      description:
        'Jsme prodloužená ruka vašeho HR týmu. Pracujeme s vámi, ne pro vás. Váš úspěch je náš úspěch.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ohm-deep py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <AnimatedBlob delay={0} />
        <AnimatedBlob delay={0.5} />
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
            Za OHM stojí lidé s vášní pro HR
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl bg-gradient-to-r from-ohm-mint via-ohm-rose to-ohm-lavender bg-clip-text text-transparent"
          >
            Poznamenejte si naši story a potkejte tým, který tvůří OHM
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-deep mb-8"
          >
            Příběh OHM
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-ohm-slate">
              OHM se zrodil ze setkání dvou komplementárních sil, které viděly stejný problém z
              různých úhlů pohledu: <span className="font-semibold text-ohm-deep">firmy potřebují
              budovat autentické employer brands organicky</span>, nikoliv přes korporátní
              marketingové triky.
            </p>

            <div className="glass-card-light border-l-4 border-ohm-mint p-6 rounded-r-2xl backdrop-blur-sm">
              <p className="font-bold text-ohm-deep mb-3 text-lg">Human Capital</p>
              <p className="text-ohm-slate leading-relaxed">
                přináší 15+ let hluboké HR expertise, poradenství a skutečné porozumění tomu, co
                firmy opravdu potřebují. Víme, jak funguje HR trh, co motivuje talenty a jak se
                budují silné týmy.
              </p>
            </div>

            <div className="glass-card-light border-l-4 border-ohm-rose p-6 rounded-r-2xl backdrop-blur-sm">
              <p className="font-bold text-ohm-deep mb-3 text-lg">Pracovna / Podcasters</p>
              <p className="text-ohm-slate leading-relaxed">
                přináší odbornost v tvorbě profesionálního obsahu, vytváření podcastů světové
                úrovně a moderní digitální marketing. Umíme vytvořit obsah, který má kouzlo.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-ohm-slate">
              Když jsme se setkali, popadla nás vize:{' '}
              <span className="font-semibold text-ohm-deep">
                slučit HR strategii s tvorbou kvalitního obsahu
              </span>
              . Nie pouze mluvit o employer branding, ale dělat to. Nie jen analyzovat kulturu,
              ale vyprávět příběhy, které ji oživují.
            </p>

            <p className="text-lg leading-relaxed italic text-ohm-deep border-t pt-6">
              Tak se zrodilo OHM - jedinečná kombinace hluboké HR znalosti a profesionální tvorby
              obsahu. Naší misí je pomáhat českým firmám vybudovat autentické employer brands
              organicky, bez BS a bez umělých triků.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-ohm-dark py-16 md:py-24 relative overflow-hidden">
        <AnimatedBlob delay={0} />
        <DecorativeElements />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Náš tým
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member, idx) => (
              <TeamMember
                key={idx}
                {...member}
                isSecond={idx === 1}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="bg-gradient-to-br from-ohm-cream via-white to-ohm-cream/80 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-deep mb-12 text-center"
          >
            Naši partneři
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {partners.map((partner, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <PartnerCard {...partner} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-ohm-navy py-16 md:py-24 relative overflow-hidden">
        <AnimatedBlob delay={0} />
        <DecorativeElements />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Naše hodnoty
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <ValueCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
