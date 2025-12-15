"use client"
import React, { useState } from 'react'

type Props = {
  onChange: (filters: any) => void
}

export default function JobFilterBar({ onChange }: Props) {
  const [jobType, setJobType] = useState('')
  const [salaryMin, setSalaryMin] = useState('')
  const [salaryMax, setSalaryMax] = useState('')
  const [expLevel, setExpLevel] = useState('')
  const [employerType, setEmployerType] = useState('')

  function apply() {
    onChange({ jobType: jobType || undefined, salaryMin: salaryMin ? Number(salaryMin) : undefined, salaryMax: salaryMax ? Number(salaryMax) : undefined, expLevel: expLevel || undefined, employerType: employerType || undefined })
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 items-center">
        <select value={jobType} onChange={(e)=>setJobType(e.target.value)} className="px-3 py-2 border rounded">
          <option value="">All job types</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>

        <div className="flex items-center gap-2">
          <input value={salaryMin} onChange={(e)=>setSalaryMin(e.target.value)} placeholder="Min salary" className="px-3 py-2 border rounded w-28" />
          <span className="text-gray-400">—</span>
          <input value={salaryMax} onChange={(e)=>setSalaryMax(e.target.value)} placeholder="Max salary" className="px-3 py-2 border rounded w-28" />
        </div>

        <select value={expLevel} onChange={(e)=>setExpLevel(e.target.value)} className="px-3 py-2 border rounded">
          <option value="">Experience level</option>
          <option>Entry</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>

        <select value={employerType} onChange={(e)=>setEmployerType(e.target.value)} className="px-3 py-2 border rounded">
          <option value="">Employer type</option>
          <option>Startup</option>
          <option>Corporate</option>
          <option>Agency</option>
        </select>

        <div className="ml-auto">
          <button onClick={apply} className="bg-emerald-600 text-white px-4 py-2 rounded">Apply</button>
        </div>
      </div>
    </div>
  )
}
