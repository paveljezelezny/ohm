import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  GraduationCap,
  FileDown,
  BookOpen,
  BarChart3,
  Settings,
  Play,
  Download,
  FileText,
  FileIcon,
  Clock,
  Plus,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function ClientPortal() {
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ohm-cream flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-ohm-dark mb-4">Přístup zamítnut</h1>
          <p className="text-ohm-slate mb-8">
            Musíte se přihlásit pro přístup k klientské zóně.
          </p>
          <Link to="/klientska-zona/login" className="btn-primary">
            Přihlásit se
          </Link>
        </motion.div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'materials', label: 'Vzdělávací obsah', icon: GraduationCap },
    { id: 'documents', label: 'Dokumenty ke stažení', icon: FileDown },
    { id: 'cases', label: 'Case Studies', icon: BookOpen },
    { id: 'reports', label: 'Reporty', icon: BarChart3 },
    { id: 'settings', label: 'Nastavení', icon: Settings },
  ]

  const materials = [
    {
      id: 1,
      title: 'Jak budovat EVP v 5 krocích',
      type: 'video',
      duration: '45 min',
      category: 'Vzdělávání',
      categoryColor: 'bg-blue-100 text-blue-700',
      date: '20. března 2026',
      icon: Play,
    },
    {
      id: 2,
      title: 'Šablona: Obsahový kalendář HR',
      type: 'document',
      format: 'XLSX',
      category: 'Template',
      categoryColor: 'bg-emerald-100 text-emerald-700',
      date: '18. března 2026',
      icon: FileIcon,
    },
    {
      id: 3,
      title: 'Case Study: IT firma 500+ zaměstnanců',
      type: 'pdf',
      category: 'Case Study',
      categoryColor: 'bg-purple-100 text-purple-700',
      date: '15. března 2026',
      icon: FileText,
    },
    {
      id: 4,
      title: 'Průvodce interní komunikací',
      type: 'video',
      duration: '30 min',
      category: 'Vzdělávání',
      categoryColor: 'bg-blue-100 text-blue-700',
      date: '12. března 2026',
      icon: Play,
    },
    {
      id: 5,
      title: 'Gallup Q12 - interpretace výsledků',
      type: 'pdf',
      category: 'Nástroje',
      categoryColor: 'bg-amber-100 text-amber-700',
      date: '10. března 2026',
      icon: FileText,
    },
    {
      id: 6,
      title: 'Best practices: LinkedIn pro HR',
      type: 'article',
      category: 'Know-how',
      categoryColor: 'bg-rose-100 text-rose-700',
      date: '8. března 2026',
      icon: FileIcon,
    },
  ]

  const StatCard = ({ label, value, icon: Icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-ohm-warm-gray p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-ohm-slate text-sm font-medium mb-2">{label}</p>
          <p className="text-2xl font-bold text-ohm-dark">{value}</p>
        </div>
        <div className="w-12 h-12 bg-ohm-gold/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-ohm-gold" />
        </div>
      </div>
    </motion.div>
  )

  const MaterialCard = ({ material }) => {
    const IconComponent = material.icon

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl shadow-sm border border-ohm-warm-gray overflow-hidden hover:shadow-lg transition-all"
      >
        {/* Card Header with Icon */}
        <div className="bg-gradient-to-r from-ohm-gold/10 to-ohm-gold/5 p-6 border-b border-ohm-warm-gray">
          <div className="flex items-start justify-between">
            <IconComponent className="w-8 h-8 text-ohm-gold" />
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${material.categoryColor}`}>
              {material.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-ohm-dark mb-3 line-clamp-2">
            {material.title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-ohm-slate mb-4">
            {material.duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{material.duration}</span>
              </div>
            )}
            {material.format && (
              <span className="font-medium text-ohm-navy">{material.format}</span>
            )}
            <span className="ml-auto">{material.date}</span>
          </div>

          {/* Action Button */}
          <button
            className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              material.type === 'pdf' || material.type === 'document'
                ? 'bg-ohm-navy/10 text-ohm-navy hover:bg-ohm-navy/20'
                : 'bg-ohm-gold/10 text-ohm-gold hover:bg-ohm-gold/20'
            }`}
          >
            {material.type === 'pdf' || material.type === 'document' ? (
              <>
                <Download className="w-4 h-4" />
                Stáhnout
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Zobrazit
              </>
            )}
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-ohm-cream">
      {/* Sidebar */}
      <AnimatePresence>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 left-0 w-72 bg-ohm-navy text-white z-40 md:static md:translate-x-0 shadow-xl"
        >
          {/* Sidebar Content */}
          <div className="flex flex-col h-full p-6">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-ohm-gold rounded-full flex items-center justify-center">
                <span className="font-bold text-ohm-dark text-lg">OHM</span>
              </div>
              <h2 className="font-bold text-lg">OHM</h2>
            </div>

            {/* Client Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 pb-6 border-b border-ohm-gold/20"
            >
              <p className="text-xs text-ohm-slate mb-2">Přihlášen jako</p>
              <p className="font-semibold text-white">{user?.email}</p>
            </motion.div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      setSidebarOpen(false)
                    }}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === item.id
                        ? 'bg-ohm-gold text-ohm-dark font-semibold'
                        : 'text-ohm-slate hover:bg-ohm-dark/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>

            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-ohm-gold/10 border border-ohm-gold/30 rounded-lg text-ohm-gold hover:bg-ohm-gold/20 transition-all duration-300 font-semibold"
            >
              <LogOut className="w-5 h-5" />
              Odhlásit se
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-ohm-warm-gray sticky top-0 z-20">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-ohm-cream rounded-lg transition-colors"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6 text-ohm-dark" />
                ) : (
                  <Menu className="w-6 h-6 text-ohm-dark" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-ohm-dark">Klientská zóna</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-ohm-slate">Přihlášen:</span>
                <span className="font-semibold text-ohm-dark">{user?.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Welcome Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-ohm-dark mb-2">
                  Vítejte v klientské zóně OHM
                </h2>
                <p className="text-ohm-slate">
                  Zde najdete exkluzivní materiály, case studies a reporty speciálně připravené pro
                  vás.
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <StatCard label="Nové materiály" value="4" icon={Plus} />
                <StatCard label="Nové case studies" value="2" icon={BookOpen} />
                <StatCard label="Report za březen" value="k dispozici" icon={BarChart3} />
              </motion.div>

              {/* Recent Materials */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-ohm-dark mb-2">Nové materiály</h3>
                  <p className="text-ohm-slate">
                    Poslední přidané materiály z vaší klientské knihovny
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05, delayChildren: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {materials.map((material) => (
                    <MaterialCard key={material.id} material={material} />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Other Tabs - Coming Soon */}
          {activeTab !== 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-ohm-warm-gray p-12 text-center"
            >
              <div className="w-16 h-16 bg-ohm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileIcon className="w-8 h-8 text-ohm-gold" />
              </div>
              <h3 className="text-2xl font-bold text-ohm-dark mb-2">Už brzy</h3>
              <p className="text-ohm-slate mb-6">
                Tato sekce je právě připravována. Vraťte se brzy pro více obsahu.
              </p>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="btn-primary"
              >
                Zpět na dashboard
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
