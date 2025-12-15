'use client'

import { Search, MapPin, DollarSign } from 'lucide-react'
import { useState } from 'react'

const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Google',
    location: 'San Francisco, CA',
    salary: '$150K - $180K',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Netflix',
    location: 'Los Angeles, CA',
    salary: '$140K - $170K',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: '$130K - $160K',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'UX Researcher',
    company: 'Apple',
    location: 'Cupertino, CA',
    salary: '$120K - $150K',
    type: 'Full-time',
  },
]

export default function JobSearchSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [salary, setSalary] = useState('')

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Search from thousands of jobs and apply instantly
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job Title Search */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title or Keyword
                </label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-green-500 transition-colors">
                  <Search size={20} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Designer, Developer, Marketing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-green-500 transition-colors">
                  <MapPin size={20} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="City or Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-green-500 transition-colors">
                  <DollarSign size={20} className="text-gray-400" />
                  <select
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-gray-900"
                  >
                    <option value="">Any</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-150k">$100K - $150K</option>
                    <option value="150k-200k">$150K - $200K</option>
                    <option value="200k+">$200K+</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full md:w-auto mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200">
              Search Jobs
            </button>
          </div>
        </div>

        {/* Featured Jobs */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-green-600 font-semibold">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-200">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
