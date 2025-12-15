"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'

type Props = {
  categories: string[]
  onSearch: (query: string, category?: string) => void
}

export default function JobSearchBar({ categories = [], onSearch }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  function submit() {
    onSearch(query.trim(), category || undefined)
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-3 items-stretch">
        <div className="flex-1 flex items-center gap-2">
          <Search className="text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Job title, e.g. Nurse, Engineer, Waiter"
            className="w-full border-0 focus:ring-0 outline-none"
          />
        </div>

        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-48 border rounded-md px-3 py-2">
          <option value="">All categories</option>
          {categories.map((c)=> <option key={c} value={c}>{c}</option>)}
        </select>

        <button onClick={submit} className="bg-emerald-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  )
}
