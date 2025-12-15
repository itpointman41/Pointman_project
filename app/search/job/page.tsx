import React from 'react'
import JobSearchHeader from '@/components/search/job-search-header'
import SearchPage from '@/components/search/search-page'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JobSearchHeader />
      <SearchPage />
    </main>
  )
}
