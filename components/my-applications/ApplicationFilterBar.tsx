"use client"
import React, { useState } from 'react'

type Filters = {
  status?: string
  category?: string
  startDate?: string
  endDate?: string
  sort?: string
}

export default function ApplicationFilterBar({ categories = [], onChange }: { categories?: string[], onChange: (f: Filters) => void }) {
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sort, setSort] = useState('newest')

  function apply() {
    onChange({ status: status || undefined, category: category || undefined, startDate: startDate || undefined, endDate: endDate || undefined, sort })
  }

  function clear() {
    setStatus('')
    setCategory('')
    setStartDate('')
    setEndDate('')
    setSort('newest')
    onChange({})
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 items-center">
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className="px-3 py-2 border rounded">
          <option value="">All statuses</option>
          <option>Submitted</option>
          <option>Under Review</option>
          <option>Shortlisted</option>
          <option>Interview Scheduled</option>
          <option>Rejected</option>
          <option>Hired</option>
        </select>

        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="px-3 py-2 border rounded">
          <option value="">All categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <div className="flex items-center gap-2">
          <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} className="px-3 py-2 border rounded" />
          <span className="text-gray-400">to</span>
          <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} className="px-3 py-2 border rounded" />
        </div>

        <select value={sort} onChange={(e)=>setSort(e.target.value)} className="px-3 py-2 border rounded">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <div className="ml-auto flex items-center gap-2">
          <button onClick={clear} className="px-3 py-2 border rounded">Clear</button>
          <button onClick={apply} className="bg-emerald-600 text-white px-4 py-2 rounded">Apply</button>
        </div>
      </div>
    </div>
  )
}
