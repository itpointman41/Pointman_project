"use client"
import React, { useMemo, useState } from 'react'
import CitySearchBar from './city-search-bar'
import PopularCitiesGrid from './popular-cities-grid'
import CityJobResultsList from './city-job-results-list'
import CityJobStatsSection from './city-job-stats-section'
import CityNoResultsMessage from './no-results-message'
import CityPaginationControls from './pagination-controls'

const MOCK_JOBS = [
  { id: '1', title: 'Registered Nurse', company: 'City Hospital', location: 'Cityville', salary: '$60k - $80k', city: 'Cityville', industry: 'Healthcare' },
  { id: '2', title: 'Software Engineer', company: 'Tech Co', location: 'Metropolis', salary: '$90k - $120k', city: 'Metropolis', industry: 'Technology' },
  { id: '3', title: 'Barista', company: 'Cafe Good', location: 'Townsville', salary: '$12/hr', city: 'Townsville', industry: 'Hospitality' },
  { id: '4', title: 'Mechanical Engineer', company: 'BuildIt', location: 'Industrial City', salary: '$70k - $95k', city: 'Industrial City', industry: 'Engineering' },
  { id: '5', title: 'Waiter / Waitress', company: 'Seaside Restaurant', location: 'Beach Town', salary: '$11/hr', city: 'Beach Town', industry: 'Hospitality' },
  { id: '6', title: 'Data Analyst', company: 'Analytics LLC', location: 'Metropolis', salary: '$65k - $85k', city: 'Metropolis', industry: 'Technology' },
  { id: '7', title: 'Civil Engineer', company: 'RoadWorks', location: 'Urbania', salary: '$75k - $100k', city: 'Urbania', industry: 'Engineering' },
  { id: '8', title: 'Nurse Assistant', company: 'CarePlus', location: 'Cityville', salary: '$18/hr', city: 'Cityville', industry: 'Healthcare' }
]

const POPULAR = ['Cityville', 'Metropolis', 'Townsville', 'Beach Town']

export default function SearchByCityPage() {
  const [city, setCity] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 4

  function handleSearch(c:string) {
    setCity(c || '')
    setPage(1)
  }

  const filtered = useMemo(() => {
    if (!city) return []
    return MOCK_JOBS.filter(j => j.city.toLowerCase() === city.toLowerCase())
  }, [city])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paged = filtered.slice((page-1)*perPage, page*perPage)

  const industries = Array.from(new Set(filtered.map(j=>j.industry))).slice(0,4)

  return (
    <div>
      <div className="py-6">
        <CitySearchBar popular={POPULAR} onSearch={handleSearch} />
        <PopularCitiesGrid cities={POPULAR} onSelect={handleSearch} />
      </div>

      {city ? (
        <>
          <CityJobStatsSection city={city} jobCount={filtered.length} industries={industries} />
          {paged.length > 0 ? <CityJobResultsList jobs={paged} /> : <CityNoResultsMessage city={city} />}
          <CityPaginationControls current={page} total={totalPages} onPage={(p)=>setPage(Math.min(Math.max(1,p), totalPages))} />
        </>
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-600">Search for a city or pick a popular city to begin.</div>
      )}
    </div>
  )
}
