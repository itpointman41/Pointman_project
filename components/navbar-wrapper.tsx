'use client'

import { usePathname } from 'next/navigation'
import NavBar from './nav_bar'

export default function NavBarWrapper() {
  const pathname = usePathname()
  const hideNavbarPaths = ['/login', '/signup', '/admin']
  
  const shouldShowNavbar = !hideNavbarPaths.some(path => pathname.startsWith(path))

  if (!shouldShowNavbar) {
    return null
  }

  return <NavBar />
}
