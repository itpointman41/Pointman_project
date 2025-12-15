import React from 'react'

type Props = { status: string }

export default function ApplicationStatusBadge({ status }: Props) {
  const map: Record<string, string> = {
    Submitted: 'bg-gray-200 text-gray-800',
    'Under Review': 'bg-blue-100 text-blue-800',
    Shortlisted: 'bg-purple-100 text-purple-800',
    'Interview Scheduled': 'bg-yellow-100 text-yellow-800',
    Rejected: 'bg-red-100 text-red-800',
    Hired: 'bg-emerald-100 text-emerald-800'
  }
  const cls = map[status] || 'bg-gray-100 text-gray-800'
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${cls}`}>{status}</span>
}
