'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface User {
  _id?: string
  email: string
  firstName: string
  lastName: string
  role: string
  createdAt?: Date
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  logout: () => void
  isLoading: boolean
  setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Custom event for localStorage changes within the same tab
const STORAGE_EVENT = 'auth-storage-change'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load user on mount
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser) as User
        setUser(parsedUser)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Failed to parse user data:', error)
      localStorage.removeItem('user')
      setUser(null)
    } finally {
      setIsLoading(false)
    }

    // Listen for custom auth storage events
    const handleAuthChange = () => {
      try {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) as User
          setUser(parsedUser)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Failed to parse user data:', error)
        setUser(null)
      }
    }

    window.addEventListener(STORAGE_EVENT, handleAuthChange)
    return () => window.removeEventListener(STORAGE_EVENT, handleAuthChange)
  }, [])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    // Dispatch custom event
    window.dispatchEvent(new Event(STORAGE_EVENT))
  }

  const updateUser = (newUser: User | null) => {
    setUser(newUser)
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('user')
    }
    // Dispatch custom event to notify all listeners
    window.dispatchEvent(new Event(STORAGE_EVENT))
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, logout, isLoading, setUser: updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
