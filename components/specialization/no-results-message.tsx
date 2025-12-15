import React from 'react'

export default function NoResultsMessage({ spec }: { spec?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h3 className="text-xl font-semibold text-gray-900">No jobs for {spec}</h3>
      <p className="mt-2 text-gray-600">We couldn't find any open roles for {spec}. Try another specialization or broaden your filters.</p>
    </div>
  )
}
