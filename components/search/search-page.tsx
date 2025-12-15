"use client"
import React, { useMemo, useState } from 'react'
import JobSearchBar from './job-search-bar'
import CategoryListSection from './category-list-section'
import JobFilterBar from './job-filter-bar'
import JobResultsList from './job-results-list'
import NoResultsMessage from './no-results-message'
import PaginationControls from './pagination-controls'

const MOCK_JOBS = [
  { id: '1', title: 'Registered Nurse', company: 'City Hospital', location: 'Cityville', salary: '$60k - $80k', type: 'Full-time', industry: 'Healthcare' },
  { id: '2', title: 'Software Engineer', company: 'Tech Co', location: 'Metropolis', salary: '$90k - $120k', type: 'Full-time', industry: 'Technology' },
  { id: '3', title: 'Barista', company: 'Cafe Good', location: 'Townsville', salary: '$12/hr', type: 'Part-time', industry: 'Hospitality' },
  { id: '4', title: 'Mechanical Engineer', company: 'BuildIt', location: 'Industrial City', salary: '$70k - $95k', type: 'Full-time', industry: 'Engineering' },
  { id: '5', title: 'Waiter / Waitress', company: 'Seaside Restaurant', location: 'Beach Town', salary: '$11/hr', type: 'Part-time', industry: 'Hospitality' },
  { id: '6', title: 'Data Analyst', company: 'Analytics LLC', location: 'Metropolis', salary: '$65k - $85k', type: 'Contract', industry: 'Technology' },
  { id: '7', title: 'Civil Engineer', company: 'RoadWorks', location: 'Urbania', salary: '$75k - $100k', type: 'Full-time', industry: 'Engineering' },
  { id: '8', title: 'Nurse Assistant', company: 'CarePlus', location: 'Cityville', salary: '$18/hr', type: 'Part-time', industry: 'Healthcare' }
]

const CATEGORIES = ['Healthcare', 'Technology', 'Hospitality', 'Engineering']
const INDUSTRIES = ['Healthcare', 'Technology', 'Hospitality', 'Engineering']

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | undefined>(undefined)
  const [filters, setFilters] = useState<any>({})
  const [page, setPage] = useState(1)

  const perPage = 4

  function handleSearch(q:string, cat?:string) {
    setQuery(q || '')
    setCategory(cat)
    setPage(1)
  }

  function handleFilterChange(f:any) {
    setFilters(f)
    setPage(1)
  }

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter(j => {
      if (query && !(`${j.title} ${j.company} ${j.location}`.toLowerCase()).includes(query.toLowerCase())) return false
      if (category && j.industry !== category) return false
      if (filters.jobType && j.type !== filters.jobType) return false
      if (filters.industry && j.industry !== filters.industry) return false
      if (filters.salaryMin && parseSalary(j.salary) < filters.salaryMin) return false
      if (filters.salaryMax && parseSalary(j.salary) > filters.salaryMax) return false
      return true
    })
  }, [query, category, filters])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paged = filtered.slice((page-1)*perPage, page*perPage)

  return (
    <div>
      <div className="py-6">
        <JobSearchBar categories={CATEGORIES} onSearch={handleSearch} />
        <CategoryListSection categories={CATEGORIES} onSelect={(c)=>handleSearch('', c)} />
        <JobFilterBar industries={INDUSTRIES} onChange={handleFilterChange} />
      </div>

      <div>
        {paged.length > 0 ? <JobResultsList jobs={paged} /> : <NoResultsMessage query={query} />}
        <PaginationControls current={page} total={totalPages} onPage={(p)=>setPage(Math.min(Math.max(1,p), totalPages))} />
      </div>
    </div>
  )
}

function parseSalary(s?:string) {
  if (!s) return 0
  const m = s.match(/\$(\d+)/)
  if (m) return Number(m[1])
  const hr = s.match(/(\d+)\/hr/)
  if (hr) return Number(hr[1]) * 12 * 160 // approximate yearly
  return 0
}
