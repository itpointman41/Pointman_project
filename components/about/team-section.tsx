import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer & Co-founder',
      bio: '15+ years in HR technology and recruitment innovation'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer & Co-founder',
      bio: 'Former tech lead at leading AI companies, specializing in machine learning'
    },
    {
      name: 'Emma Williams',
      role: 'Chief Product Officer',
      bio: 'Product strategy expert with a passion for user-centric design'
    },
    {
      name: 'David Martinez',
      role: 'Chief Operating Officer',
      bio: 'Scale expert who has built 3 successful startups from the ground up'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of People & Culture',
      bio: 'Organizational psychologist and culture builder'
    },
    {
      name: 'James Park',
      role: 'VP of Engineering',
      bio: 'Full-stack engineer passionate about building scalable systems'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced leaders with a shared vision to transform the recruitment industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-linear-to-br from-white to-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Placeholder Avatar */}
              <div className="h-48 bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-green-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Team</h3>
          <p className="text-gray-600 mb-6">
            We&apos;re building a diverse, talented team of problem-solvers and innovators. 
            Interested in joining us?
          </p>
          <button className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
