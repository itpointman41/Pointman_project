'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

interface MobileMenuToggleProps {
  isOpen: boolean
  onToggle: () => void
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  )
}

export default MobileMenuToggle
