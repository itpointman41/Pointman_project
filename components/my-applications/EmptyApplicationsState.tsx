import React from 'react'
import Link from 'next/link'

export default function EmptyApplicationsState() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h3 className="text-2xl font-semibold text-gray-900">You have no applications yet</h3>
      <p className="mt-2 text-gray-600">Browse jobs and apply to positions — your applications will appear here.</p>
      <div className="mt-6">
        <Link href="/search/job" className="bg-emerald-600 text-white px-4 py-2 rounded">Browse Jobs</Link>
      </div>
    </div>
  )
}
