"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I apply for a job?',
    a: 'Browse the job listings, click "Apply", and follow the employer instructions. You can also upload your CV to streamline applications.'
  },
  {
    q: 'Do you charge fees to applicants?',
    a: 'No. We do not charge applicants any fees to use our platform.'
  },
  {
    q: 'How can I follow up on an application?',
    a: 'You can message the employer through the application portal or contact support for help locating your application.'
  },
  {
    q: 'What should I do if I experience technical issues?',
    a: 'Report technical issues via the Technical Support option below or email support so our engineers can investigate.'
  }
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-700">Frequently Asked Questions</h2>
        <p className="mt-2 text-gray-600">Quick answers to common questions for job seekers.</p>

        <div className="mt-8 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx
            return (
              <div key={idx} className="border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 md:p-5 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <div className="text-left">
                    <h3 className="text-md md:text-lg font-medium text-gray-900">{f.q}</h3>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-emerald-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <div className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionProperty: 'max-height, opacity' }}>
                  <div className="pt-2">{f.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
