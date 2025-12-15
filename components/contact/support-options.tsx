import React from 'react'
import { LifeBuoy, Bug, User } from 'lucide-react'

const options = [
  { icon: <LifeBuoy className="text-emerald-600" />, title: 'General Support', desc: 'Questions about accounts, applications, or site use.', href: '/contact' },
  { icon: <Bug className="text-emerald-600" />, title: 'Technical Issues', desc: 'Report bugs or technical problems with the site.', href: '/contact' },
  { icon: <User className="text-emerald-600" />, title: 'Career Guidance', desc: 'Resume tips, interview prep, and job search support.', href: '/careers' }
]

export default function SupportOptions() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-emerald-700">Support Options</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {options.map((o, i) => (
            <a key={i} href={o.href} className="block p-5 border rounded-lg hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-50 rounded-md">{o.icon}</div>
                <div>
                  <h4 className="font-semibold">{o.title}</h4>
                  <p className="text-gray-600 mt-1">{o.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
