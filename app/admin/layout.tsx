'use client'

import AdminNavbarWrapper from '@/components/admin/navbar/AdminNavbarWrapper'
import AdminAuthGuard from '@/components/admin/AdminAuthGuard'
import { AdminAuthProvider } from '@/context/admin-auth-context'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showNav = !pathname.startsWith('/admin/login')

  return (
    <AdminAuthProvider>
      <AdminAuthGuard />
      {showNav && <AdminNavbarWrapper />}
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </AdminAuthProvider>
  )
}
