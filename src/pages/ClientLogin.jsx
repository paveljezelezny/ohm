import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function ClientLogin() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Frontend-only demo auth - accept any email/password
    if (email && password) {
      login(email)
      navigate('/klientska-zona')
    }

    setIsLoading(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-ohm-dark flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card */}
        <motion.div
          variants={itemVariants}
          className="bg-ohm-navy rounded-2xl shadow-2xl shadow-black/50 p-8 md:p-10"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ohm-gold rounded-full mb-4">
              <span className="text-2xl font-bold text-ohm-dark">OHM</span>
            </div>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-3">Klientská zóna</h1>
            <p className="text-ohm-slate text-sm">
              Přihlaste se pro přístup k exkluzivním materiálům
            </p>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                E-mailová adresa
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ohm-gold" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vas@email.cz"
                  className="w-full pl-12 pr-4 py-3 bg-ohm-dark border border-ohm-gold/20 rounded-lg text-white placeholder-ohm-slate/50 focus:outline-none focus:border-ohm-gold focus:ring-2 focus:ring-ohm-gold/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Heslo
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ohm-gold" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-ohm-dark border border-ohm-gold/20 rounded-lg text-white placeholder-ohm-slate/50 focus:outline-none focus:border-ohm-gold focus:ring-2 focus:ring-ohm-gold/20 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ohm-gold hover:text-ohm-gold-light transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-ohm-gold/20 bg-ohm-dark text-ohm-gold focus:ring-2 focus:ring-ohm-gold/20 cursor-pointer"
                />
                <span className="text-sm text-ohm-slate">Zapamatovat si mě</span>
              </label>
              <Link
                to="#"
                className="text-sm text-ohm-gold hover:text-ohm-gold-light transition-colors"
              >
                Zapomenuté heslo?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !email || !password}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:-translate-y-0"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-ohm-dark border-t-transparent rounded-full"
                />
              ) : (
                'Přihlásit se'
              )}
            </motion.button>
          </motion.form>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="my-6 flex items-center gap-3"
          >
            <div className="flex-1 h-px bg-ohm-gold/20" />
            <span className="text-xs text-ohm-slate">nebo</span>
            <div className="flex-1 h-px bg-ohm-gold/20" />
          </motion.div>

          {/* Support Note */}
          <motion.div
            variants={itemVariants}
            className="text-center p-4 bg-ohm-gold/10 rounded-lg border border-ohm-gold/20"
          >
            <p className="text-xs text-ohm-slate">
              Nemáte přístup?{' '}
              <a
                href="mailto:info@ohmarketing.cz"
                className="text-ohm-gold hover:text-ohm-gold-light font-semibold transition-colors"
              >
                Kontaktujte nás na info@ohmarketing.cz
              </a>
            </p>
          </motion.div>

          {/* Link to Homepage */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <Link
              to="/"
              className="text-sm text-ohm-slate hover:text-ohm-gold transition-colors"
            >
              ← Zpět na hlavní stránku
            </Link>
          </motion.div>
        </motion.div>

        {/* Demo Note */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8 text-xs text-ohm-slate/60"
        >
          <p>Demo mód: Zadejte jakýkoliv e-mail a heslo pro přihlášení</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
