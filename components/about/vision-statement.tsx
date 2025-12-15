import React from 'react';

export default function VisionStatement() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Our Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual */}
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-lg p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-8 bg-green-500 rounded-full text-white mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600">Your Future Starts Here</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6">
              By 2030, RecrutePlatform aims to connect over 500,000 job seekers with their ideal roles 
              across 150+ countries.
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Opportunities</h3>
                <p className="text-gray-600">
                  Make quality job opportunities accessible to everyone worldwide, regardless of location 
                  or background.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smarter Matching</h3>
                <p className="text-gray-600">
                  Leverage cutting-edge AI and machine learning to find the most accurate role matches 
                  for your skills and goals.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eliminate Bias</h3>
                <p className="text-gray-600">
                  Build a platform that removes bias and creates equal opportunities for everyone, 
                  regardless of background or credentials.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Success</h3>
                <p className="text-gray-600">
                  Support your career growth and long-term professional success through meaningful roles 
                  and connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
