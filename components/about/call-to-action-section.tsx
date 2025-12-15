"use client"

import React from 'react';
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

export default function CallToActionSection() {
  const { isLoggedIn } = useAuth()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-green-600 to-emerald-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Recruitment?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Join thousands of companies and professionals who are already experiencing 
          the RecrutePlatform difference. Get started today and revolutionize how you hire.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-black">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Start Your Job Search</h3>
            <p className="opacity-90 mb-6">
              Discover opportunities perfectly matched to your skills and career aspirations
            </p>
            <button className="w-full bg-white text-green-600 border-2 border-solid border-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
              Browse Jobs
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-black">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">Get Support</h3>
            <p className="opacity-90 mb-6">
              Have questions? Our team is here to help you succeed
            </p>
            <button className="w-full bg-white border-2 border-solid border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>

        {!isLoggedIn && (
          <div className="mt-12 text-opacity-75">
            <p className="text-sm">
              Already a member? <Link href="/login" className="underline hover:opacity-100 transition-opacity">Sign in here</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
