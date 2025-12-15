"use client"
import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{[k:string]:string}>({})
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const e: {[k:string]:string} = {}
    if (!name.trim()) e.name = 'Please enter your full name.'
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email.'
    if (!subject.trim()) e.subject = 'Please add a subject.'
    if (!message.trim() || message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      // Integrate with backend action or API route here.
      await new Promise((r) => setTimeout(r, 700))
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setErrors({})
      alert('Message submitted — we will get back to you soon.')
    } catch (err) {
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input value={subject} onChange={(e)=>setSubject(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
            {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={6} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          <div className="mt-6 text-right">
            <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
