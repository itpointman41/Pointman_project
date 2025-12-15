"use client"
import React, { useMemo, useState } from 'react'
import ApplicationsHeader from '@/components/my-applications/ApplicationsHeader'
import ApplicationFilterBar from '@/components/my-applications/ApplicationFilterBar'
import ApplicationStatsOverview from '@/components/my-applications/ApplicationStatsOverview'
import ApplicationsList from '@/components/my-applications/ApplicationsList'
import EmptyApplicationsState from '@/components/my-applications/EmptyApplicationsState'
import PaginationControls from '@/components/my-applications/PaginationControls'

type AppItem = {
  id: string
  title: string
  company: string
  location: string
  dateApplied: string
  status: string
  category?: string
}

const MOCK_APPS: AppItem[] = [
  { id: 'a1', title: 'Registered Nurse', company: 'City Hospital', location: 'Cityville', dateApplied: '2025-11-10', status: 'Under Review', category: 'Healthcare' },
  { id: 'a2', title: 'Software Engineer', company: 'Tech Co', location: 'Metropolis', dateApplied: '2025-10-02', status: 'Interview Scheduled', category: 'IT' },
  { id: 'a3', title: 'Barista', company: 'Cafe Good', location: 'Townsville', dateApplied: '2025-09-21', status: 'Rejected', category: 'Hospitality' },
  { id: 'a4', title: 'Mechanical Engineer', company: 'BuildIt', location: 'Industrial City', dateApplied: '2025-08-15', status: 'Shortlisted', category: 'Engineering' },
  { id: 'a5', title: 'Welder', company: 'MetalWorks', location: 'Industrial City', dateApplied: '2025-07-05', status: 'Submitted', category: 'Skilled Trades' },
  { id: 'a6', title: 'Data Analyst', company: 'Analytics LLC', location: 'Metropolis', dateApplied: '2025-11-01', status: 'Hired', category: 'IT' }
]

export default function MyApplicationsPage() {
  const [items] = useState<AppItem[]>(MOCK_APPS)
  type Filters = { status?: string; category?: string; startDate?: string; endDate?: string; sort?: string }
  const [filters, setFilters] = useState<Filters>({})
  const [page, setPage] = useState(1)
  const perPage = 4

  const categories = useMemo(() => Array.from(new Set(items.map(i=>i.category).filter(Boolean))) as string[], [items])

  function handleFilter(f: Filters) {
    setFilters(f)
    setPage(1)
  }

  const filtered = useMemo(() => {
    let list = items.slice()
    if (filters.status) list = list.filter(i => i.status === filters.status)
    if (filters.category) list = list.filter(i => i.category === filters.category)
    if (filters.startDate) list = list.filter(i => new Date(i.dateApplied) >= new Date(filters.startDate as string))
    if (filters.endDate) list = list.filter(i => new Date(i.dateApplied) <= new Date(filters.endDate as string))
    if (filters.sort === 'newest') list = list.sort((a,b)=> +new Date(b.dateApplied) - +new Date(a.dateApplied))
    if (filters.sort === 'oldest') list = list.sort((a,b)=> +new Date(a.dateApplied) - +new Date(b.dateApplied))
    return list
  }, [items, filters])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paged = filtered.slice((page-1)*perPage, page*perPage)

  const counts = useMemo(() => ({
    total: items.length,
    underReview: items.filter(i=>i.status === 'Under Review').length,
    interviews: items.filter(i=>i.status === 'Interview Scheduled').length,
    offers: items.filter(i=>['Shortlisted','Hired'].includes(i.status)).length
  }), [items])

  return (
    <main className="min-h-screen bg-gray-50">
      <ApplicationsHeader />
      <ApplicationFilterBar categories={categories} onChange={handleFilter} />
      <ApplicationStatsOverview total={counts.total} underReview={counts.underReview} interviews={counts.interviews} offers={counts.offers} />

      {filtered.length === 0 ? (
        <EmptyApplicationsState />
      ) : (
        <>
          <ApplicationsList items={paged} />
          <PaginationControls current={page} total={totalPages} onPage={(p)=>setPage(Math.min(Math.max(1,p), totalPages))} />
        </>
      )}
    </main>
  )
}
