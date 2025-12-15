"use client"
import React, { useMemo, useState } from 'react'
import SpecializationSearchBar from './specialization-search-bar'
import SpecializationListSection from './specialization-list-section'
import JobFilterBar from './job-filter-bar'
import JobResultsList from './job-results-list'
import NoResultsMessage from './no-results-message'
import PaginationControls from './pagination-controls'
import SpecializationStatsSection from './specialization-stats-section'

const MOCK_JOBS = [
  { id: '1', title: 'Registered Nurse', company: 'City Hospital', location: 'Cityville', salary: '$60k - $80k', specialization: 'Nursing', experience: 'Entry', employerType: 'Corporate', type: 'Full-time' },
  { id: '2', title: 'Software Engineer', company: 'Tech Co', location: 'Metropolis', salary: '$90k - $120k', specialization: 'IT & Software', experience: 'Mid', employerType: 'Startup', type: 'Full-time' },
  { id: '3', title: 'Barista', company: 'Cafe Good', location: 'Townsville', salary: '$12/hr', specialization: 'Hospitality', experience: 'Entry', employerType: 'Corporate', type: 'Part-time' },
  { id: '4', title: 'Mechanical Engineer', company: 'BuildIt', location: 'Industrial City', salary: '$70k - $95k', specialization: 'Engineering', experience: 'Senior', employerType: 'Corporate', type: 'Full-time' },
  { id: '5', title: 'Welder', company: 'MetalWorks', location: 'Industrial City', salary: '$20/hr', specialization: 'Skilled Trades', experience: 'Mid', employerType: 'Agency', type: 'Contract' },
  { id: '6', title: 'Backend Developer', company: 'DevHouse', location: 'Metropolis', salary: '$80k - $110k', specialization: 'IT & Software', experience: 'Mid', employerType: 'Startup', type: 'Full-time' },
  { id: '7', title: 'Nurse Assistant', company: 'CarePlus', location: 'Cityville', salary: '$18/hr', specialization: 'Nursing', experience: 'Entry', employerType: 'Corporate', type: 'Part-time' }
]

const SPECS = ['Nursing', 'Engineering', 'Hospitality', 'IT & Software', 'Skilled Trades', 'Healthcare']

export default function SearchBySpecializationPage() {
  const [spec, setSpec] = useState('')
  const [filters, setFilters] = useState<any>({})
  const [page, setPage] = useState(1)
  const perPage = 4

  function handleSearch(s: string) {
    setSpec(s || '')
    setPage(1)
  }

  function handleFilterChange(f:any) {
    setFilters(f)
    setPage(1)
  }

  const filtered = useMemo(() => {
    if (!spec) return []
    return MOCK_JOBS.filter(j => {
      if (j.specialization.toLowerCase() !== spec.toLowerCase()) return false
      if (filters.jobType && j.type !== filters.jobType) return false
      if (filters.expLevel && j.experience !== filters.expLevel) return false
      if (filters.employerType && j.employerType !== filters.employerType) return false
      if (filters.salaryMin && parseSalary(j.salary) < filters.salaryMin) return false
      if (filters.salaryMax && parseSalary(j.salary) > filters.salaryMax) return false
      return true
    })
  }, [spec, filters])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paged = filtered.slice((page-1)*perPage, page*perPage)

  const topLocations = Array.from(new Set(filtered.map(j=>j.location))).slice(0,3)
  const commonRoles = Array.from(new Set(filtered.map(j=>j.title))).slice(0,4)
  const avgSalary = computeAvgSalary(filtered)

  return (
    <div>
      <div className="py-6">
        <SpecializationSearchBar popular={SPECS} onSearch={handleSearch} />
        <SpecializationListSection specs={SPECS} onSelect={handleSearch} />
        <JobFilterBar onChange={handleFilterChange} />
      </div>

      {spec ? (
        <>
          <SpecializationStatsSection spec={spec} jobCount={filtered.length} topLocations={topLocations} commonRoles={commonRoles} avgSalary={avgSalary} />
          {paged.length > 0 ? <JobResultsList jobs={paged} /> : <NoResultsMessage spec={spec} />}
          <PaginationControls current={page} total={totalPages} onPage={(p)=>setPage(Math.min(Math.max(1,p), totalPages))} />
        </>
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-600">Select a specialization or use the search above to get started.</div>
      )}
    </div>
  )
}

function parseSalary(s?:string) {
  if (!s) return 0
  const m = s.match(/\$(\d+)/)
  if (m) return Number(m[1])
  const hr = s.match(/(\d+)\/hr/)
  if (hr) return Number(hr[1]) * 12 * 160
  return 0
}

function computeAvgSalary(list:any[]) {
  if (!list.length) return undefined
  const vals = list.map(j=>parseSalary(j.salary))
  const avg = Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)
  if (avg > 1000) return `$${Math.round(avg/1000)}k`
  return `$${avg}`
}
