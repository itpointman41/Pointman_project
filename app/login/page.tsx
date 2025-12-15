'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        return
      }

      setSuccess('Login successful! Redirecting...')
      // Store user using context
      setUser(data.user)
      
      // Redirect to dashboard or home
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // TODO: integrate Google OAuth here
    alert('Google login not implemented yet.')
  }

  const handleFacebookLogin = () => {
    // TODO: integrate Facebook OAuth here
    alert('Facebook login not implemented yet.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-14 px-4 lg:px-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8">
              <Image src="/img/logo.png" alt="Pointman Logo" width={100} height={100} className="h-12 w-auto" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-8">Sign in to your account to continue</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-green-600" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-green-600 hover:text-green-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>

                <button
                  type="button"
                  onClick={handleFacebookLogin}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Facebook</span>
                </button>
              </div>
            </form>

            <p className="text-center text-gray-600 text-sm mt-8">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-green-600 hover:text-green-700 font-semibold">
                Sign up
              </a>
            </p>
          </div>

          {/* Right Column - Branding */}
          <div className="hidden md:flex bg-linear-to-br from-green-600 to-green-700 flex-col justify-center items-center text-white">
            <div className="w-full">
              {/* Lottie Animation */}
              <div className="">
                <DotLottieReact
                  src="https://lottie.host/faffd614-9daa-4789-b58d-b2c308d92922/gN4W3kzdnG.lottie"
                  loop
                  autoplay
                />
              </div>

              {/* Text Content */}
              <div className="text-center p-10">
                <h2 className="text-4xl font-bold mb-4">Your Career Awaits</h2>
                <p className="text-green-100 text-lg mb-8">
                  Discover amazing job opportunities and land your next role
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">✓</span>
                    <p className="text-green-100">Browse job listings</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">✓</span>
                    <p className="text-green-100">Apply directly to positions</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">✓</span>
                    <p className="text-green-100">Track your applications easily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
