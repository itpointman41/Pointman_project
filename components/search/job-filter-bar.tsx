"use client"
import React, { useState } from 'react'

type Filter = {
  jobType?: string
  industry?: string
  salaryMin?: number
  salaryMax?: number
}

type Props = {
  industries?: string[]
  onChange: (filters: Filter) => void
}

export default function JobFilterBar({ industries = [], onChange }: Props) {
  const [jobType, setJobType] = useState('')
  const [industry, setIndustry] = useState('')
  const [salaryMin, setSalaryMin] = useState('')
  const [salaryMax, setSalaryMax] = useState('')

  function apply() {
    onChange({ jobType: jobType || undefined, industry: industry || undefined, salaryMin: salaryMin ? Number(salaryMin) : undefined, salaryMax: salaryMax ? Number(salaryMax) : undefined })
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 items-center">
        <div className="flex items-center gap-2">
          <select value={jobType} onChange={(e)=>setJobType(e.target.value)} className="px-3 py-2 border rounded">
            <option value="">All types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <select value={industry} onChange={(e)=>setIndustry(e.target.value)} className="px-3 py-2 border rounded">
            <option value="">All industries</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input value={salaryMin} onChange={(e)=>setSalaryMin(e.target.value)} placeholder="Min salary" className="px-3 py-2 border rounded w-28" />
          <span className="text-gray-400">—</span>
          <input value={salaryMax} onChange={(e)=>setSalaryMax(e.target.value)} placeholder="Max salary" className="px-3 py-2 border rounded w-28" />
        </div>

        <div className="ml-auto">
          <button onClick={apply} className="bg-emerald-600 text-white px-4 py-2 rounded">Apply</button>
        </div>
      </div>
    </div>
  )
}
