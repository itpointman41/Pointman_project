import React from 'react'

export default function CityNoResultsMessage({ city }: { city?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h3 className="text-xl font-semibold text-gray-900">No jobs in {city}</h3>
      <p className="mt-2 text-gray-600">We couldn't find any open roles in {city}. Try another city or broaden your filters.</p>
    </div>
  )
}
