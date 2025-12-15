import React from 'react'
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'

const socials = [
  { icon: <Facebook />, href: '#', label: 'Facebook' },
  { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram />, href: '#', label: 'Instagram' },
  { icon: <Twitter />, href: '#', label: 'Twitter' }
]

export default function SocialMediaSection() {
  return (
    <section className="py-8 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="text-lg font-semibold text-emerald-700">Follow us</h4>
        <div className="mt-4 flex items-center justify-center gap-6">
          {socials.map((s, i) => (
            <a key={i} href={s.href} aria-label={s.label} className="text-gray-600 hover:text-emerald-600">
              <div className="p-2 rounded-full border bg-white w-10 h-10 flex items-center justify-center">{s.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
