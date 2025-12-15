import React from 'react';

export default function CoreValues() {
  const values = [
    {
      icon: '🤝',
      title: 'Transparency',
      description: 'We believe in open, honest communication with our users, partners, and team members at all times.'
    },
    {
      icon: '✨',
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our operations and decisions.'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'We constantly push boundaries to create better solutions for recruitment challenges.'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'We are committed to delivering excellence in every interaction and feature we provide.'
    },
    {
      icon: '❤️',
      title: 'Inclusivity',
      description: 'We celebrate diversity and create opportunities for everyone, regardless of background.'
    },
    {
      icon: '🚀',
      title: 'Impact',
      description: 'We focus on creating meaningful, measurable positive change in the recruitment industry.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core values guide our decisions, actions, and interactions with everyone we work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-600"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-600 text-white rounded-lg p-8 text-center">
          <p className="text-xl font-semibold">
            These values are not just words—they drive everything we do and define our culture
          </p>
        </div>
      </div>
    </section>
  );
}
