import React, { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const login = useCallback((email) => {
    // Frontend-only demo auth
    setIsAuthenticated(true)
    setUser({
      email: email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      joinDate: new Date().toLocaleDateString('cs-CZ'),
    })
  }, [])

  const logout = useCallback(() => {
    setIsAuthenticated(false)
    setUser(null)
  }, [])

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
