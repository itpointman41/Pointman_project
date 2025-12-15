import React from 'react'

type Props = {
  spec?: string
  jobCount?: number
  topLocations?: string[]
  commonRoles?: string[]
  avgSalary?: string
}

export default function SpecializationStatsSection({ spec, jobCount = 0, topLocations = [], commonRoles = [], avgSalary }: Props) {
  return (
    <section className="py-6 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div>
          <h4 className="text-lg font-semibold text-emerald-700">{spec ? `${spec} — Overview` : 'Overview'}</h4>
          <p className="mt-1 text-gray-700">{jobCount} active job{jobCount === 1 ? '' : 's'}</p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-800">Top locations</h5>
          <div className="mt-2 flex gap-2 flex-wrap">
            {topLocations.map(l => <span key={l} className="px-3 py-1 bg-white border rounded-full text-sm">{l}</span>)}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-800">Common roles & avg salary</h5>
          <div className="mt-2 text-sm text-gray-700">
            <div className="flex gap-2 flex-wrap">{commonRoles.map(r => <span key={r} className="px-3 py-1 bg-white border rounded-full">{r}</span>)}</div>
            {avgSalary && <div className="mt-2 font-medium text-emerald-700">Average: {avgSalary}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
