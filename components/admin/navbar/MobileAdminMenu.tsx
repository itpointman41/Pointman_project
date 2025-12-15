'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  BarChart3,
  Users,
  FileText,
  Briefcase,
  TrendingUp,
  Settings,
} from 'lucide-react'

interface MobileAdminMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface NavLink {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navLinks: NavLink[] = [
  { href: '/admin', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/users', label: 'User Management', icon: Users },
  { href: '/admin/jobs', label: 'Job Posts', icon: Briefcase },
  { href: '/admin/applications', label: 'Applications', icon: FileText },
  { href: '/admin/reports', label: 'Reports', icon: TrendingUp },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

const MobileAdminMenu: React.FC<MobileAdminMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-green-200 shadow-lg z-40">
      <div className="flex flex-col">
        {navLinks.map((link) => {
          const Icon = link.icon
          const isActive =
            link.href === '/admin'
              ? pathname === '/admin'
              : pathname === link.href || pathname.startsWith(link.href + '/')

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 border-l-4 transition-colors ${
                isActive
                  ? 'bg-green-50 border-l-green-600 text-green-700'
                  : 'border-l-transparent text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileAdminMenu
