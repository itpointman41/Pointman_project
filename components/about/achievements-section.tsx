import React from 'react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Best HR Tech Startup 2024',
      issuer: 'Tech Innovation Awards'
    },
    {
      icon: '⭐',
      title: 'Top 10 Most Innovative Recruitment Platforms',
      issuer: 'HR Magazine Excellence Awards'
    },
    {
      icon: '📱',
      title: 'Best User Experience Design',
      issuer: 'Digital Innovation Summit'
    },
    {
      icon: '🚀',
      title: 'Fastest Growing HR-Tech Company',
      issuer: 'Startup Growth Report 2024'
    },
    {
      icon: '✅',
      title: 'ISO 27001 Certified',
      issuer: 'Information Security Standards'
    },
    {
      icon: '🌍',
      title: 'Great Place to Work',
      issuer: 'Global Employee Satisfaction'
    }
  ];

  const milestones = [
    { number: '50K+', label: 'Active Job Seekers' },
    { number: '100K+', label: 'Success Stories' },
    { number: '150+', label: 'Countries Covered' },
    { number: '95%', label: 'Match Accuracy' },
    { number: '2 Weeks', label: 'Avg. to New Job' },
    { number: '4.9★', label: 'User Rating' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders worldwide
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.issuer}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact by the Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center border-b-2 border-green-600 pb-6">
                <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {milestone.number}
                </p>
                <p className="text-gray-600 font-semibold">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Security & Compliance
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-lg shadow-md mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">ISO 27001</p>
              <p className="text-sm text-gray-600">Information Security</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-lg shadow-md mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">GDPR Compliant</p>
              <p className="text-sm text-gray-600">Data Protection</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-lg shadow-md mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">SOC 2 Type II</p>
              <p className="text-sm text-gray-600">Service Organization Control</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-lg shadow-md mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Data Encryption</p>
              <p className="text-sm text-gray-600">End-to-end Protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
