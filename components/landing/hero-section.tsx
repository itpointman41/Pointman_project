'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 pb-20">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Next Opportunity <span className="text-green-600">Awaits</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Find your dream job from thousands of opportunities at leading companies. Start your career journey today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#job-search"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Briefcase size={20} />
                Start Searching
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-gray-600 text-sm">Active Jobs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-gray-600 text-sm">Companies Hiring</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Lottie illustration */}
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <DotLottieReact
                  src="https://lottie.host/726eba7a-8d66-4341-88a8-3803d439e959/nHPUIFJGxl.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Floating cards */}
              <div className="absolute top-8 -right-8 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Staff Nurse</p>
                <p className="text-xs text-gray-600">Ministry of National Guard • Riyadh, Qassim, Taif</p>
              </div>
              <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <p className="text-sm font-semibold text-gray-900">QA/QC Engineer</p>
                <p className="text-xs text-gray-600">Arabian Falcon Contracting Company • Al Jubayl, KSA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
