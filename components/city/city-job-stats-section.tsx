import React from 'react'

type Props = {
  city?: string
  jobCount?: number
  industries?: string[]
}

export default function CityJobStatsSection({ city, jobCount = 0, industries = [] }: Props) {
  return (
    <section className="py-6 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-emerald-700">{city ? `${city} — Job Market` : 'Job Market'}</h4>
          <p className="mt-1 text-gray-700">{jobCount} open positions</p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-800">Popular industries</h5>
          <div className="mt-2 flex gap-2 flex-wrap">
            {industries.map((i) => (
              <span key={i} className="px-3 py-1 bg-white border rounded-full text-sm">{i}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
