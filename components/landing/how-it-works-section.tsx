'use client'

import { CheckCircle, UserPlus, Briefcase, Send } from 'lucide-react'

const STEPS_SEEKER = [
  {
    number: 1,
    title: 'Create Your Profile',
    description: 'Sign up and build your professional profile with your skills and experience.',
    icon: UserPlus,
  },
  {
    number: 2,
    title: 'Search & Apply',
    description: 'Browse thousands of jobs and apply to positions that match your goals.',
    icon: Briefcase,
  },
  {
    number: 3,
    title: 'Connect with Employers',
    description: 'Get discovered by top companies looking for talent like you.',
    icon: Send,
  },
  {
    number: 4,
    title: 'Land Your Dream Job',
    description: 'Interview, negotiate, and start your new career journey.',
    icon: CheckCircle,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, streamlined process to find your next job
          </p>
        </div>

        {/* For Job Seekers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Your Journey to Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS_SEEKER.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {step.number < 4 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-1 bg-green-200"></div>
                  )}

                  {/* Card */}
                  <div className="bg-linear-to-br from-green-50 to-white rounded-lg p-6 border border-green-100 h-full">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <Icon size={32} className="text-green-600 mb-4" />

                    {/* Content */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
