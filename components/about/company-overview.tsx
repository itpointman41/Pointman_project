import React from 'react';

export default function CompanyOverview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              RecrutePlatform is a modern, AI-powered recruitment platform designed to 
              help job seekers find their perfect next opportunity. We use intelligent matching 
              to connect you with roles that truly align with your skills and career goals.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2021, we&apos;ve quickly grown to become a trusted partner for thousands 
              of job seekers across multiple industries worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">50K+</p>
                <p className="text-sm text-gray-600">Active Job Seekers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">100K+</p>
                <p className="text-sm text-gray-600">Positions Filled</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="bg-linear-to-br from-green-50 to-emerald-100 rounded-lg p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-8 bg-green-500 rounded-full text-white mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-gray-600">Connecting Talent with Opportunity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
