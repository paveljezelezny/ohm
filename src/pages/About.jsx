import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
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

const TeamMember = ({ name, role, company, expertise, description, linkedIn, companySite, image, isSecond }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: isSecond ? 0.2 : 0 }}
    className="group"
  >
    <div className="bg-ohm-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-ohm-gold/20">
      {/* Image placeholder */}
      <div className="h-64 sm:h-80 bg-gradient-to-br from-ohm-gold/20 to-ohm-navy/40 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <Sparkles className="w-24 h-24 text-ohm-gold/40" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-ohm-cream mb-2">{name}</h3>
        <p className="text-ohm-gold font-semibold mb-4">{role}</p>

        <div className="bg-ohm-navy/50 rounded-lg p-4 mb-6 border border-ohm-gold/10">
          <p className="text-sm text-ohm-warm-gray mb-3">
            <span className="text-ohm-gold font-semibold">Společnost:</span> {company}
          </p>
          <p className="text-sm text-ohm-cream leading-relaxed mb-4">{description}</p>

          {/* Expertise tags */}
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, idx) => (
              <span
                key={idx}
                className="inline-block bg-ohm-gold/20 text-ohm-gold text-xs font-medium px-3 py-1 rounded-full border border-ohm-gold/30"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-ohm-gold/20 text-ohm-gold text-sm font-medium rounded-lg hover:bg-ohm-gold/30 transition-colors duration-300 border border-ohm-gold/30"
          >
            LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={companySite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-lidi-coral/20 text-lidi-coral text-sm font-medium rounded-lg hover:bg-lidi-coral/30 transition-colors duration-300 border border-lidi-coral/30"
          >
            {company}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const PartnerCard = ({ name, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-ohm-slate/50 rounded-lg p-6 border border-ohm-gold/20 hover:border-ohm-gold/50 transition-all duration-300 hover:shadow-lg"
  >
    <h3 className="text-xl font-bold text-ohm-dark mb-3 group-hover:text-ohm-navy transition-colors">
      {name}
    </h3>
    <p className="text-ohm-warm-gray mb-4 text-sm">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-ohm-gold font-semibold hover:text-ohm-gold-light transition-colors"
    >
      Navštívit web
      <ExternalLink className="w-4 h-4" />
    </a>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-ohm-dark/50 rounded-lg p-6 border border-ohm-gold/20 hover:border-lidi-coral/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="bg-gradient-to-br from-lidi-coral to-ohm-gold rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-ohm-cream" />
      </div>
      <h3 className="text-lg font-bold text-ohm-cream group-hover:text-lidi-coral transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-ohm-cream/80 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

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
      <SectionDark className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ohm-gold rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lidi-coral rounded-full filter blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center z-10 max-w-3xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-ohm-cream mb-6"
          >
            Za OHM stojí lidé s vášní pro HR
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-ohm-gold"
          >
            Poznamenejte si naši story a potkejte tým, který tvůří OHM
          </motion.p>
        </motion.div>
      </SectionDark>

      {/* Story Section */}
      <SectionLight>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-dark mb-8"
          >
            Příběh OHM
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="prose prose-lg max-w-none text-ohm-warm-gray space-y-6"
          >
            <p className="text-lg leading-relaxed">
              OHM se zrodil ze setkání dvou komplementárních sil, které viděly stejný problém z
              různých úhlů pohledu: <span className="font-semibold text-ohm-dark">firmy potřebují
              budovat autentické employer brands organicky</span>, nikoliv přes korporátní
              marketingové triky.
            </p>

            <div className="bg-ohm-cream border-l-4 border-ohm-gold p-6 rounded-r-lg my-8">
              <p className="font-bold text-ohm-dark mb-3">Human Capital</p>
              <p className="text-ohm-warm-gray">
                přináší 15+ let hluboké HR expertise, poradenství a skutečné porozumění tomu, co
                firmy opravdu potřebují. Víme, jak funguje HR trh, co motivuje talenty a jak se
                budují silné týmy.
              </p>
            </div>

            <div className="bg-ohm-cream border-l-4 border-lidi-coral p-6 rounded-r-lg my-8">
              <p className="font-bold text-ohm-dark mb-3">Pracovna / Podcasters</p>
              <p className="text-ohm-warm-gray">
                přináší odbornost v tvorbě profesionálního obsahu, vytváření podcastů světové
                úrovně a moderní digitální marketing. Umíme vytvořit obsah, který má kouzlo.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Když jsme se setkali, popadla nás vize:{' '}
              <span className="font-semibold text-ohm-dark">
                slučit HR strategii s tvorbou kvalitního obsahu
              </span>
              . Nie pouze mluvit o employer branding, ale dělat to. Nie jen analyzovat kulturu,
              ale vyprávět příběhy, které ji oživují.
            </p>

            <p className="text-lg leading-relaxed italic text-ohm-dark">
              Tak se zrodilo OHM - jedinečná kombinace hluboké HR znalosti a profesionální tvorby
              obsahu. Naší misí je pomáhat českým firmám vybudovat autentické employer brands
              organicky, bez BS a bez umělých triků.
            </p>
          </motion.div>
        </motion.div>
      </SectionLight>

      {/* Team Section */}
      <SectionDark>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-cream mb-12 text-center"
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
      </SectionDark>

      {/* Partners Section */}
      <SectionLight>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-dark mb-12 text-center"
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
      </SectionLight>

      {/* Values Section */}
      <SectionNavy>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-ohm-cream mb-12 text-center"
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
      </SectionNavy>
    </>
  );
};

export default About;
