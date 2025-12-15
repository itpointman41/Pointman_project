"use client"
import React from 'react'

export default function CityPaginationControls({ current = 1, total = 1, onPage }: { current?: number, total?: number, onPage: (p:number)=>void }) {
  const pages = Array.from({length: total}, (_,i)=>i+1)
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-center justify-center gap-2">
        <button disabled={current<=1} onClick={()=>onPage(current-1)} className="px-3 py-1 rounded border bg-white">Prev</button>
        {pages.map(p => (
          <button key={p} onClick={()=>onPage(p)} className={`px-3 py-1 rounded ${p===current? 'bg-emerald-600 text-white':'bg-white border'}`}>{p}</button>
        ))}
        <button disabled={current>=total} onClick={()=>onPage(current+1)} className="px-3 py-1 rounded border bg-white">Next</button>
      </div>
    </div>
  )
}
