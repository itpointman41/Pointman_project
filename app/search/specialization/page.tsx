import React from 'react'
import SpecializationSearchHeader from '@/components/specialization/specialization-search-header'
import SearchBySpecializationPage from '@/components/specialization/search-by-specialization-page'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SpecializationSearchHeader />
      <SearchBySpecializationPage />
    </main>
  )
}
