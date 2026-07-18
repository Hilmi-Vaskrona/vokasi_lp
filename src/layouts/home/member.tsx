import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { schools } from '@/data/schools'
import { trackClick } from '@/utils/clickTracker'
import TopSchools from '@/components/TopSchools'

export default function MemberDelta() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const grouped = Array.from({ length: 5 }, (_, i) =>
    schools.slice(i * 7, i * 7 + 7)
  )

  return (
    <section className='bg-[#f7f7f7] py-20 flex flex-col items-center text-center px-4 md:px-8 overflow-hidden w-full'>
      {/* Judul Elegan */}
      <div className='mb-10 w-full'>
        <h2 className="text-3xl md:text-5xl font-light tracking-wide text-gray-700 relative">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Anggota Komunitas Kami
          </span>
        </h2>
        <div className='h-[2px] z-0 w-24 mx-auto mt-4 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 rounded-full'></div>
        <p className='text-gray-500 mt-4 text-sm md:text-lg italic px-2'>
          35 Sekolah Menengah Kejuruan Bogor yang berkolaborasi aktif.
        </p>
      </div>

      {/* Top Sekolah Terpopuler */}
      {mounted && <TopSchools />}

      {/* 5 baris marquee */}
      <div className='flex flex-col gap-6 md:gap-8 w-full max-w-[100vw] overflow-hidden'>
        {grouped.map((row, i) => (
          <Marquee
            key={i}
            speed={40 + i * 5}
            gradient
            direction={i % 2 === 0 ? 'left' : 'right'}
            pauseOnHover
          >
            {row.map((s) => (
              <Link
                key={s.id}
                to="/profile"
                onClick={() => trackClick(s.id)}
                className='flex flex-col items-center justify-center mx-10 group'
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className='h-16 w-16 object-contain mb-2 drop-shadow-md transition-transform group-hover:scale-110'
                  loading='lazy'
                />
                <p className='text-sm font-medium text-gray-700 whitespace-nowrap group-hover:text-blue-600 transition-colors'>
                  {s.name}
                </p>
              </Link>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  )
}
