"use client"
import React from 'react'

type Props = {
  categories: string[]
  onSelect: (category: string) => void
}

export default function CategoryListSection({ categories = [], onSelect }: Props) {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-lg font-semibold text-emerald-700">Popular categories</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button key={c} onClick={() => onSelect(c)} className="px-4 py-2 bg-white border rounded-full hover:bg-emerald-50">
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
