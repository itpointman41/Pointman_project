import React from 'react';

export default function MissionStatement() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <div className="bg-green-50 rounded-lg shadow-lg p-12 border-l-4 border-green-600">
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            &quot;To revolutionize job searching by connecting exceptional talent with 
            opportunities that align with their values, aspirations, and skills.&quot;
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We are committed to making job searching fairer, faster, and more accessible 
            for everyone. Our platform removes barriers and helps you find the perfect role.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Matching</h3>
              <p className="text-sm text-gray-600">Using AI to match you with ideal positions instantly</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Equal Opportunities</h3>
              <p className="text-sm text-gray-600">Creating equal access to jobs for all talent worldwide</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.172l3.536 3.536c.195.195.45.293.707.293a1 1 0 001.414-1.414L9.172 9.172m0 5.656l-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778m2.172-2.172l5.656-5.656a2 2 0 112.828 2.828l-5.656 5.656m2.172 2.172l7.778 7.778a2 2 0 01-2.828 2.828l-7.778-7.778" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-sm text-gray-600">Enabling career growth for job seekers like you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
