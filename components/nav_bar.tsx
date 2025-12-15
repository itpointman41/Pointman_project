'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { MapPin, Briefcase, BookOpen, BarChart3, Users, User, Settings, LogOut } from 'lucide-react'
import { useAuth } from '@/context/auth-context'

interface DropdownItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

interface DropdownConfig {
  [key: string]: DropdownItem[]
}

export default function NavBar() {
  const router = useRouter()
  const { user, isLoggedIn, logout } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname() || '/'

  const dropdowns: DropdownConfig = {
    search: [
      { label: 'Search by City', href: '/search/city', icon: <MapPin size={18} /> },
      { label: 'Search Job', href: '/search/job', icon: <Briefcase size={18} /> },
      { label: 'Search by Specialization', href: '/search/specialization', icon: <Users size={18} /> },
    ],
    // resources: [
    //   { label: 'Blog & Insights', href: '#', icon: <BookOpen size={18} /> },
    //   { label: 'Career Guide', href: '#', icon: <BarChart3 size={18} /> },
    //   { label: 'Interview Tips', href: '#', icon: <BookOpen size={18} /> },
    //   { label: 'Salary Trends', href: '#', icon: <BarChart3 size={18} /> },
    //   { label: 'Company Reviews', href: '#', icon: <Users size={18} /> },
    // ],
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Job Hiring', href: '#', dropdown: 'search' },
    // { label: 'Resources', href: '#', dropdown: 'resources' },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Applications', href: '/my-applications' },
  ]

  const handleDropdownToggle = (dropdownName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/img/logo.png" alt="Logo" width={900} height={900} className='h-10 w-auto' />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                // Determine active state: for dropdowns (search) we consider any /search/* route active.
                const isActive = link.dropdown
                  ? pathname.startsWith('/search')
                  : link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href || '')

                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setHoveredDropdown(link.dropdown || null)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          className={`px-4 py-2 text-sm flex items-center gap-1 rounded-lg transition-colors duration-200 ${
                            isActive
                              ? 'text-green-600 font-semibold bg-green-50/30 ring-1 ring-green-100'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-100/50'
                          }`}
                        >
                          <span className={`${isActive ? 'font-semibold' : ''}`}>{link.label}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              hoveredDropdown === link.dropdown ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>

                          {/* underline for active state */}
                          <span
                            aria-hidden
                            className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-green-600 transition-all duration-300 ${
                              isActive ? 'w-10' : 'w-0'
                            }`}
                          />
                        </button>

                        {/* Desktop Dropdown */}
                        <div
                          className={`absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transform transition-all duration-300 origin-top ${
                            hoveredDropdown === link.dropdown ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                          }`}
                        >
                          {dropdowns[link.dropdown].map((item) => (
                            <Link
                              key={item.label}
                              href={item.href || '#'}
                              className="flex items-center gap-3 px-4 py-2.5 text-gray-700 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                            >
                              <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-150">
                                {item.icon}
                              </span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          href={link.href}
                          className={`px-4 py-2 text-sm flex items-center gap-1 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'text-green-600 font-semibold bg-green-50/30 ring-1 ring-green-100'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-100/50 hover:scale-105'
                          }`}
                        >
                          <span className={`${isActive ? 'font-semibold scale-100' : 'scale-100'}`}>{link.label}</span>

                          {/* animated underline */}
                          <span
                            aria-hidden
                            className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-green-600 transition-all duration-300 ${
                              isActive ? 'w-10' : 'w-0'
                            }`}
                          />
                        </Link>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Section - Auth Area */}
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                // Logged In: Profile Avatar & Dropdown
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                    title={`${user?.firstName} ${user?.lastName}`}
                  >
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fadeIn"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 text-sm hover:bg-gray-50 transition-colors duration-150"
                      >
                        <User size={18} className="text-gray-400" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 text-sm hover:bg-gray-50 transition-colors duration-150"
                      >
                        <Settings size={18} className="text-gray-400" />
                        Settings
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        className="w-full text-left px-4 py-2.5 text-red-600 text-sm hover:bg-red-50 transition-colors duration-150 flex items-center gap-3 font-medium"
                        onClick={(e) => {
                          e.stopPropagation()
                          logout()
                          router.push('/login')
                          setIsProfileOpen(false)
                        }}
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Not Logged In: Sign In / Sign Up Buttons
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    href="/login"
                    className="px-5 py-2 text-gray-700 font-medium text-sm hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-gray-100/50"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-gray-50/50 animate-slideDown">
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = link.dropdown
                    ? pathname.startsWith('/search')
                    : link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href || '')

                  return (
                    <div key={link.label}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => handleDropdownToggle(link.dropdown)}
                            className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 flex items-center justify-between ${
                              isActive ? 'text-green-600 font-semibold bg-green-50/30' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                            }`}
                          >
                            <span>{link.label}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${
                                mobileOpenDropdown === link.dropdown ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </button>

                          {/* Mobile Dropdown */}
                          {link.dropdown && mobileOpenDropdown === link.dropdown && (
                            <div className="bg-white rounded-lg mt-1 border border-gray-200 overflow-hidden animate-fadeIn">
                              {dropdowns[link.dropdown].map((item) => {
                                const itemActive = pathname === item.href || pathname.startsWith(item.href || '')
                                return (
                                  <Link
                                    key={item.label}
                                    href={item.href || '#'}
                                    className={`flex items-center gap-3 px-6 py-2.5 text-sm transition-colors duration-150 ${
                                      itemActive ? 'text-green-600 font-semibold bg-green-50/30' : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                  >
                                    <span className="text-gray-400 hover:text-green-600 transition-colors duration-150">{item.icon}</span>
                                    {item.label}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-150 flex items-center justify-between ${
                            isActive ? 'text-green-600 font-semibold bg-green-50/30' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                          }`}
                        >
                          <span>{link.label}</span>

                          {/* mobile underline */}
                          <span aria-hidden className={`h-0.5 rounded-full bg-green-600 transition-all duration-300 ${isActive ? 'w-full inline-block mt-2' : 'w-0'}`} />
                        </Link>
                      )}
                    </div>
                  )
                })}

                {/* Mobile Auth Section */}
                {!isLoggedIn && (
                  <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                    <Link
                      href="/login"
                      className="block px-4 py-2.5 text-gray-700 font-medium text-sm hover:bg-gray-100 rounded-lg transition-colors duration-150"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Click outside handler for dropdowns */}
      {(isProfileOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileOpen(false)
            setIsMobileMenuOpen(false)
          }}
        />
      )}
    </>
  )
}
