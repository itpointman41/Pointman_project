import React from 'react';

export default function WhatMakesUsDifferent() {
    const differences = [
    {
      number: '01',
      title: 'AI-Powered Matching',
      description: 'Our proprietary algorithm uses machine learning to match you with jobs based on your skills, culture fit, and career aspirations—not just keywords.'
    },
    {
      number: '02',
      title: 'Speed & Efficiency',
      description: 'Find your ideal job 10x faster than traditional job boards. Many users land interviews within days.'
    },
    {
      number: '03',
      title: 'Bias Reduction',
      description: 'Our platform is designed to minimize unconscious bias in hiring, giving you fair opportunities regardless of background.'
    },
    {
      number: '04',
      title: 'User-Centric Design',
      description: 'We prioritize your experience. Our platform is intuitive, transparent, and keeps you informed throughout your job search.'
    },
    {
      number: '05',
      title: 'Comprehensive Tools',
      description: 'From interview prep to skills assessments and career planning, we provide all tools you need for success.'
    },
    {
      number: '06',
      title: 'Global & Local',
      description: 'Access job opportunities worldwide with local market expertise, supporting your career across different regions and industries.'
    }
  ];  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In a crowded job board marketplace, here&apos;s why talented professionals choose RecrutePlatform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-600 opacity-20 mb-4">{item.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 -mt-8">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center border-r border-gray-200">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900">10x Faster</h4>
            <p className="text-gray-600 mt-2">Find your ideal job</p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900">95% Match Rate</h4>
            <p className="text-gray-600 mt-2">For right-fit roles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
