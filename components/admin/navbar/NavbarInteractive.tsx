 'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Menu, X, LogOut, User, Lock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileAdminMenu from './MobileAdminMenu'
import { useAdminAuth } from '@/context/admin-auth-context'

const NavbarInteractive: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false)
      }
    }

    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProfileMenuOpen])

  return (
    <>
      <div className="flex items-center gap-4">
        {/* Profile Menu - Desktop */}
        <div className="hidden md:block relative" ref={profileMenuRef}>
          {/* use auth context to show real admin name and role */}
          <AuthProfileButton
            isOpen={isProfileMenuOpen}
            toggleOpen={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileAdminMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

    // Helper component that renders the authenticated admin profile button and menu
    function AuthProfileButton({
      isOpen,
      toggleOpen,
    }: {
      isOpen: boolean
      toggleOpen: () => void
    }) {
      const { admin, logout } = useAdminAuth()
      const router = useRouter()

      type LocalAdmin = { role?: string; firstName?: string; lastName?: string; email?: string }
      const local = (admin || {}) as LocalAdmin

      const fullName = `${local.firstName ?? ''} ${local.lastName ?? ''}`.trim()
      const displayName = fullName || local.email || 'Admin User'
      const role = local.role ?? 'Administrator'
      const initials = (() => {
        if (local.firstName) return (local.firstName[0] || '').toUpperCase()
        if (local.email) return (local.email[0] || '').toUpperCase()
        return 'A'
      })()

      const handleLogout = () => {
        logout()
        router.replace('/admin/login')
      }

      return (
        <>
          <button
            onClick={toggleOpen}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">{initials}</span>
            </div>
            <span className="text-sm font-medium hidden lg:inline">{displayName}</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{displayName}</p>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
              <Link href="/admin/profile" className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <div className="flex items-center gap-2"><User className="w-4 h-4" />Profile</div>
              </Link>
              <Link href="/admin/change-password" className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <div className="flex items-center gap-2"><Lock className="w-4 h-4" />Change Password</div>
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-gray-100">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </>
      )
    }

    export default NavbarInteractive
