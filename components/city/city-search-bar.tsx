"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'

type Props = {
  popular?: string[]
  onSearch: (city: string) => void
}

export default function CitySearchBar({ popular = [], onSearch }: Props) {
  const [city, setCity] = useState('')

  function submit() {
    onSearch(city.trim())
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-3 items-stretch">
        <div className="flex-1 flex items-center gap-2">
          <Search className="text-gray-400" />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Enter city name, e.g. New York"
            className="w-full border-0 focus:ring-0 outline-none"
          />
        </div>

        <select onChange={(e)=>setCity(e.target.value)} value={city} className="w-56 border rounded-md px-3 py-2">
          <option value="">Popular cities</option>
          {popular.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <button onClick={submit} className="bg-emerald-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  )
}
