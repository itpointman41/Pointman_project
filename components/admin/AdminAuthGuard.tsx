'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/context/admin-auth-context'

export default function AdminAuthGuard() {
  const { isLoggedIn, isLoading } = useAdminAuth()
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
