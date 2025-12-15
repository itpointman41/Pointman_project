import AdminNavbarWrapper from '@/components/admin/navbar/AdminNavbarWrapper'
import AdminAuthGuard from '@/components/admin/AdminAuthGuard'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin panel for recruitment platform',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminAuthGuard />
      <AdminNavbarWrapper />
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  )
}
