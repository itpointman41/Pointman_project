"use client"
import React from 'react'
import Link from 'next/link'
import { MapPin, Briefcase, DollarSign } from 'lucide-react'

type Job = {
  id: string
  title: string
  company: string
  location: string
  salary?: string
}

export default function JobResultsList({ jobs = [] }: { jobs?: Job[] }) {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <div key={j.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{j.title}</h3>
                  <p className="text-sm text-gray-600">{j.company} • <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{j.location}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-600 font-medium">{j.salary || 'Competitive'}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" /> Employment</span>
                  <span className="inline-flex items-center gap-1"><DollarSign className="h-4 w-4" /> Salary info</span>
                </div>
                <Link href={`/jobs/${j.id}`} className="bg-emerald-600 text-white px-3 py-1 rounded">View Job</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
