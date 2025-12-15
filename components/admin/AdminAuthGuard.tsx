'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

export default function AdminAuthGuard() {
  const { isLoggedIn, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      // Redirect to admin login
      router.replace('/admin/login')
    }
  }, [isLoading, isLoggedIn, router])

  // While loading or authenticated, render nothing here (layout will render children)
  return null
}
