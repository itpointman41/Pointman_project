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

interface NavLink {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navLinks: NavLink[] = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/users', label: 'Users (Applicants)', icon: Users },
  { href: '/admin/applications', label: 'Applications', icon: FileText },
  { href: '/admin/jobs', label: 'Job Listings', icon: Briefcase },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

const AdminNavLinks: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => {
        const Icon = link.icon
        // Exact match for dashboard, or match with trailing slash/path for others
        const isActive =
          link.href === '/admin'
            ? pathname === '/admin'
            : pathname === link.href || pathname.startsWith(link.href + '/')

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-green-100 text-green-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{link.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default AdminNavLinks
