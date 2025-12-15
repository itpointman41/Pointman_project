"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'

type Props = {
  popular?: string[]
  onSearch: (specialization: string) => void
}

export default function SpecializationSearchBar({ popular = [], onSearch }: Props) {
  const [spec, setSpec] = useState('')

  function submit() {
    onSearch(spec.trim())
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-3 items-stretch">
        <div className="flex-1 flex items-center gap-2">
          <Search className="text-gray-400" />
          <input
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Specialization, e.g. Nurse, Welder, Backend Developer"
            className="w-full border-0 focus:ring-0 outline-none"
          />
        </div>

        <select onChange={(e)=>setSpec(e.target.value)} value={spec} className="w-72 border rounded-md px-3 py-2">
          <option value="">Popular specializations</option>
          {popular.map(p => <option key={p} value={p}>{p}</option>)}
        </select>

        <button onClick={submit} className="bg-emerald-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  )
}
