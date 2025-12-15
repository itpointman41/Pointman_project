import React from 'react'
import Link from 'next/link'

export default function ContactCallToAction() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Looking for a job?</h3>
            <p className="mt-2 text-sm opacity-90">Browse our latest openings and apply to roles that match your skills.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/jobs" className="bg-white text-emerald-600 px-4 py-2 rounded">Browse Jobs</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
