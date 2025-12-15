'use client'

import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Product Manager at Tech Co',
    content: 'Found my dream job through this platform! The process was seamless and the support team was incredibly helpful.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Senior Developer',
    content: 'Best recruitment platform I&apos;ve used. Great job listings, easy application process, and got hired within 3 weeks!',
    rating: 5,
    image: '👨‍💻',
  },
  {
    id: 3,
    name: 'Emma Davis',
    title: 'UX Designer',
    content: 'Amazing platform with quality job opportunities. Found a role that perfectly matched my skills and career goals.',
    rating: 5,
    image: '👩‍🎨',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our users have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-200"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-green-500 text-green-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-green-50 to-green-100 rounded-xl p-12 border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-green-600 mb-2">4.8/5</p>
              <p className="text-gray-700 font-semibold">Average Rating</p>
              <p className="text-gray-600 text-sm">From 50K+ reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600 mb-2">98%</p>
              <p className="text-gray-700 font-semibold">Users Satisfied</p>
              <p className="text-gray-600 text-sm">Would recommend us</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600 mb-2">2.5M+</p>
              <p className="text-gray-700 font-semibold">Jobs Filled</p>
              <p className="text-gray-600 text-sm">Successful placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
