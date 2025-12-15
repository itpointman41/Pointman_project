import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactInformation() {
  return (
    <section className="bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4">
            <Mail className="text-emerald-600" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">support@recplatform.example</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-emerald-600" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-emerald-600" />
            <div>
              <h4 className="font-semibold">Office</h4>
              <p className="text-gray-600">123 Talent Ave, Suite 400<br/>Cityville, ST 12345</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-emerald-600" />
            <div>
              <h4 className="font-semibold">Hours</h4>
              <p className="text-gray-600">Mon–Fri: 9:00 AM — 6:00 PM (Local Time)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
