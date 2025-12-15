"use client"
import React from 'react'

type Props = {
  specs: string[]
  onSelect: (spec: string) => void
}

export default function SpecializationListSection({ specs = [], onSelect }: Props) {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-lg font-semibold text-emerald-700">Specializations</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {specs.map(s => (
            <button key={s} onClick={() => onSelect(s)} className="p-4 bg-white border rounded-lg hover:shadow-md text-left">
              <div className="text-lg font-medium">{s}</div>
              <div className="text-sm text-gray-500 mt-1">View {s} openings</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
