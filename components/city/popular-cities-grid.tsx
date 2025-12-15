"use client"
import React from 'react'

type Props = {
  cities: string[]
  onSelect: (city: string) => void
}

export default function PopularCitiesGrid({ cities = [], onSelect }: Props) {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-lg font-semibold text-emerald-700">Popular Cities</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cities.map((c) => (
            <button key={c} onClick={() => onSelect(c)} className="p-4 bg-white border rounded-lg hover:shadow-md text-left">
              <div className="text-lg font-medium">{c}</div>
              <div className="text-sm text-gray-500 mt-1">Explore jobs in {c}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
