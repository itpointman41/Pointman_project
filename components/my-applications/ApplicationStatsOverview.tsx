import React from 'react'
import { FileText, Clock, CheckCircle, Star } from 'lucide-react'

export default function ApplicationStatsOverview({ total = 0, underReview = 0, interviews = 0, offers = 0 }: { total?: number, underReview?: number, interviews?: number, offers?: number }) {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
          <div className="p-2 bg-emerald-50 rounded-md"><FileText className="text-emerald-600" /></div>
          <div>
            <div className="text-sm text-gray-500">Total</div>
            <div className="text-xl font-semibold">{total}</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
          <div className="p-2 bg-emerald-50 rounded-md"><Clock className="text-emerald-600" /></div>
          <div>
            <div className="text-sm text-gray-500">Under Review</div>
            <div className="text-xl font-semibold">{underReview}</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
          <div className="p-2 bg-emerald-50 rounded-md"><Star className="text-emerald-600" /></div>
          <div>
            <div className="text-sm text-gray-500">Interviews</div>
            <div className="text-xl font-semibold">{interviews}</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
          <div className="p-2 bg-emerald-50 rounded-md"><CheckCircle className="text-emerald-600" /></div>
          <div>
            <div className="text-sm text-gray-500">Offers / Shortlist</div>
            <div className="text-xl font-semibold">{offers}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
