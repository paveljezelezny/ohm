import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    position: '',
    companySize: '',
    interests: [],
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    'HR Strategie & Audit',
    'Obsahová produkce',
    'Podcast "Lidi, prosím..."',
    'Employer branding',
    'Vzdělávání & Workshopy',
    'Kompletní OHM balíček',
  ];

  const companySizes = ['50-100', '100-500', '500-1000', '1000+'];

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // Frontend-only for now - in production this would POST to a backend
      console.log('Form submission:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        type: 'success',
        message: 'Děkujeme za vaši poptávku! Brzy se vám ozvu.',
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        position: '',
        companySize: '',
        interests: [],
        message: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Došlo k chybě. Prosím zkuste to znovu.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-ohm-deep text-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 -right-32 w-72 h-72 bg-gradient-blob-mint blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 left-20 w-80 h-80 bg-gradient-blob-rose blur-3xl opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Pojďme si promluvit
          </h1>
          <p className="text-lg sm:text-xl text-ohm-slate mb-8 max-w-2xl mx-auto">
            Rádi se dozvíme o vašich HR výzvách a navrhneme řešení na míru.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Left Column - Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 glass-card-light p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                    placeholder="Vaše jméno"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Firma
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                    placeholder="Název vaší firmy"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                    placeholder="vase@email.cz"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                    placeholder="+420 XXX XXX XXX"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Pozice ve firmě
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                    placeholder="Váša pozice"
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Velikost firmy
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all"
                  >
                    <option value="">Vyberte velikost</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size} zaměstnanců
                      </option>
                    ))}
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-3">
                    Co vás zajímá?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInputChange}
                          className="w-5 h-5 rounded border border-ohm-lavender/30 bg-white cursor-pointer accent-ohm-mint"
                        />
                        <span className="text-ohm-deep group-hover:text-ohm-mint transition-colors">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-ohm-deep mb-2">
                    Zpráva
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-ohm-lavender/20 text-ohm-deep placeholder-ohm-slate focus:outline-none focus:border-ohm-mint focus:ring-2 focus:ring-ohm-mint/20 transition-all resize-none"
                    placeholder="Vaše zpráva..."
                  />
                </div>

                {/* Status Messages */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: formStatus ? 1 : 0,
                    y: formStatus ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus && (
                    <div
                      className={`p-4 rounded-lg flex items-start gap-3 ${
                        formStatus.type === 'success'
                          ? 'bg-ohm-mint/10 border border-ohm-mint text-ohm-mint'
                          : 'bg-lidi-coral/10 border border-lidi-coral text-lidi-coral'
                      }`}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="font-medium">{formStatus.message}</p>
                    </div>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílání...' : 'Odeslat poptávku'}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-ohm-lavender/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-ohm-lavender" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ohm-slate">Email</p>
                    <p className="text-white font-semibold">
                      info@ohmarketing.cz
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-ohm-lavender/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-ohm-lavender" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ohm-slate">
                      Telefon
                    </p>
                    <p className="text-white font-semibold">
                      +420 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-ohm-lavender/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ohm-lavender" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ohm-slate">
                      Lokace
                    </p>
                    <p className="text-white font-semibold">
                      Praha, Česká republika
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-ohm-slate mb-3">
                  Sledujte nás
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-ohm-lavender/20 flex items-center justify-center hover:bg-ohm-lavender/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-ohm-lavender" />
                  </motion.a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl bg-ohm-navy/40 h-48 flex items-center justify-center text-ohm-slate border border-ohm-lavender/20">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Mapa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-ohm-mint mb-8">Jsme projekt společností</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* Human Capital Logo Placeholder */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="glass-card px-8 py-4 hover:border-ohm-mint/50 transition-all"
            >
              <p className="text-ohm-mint font-semibold">Human Capital</p>
            </motion.a>

            {/* Pracovna Logo Placeholder */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="glass-card px-8 py-4 hover:border-ohm-mint/50 transition-all"
            >
              <p className="text-ohm-mint font-semibold">Pracovna</p>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
