import React from 'react'

export default function CitySearchHeader() {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700">Search Jobs by City</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Find jobs available in your city. Search by city name or pick from popular cities below.
        </p>
      </div>
    </header>
  )
}
