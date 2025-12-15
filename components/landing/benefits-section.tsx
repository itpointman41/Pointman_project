'use client'

import { Zap, Shield, Users, TrendingUp } from 'lucide-react'

const BENEFITS_SEEKERS = [
  {
    icon: Zap,
    title: 'Fast Job Search',
    description: 'Find your perfect job in minutes with our advanced search and filters.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is protected with industry-leading security standards.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Get tips and advice from career coaches and industry experts.',
  },
  {
    icon: TrendingUp,
    title: 'Salary Insights',
    description: 'See salary ranges and growth opportunities for every position.',
  },
]

// Employer benefit entries removed — job seeker focused platform

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by millions of job seekers worldwide
          </p>
        </div>

        {/* For Job Seekers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Benefits for Job Seekers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS_SEEKERS.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-linear-to-r from-green-600 to-green-700 rounded-xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5M+</p>
              <p className="text-green-100">Active Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500K+</p>
              <p className="text-green-100">Jobs Available</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
              <p className="text-green-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
