import React from 'react'

export default function NoResultsMessage({ query }: { query?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h3 className="text-xl font-semibold text-gray-900">No results found</h3>
      <p className="mt-2 text-gray-600">We couldn't find jobs matching {query ? `"${query}"` : 'your filters'}. Try broadening your search.</p>
    </div>
  )
}
