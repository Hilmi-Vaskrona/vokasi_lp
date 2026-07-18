import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTopSchools, trackClick } from '@/utils/clickTracker'
import type { School } from '@/data/schools'

const ordinal = ['1st', '2nd', '3rd', '4th', '5th']

export default function TopSchools() {
  const [topSchools, setTopSchools] = useState<(School & { clicks: number })[]>([])

  useEffect(() => {
    setTopSchools(getTopSchools(5))
  }, [])

  if (topSchools.length === 0 || topSchools.every(s => s.clicks === 0)) {
    return null
  }

  return (
    <div className="mb-8 w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-5">
        <span className="text-lg md:text-xl font-semibold text-gray-700">
          Sekolah Terpopuler
        </span>
        <div className="h-[2px] w-16 mx-auto mt-3 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {topSchools.map((school, i) => (
          <Link
            key={school.id}
            to="/profile"
            onClick={() => trackClick(school.id)}
            className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:-translate-y-1"
          >
            <span className="text-xs font-bold text-gray-400 tracking-wider mb-2">
              {ordinal[i]}
            </span>
            <img
              src={school.logo}
              alt={school.name}
              className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <p className="text-sm font-medium text-gray-700 text-center leading-tight line-clamp-2">
              {school.name}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {school.clicks} klik
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
