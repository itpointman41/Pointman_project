'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MobileAdminMenu from './MobileAdminMenu'

const MobileNavClient: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
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

      <MobileAdminMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default MobileNavClient
