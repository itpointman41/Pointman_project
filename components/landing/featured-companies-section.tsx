'use client'

const COMPANIES = [
  { name: 'Google', initials: 'G' },
  { name: 'Apple', initials: 'A' },
  { name: 'Netflix', initials: 'N' },
  { name: 'Meta', initials: 'M' },
  { name: 'Amazon', initials: 'AMZN' },
  { name: 'Microsoft', initials: 'MS' },
]

const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Google',
    salary: '$180K - $220K',
  },
  {
    id: 2,
    title: 'ML Engineer',
    company: 'Meta',
    salary: '$170K - $210K',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Netflix',
    salary: '$160K - $200K',
  },
]

export default function FeaturedCompaniesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Featured Companies Hiring Now
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Join top companies and grow your career
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {company.initials}
                  </div>
                  <p className="font-semibold text-gray-900">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Jobs Section */}
        <div className="border-t border-gray-200 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Top Jobs This Week
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            High-paying positions from leading companies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-linear-to-br from-green-50 to-white rounded-xl border border-green-200 p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
              >
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-green-600 font-semibold mb-4">{job.company}</p>
                
                <div className="mb-6">
                  <p className="text-lg font-bold text-gray-900">{job.salary}</p>
                  <p className="text-sm text-gray-600">per year</p>
                </div>

                <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Explore All Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
