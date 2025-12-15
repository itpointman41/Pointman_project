import React from 'react'
import AdminLogoSection from './AdminLogoSection'
import AdminNavLinks from './AdminNavLinks'
import NavbarInteractive from './NavbarInteractive'

const AdminNavbarWrapper: React.FC = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <AdminLogoSection />

            {/* Nav Links - Desktop */}
            <AdminNavLinks />

            {/* Right Section - Profile Menu + Mobile Toggle */}
            <NavbarInteractive />
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminNavbarWrapper
