import React from 'react'
import CitySearchHeader from '@/components/city/city-search-header'
import SearchByCityPage from '@/components/city/search-by-city-page'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CitySearchHeader />
      <SearchByCityPage />
    </main>
  )
}
