/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import { useEffect, useState } from 'react'
import Contact from './pages/contact'
import Profile from './pages/profile/page'
import BlogPage from './pages/blog/page'
import PageNews from './pages/berita/page'
import GalleryPage from './pages/gallery/page'
import Unduhan from './pages/unduhan/page'
import PelatihanPage from './pages/pelatihan/page'
import LowonganPage from './pages/lowongan/page'
import BlogDetailPage from './pages/blog/detail/detail'
import Footer from './components/footer'
import { Menu, X } from 'lucide-react'


function App () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const [activeIndex, setActiveIndex] = useState(0)

  const menus = [
    'Beranda',
    'Profile',
    'Blog',
    'Berita',
    'Unduhan',
    'Gallery',
    'Pelatihan',
    'Lowongan',
    'Kontak'
  ]
  const menuPaths = [
    '/',
    '/profile',
    '/blog',
    '/berita',
    '/unduhan',
    '/gallery',
    '/pelatihan',
    '/lowongan',
    '/contact'
  ]

  const location = useLocation()
  useEffect(() => {
    const idx = menuPaths.findIndex(
      path =>
        location.pathname === path ||
        (path !== '/' && location.pathname.startsWith(path))
    )
    setActiveIndex(idx === -1 ? 0 : idx)
  }, [location.pathname])

  // close mobile menu on navigation
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav className='w-full fixed h-20 z-[999] flex justify-center items-center'>
        <div
          className={`transition-all flex justify-between items-center relative ${
            isScrolled
              ? 'w-[96%] max-w-7xl h-16 bg-white/70 top-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/40'
              : 'w-full bg-transparent top-0'
          } px-4 md:px-6 py-4`}
        >
          <div className='flex items-center gap-2 shrink-0'>
            <img src='/assets/logo_delta2.png' alt='Delta Team Logo' className='w-9 h-9 md:w-11 md:h-11 object-contain' />
            <span className='text-lg md:text-xl font-bold text-gray-900 tracking-tight'>Delta Team</span>
          </div>

          <div className='flex items-center justify-end relative'>
            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center gap-0.5 xl:gap-1'>
              {menus.map((menu, index) => (
                <Link
                  to={menuPaths[index]}
                  key={index}
                  className={`relative z-10 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full font-semibold text-xs xl:text-sm transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/80'
                  }`}
                >
                  {menu}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className='lg:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none'
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`fixed top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-xl flex flex-col items-start gap-1 py-4 px-4 lg:hidden transition-all duration-300 transform ${
            mobileOpen ? 'translate-y-0 opacity-100 visible z-[998]' : '-translate-y-full opacity-0 invisible -z-10'
          }`}
        >
          {menus.map((menu, index) => (
            <Link
              to={menuPaths[index]}
              key={index}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 ${
                activeIndex === index
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {menu}
            </Link>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/blog/:id'} element={<BlogDetailPage />} />

        <Route path={'/berita'} element={<PageNews />} />
        <Route path={'/unduhan'} element={<Unduhan />} />
        <Route path={'/gallery'} element={<GalleryPage />} />
        <Route path={'/pelatihan'} element={<PelatihanPage />} />
        <Route path={'/lowongan'} element={<LowonganPage />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </>
  )
}

// Ubah BrowserRouter jadi Router agar useLocation bisa dipakai di App
export default function WrappedApp () {
  return (
    <Router>
      <App />
      <Footer />

    </Router>
  )
}
