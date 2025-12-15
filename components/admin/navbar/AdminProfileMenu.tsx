'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, User, Lock, LogOut } from 'lucide-react'

interface MenuOption {
  label: string
  icon: React.ComponentType<{ className?: string }>
  onClick: () => void
  isDangerous?: boolean
}

const AdminProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const adminName = 'Admin User'
  const adminRole = 'Administrator'

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    // TODO: Implement actual logout logic (clear auth, redirect to login)
    router.push('/login')
  }

  const menuOptions: MenuOption[] = [
    {
      label: 'Profile',
      icon: User,
      onClick: () => {
        router.push('/admin/profile')
        setIsOpen(false)
      },
    },
    {
      label: 'Change Password',
      icon: Lock,
      onClick: () => {
        router.push('/admin/change-password')
        setIsOpen(false)
      },
    },
    {
      label: 'Logout',
      icon: LogOut,
      onClick: handleLogout,
      isDangerous: true,
    },
  ]

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{adminName}</p>
          <p className="text-xs text-gray-500">{adminRole}</p>
        </div>
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          {adminName.charAt(0)}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{adminName}</p>
            <p className="text-xs text-gray-500 mt-1">{adminRole}</p>
          </div>
          <div className="py-1">
            {menuOptions.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.label}
                  onClick={option.onClick}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                    option.isDangerous
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProfileMenu
