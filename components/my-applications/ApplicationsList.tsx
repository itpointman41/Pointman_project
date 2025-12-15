"use client"
import React from 'react'
import ApplicationStatusBadge from './ApplicationStatusBadge'
import Link from 'next/link'

type AppItem = {
  id: string
  title: string
  company: string
  location: string
  dateApplied: string
  status: string
  category?: string
}

export default function ApplicationsList({ items = [] }: { items?: AppItem[] }) {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.company} • {item.location}</p>
              <p className="text-sm text-gray-500 mt-1">Applied on <time dateTime={item.dateApplied}>{new Date(item.dateApplied).toISOString().split('T')[0]}</time></p>
            </div>

            <div className="flex items-center gap-4">
              <ApplicationStatusBadge status={item.status} />
              <Link href={`/applications/${item.id}`} className="px-3 py-2 bg-emerald-600 text-white rounded">View Application</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
