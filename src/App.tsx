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
import BlogDetailPage from './pages/blog/detail/detail'
import Footer from './components/footer'
import { Menu, X } from 'lucide-react'


function App () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      console.log('Scroll Y:', scrollY)
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
  // indicator/menuRefs removed to keep navbar simple

  const menus = [
    'Beranda',
    'Profile',
    'Blog',
    'Berita',
    'Unduhan',
    'Gallery',
    'Kontak'
  ]
  const menuPaths = [
    '/',
    '/profile',
    '/blog',
    '/berita',
    '/unduhan',
    '/gallery',
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
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav className='w-full fixed h-20 z-[999] flex justify-center items-center'>
        <div
          className={`h-full transition-all flex justify-between items-center relative ${
            isScrolled
              ? 'w-[95%] md:w-4/5 h-16 bg-white/50 top-4 rounded-2xl shadow-xl backdrop-blur-md'
              : 'w-full bg-transparent top-0'
          } px-4 md:px-6 py-4`}
        >
          <div className='flex items-center gap-2'>
            <img src='/assets/delta.png' alt='Delta Logo' className='w-10 h-10 md:w-12 md:h-12 object-contain' />
            <span className='text-xl md:text-2xl font-bold text-gray-900'>Delta</span>
          </div>

          <div className='flex items-center justify-end relative'>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-1'>
              {menus.map((menu, index) => (
                <Link
                  to={menuPaths[index]}
                  key={index}
                  className={`relative z-10 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {menu}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className='md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none'
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`fixed top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-xl flex flex-col items-start gap-1 py-4 px-4 md:hidden transition-all duration-300 transform ${
            mobileOpen ? 'translate-y-0 opacity-100 visible z-[998]' : '-translate-y-full opacity-0 invisible -z-10'
          }`}
        >
          {menus.map((menu, index) => (
            <Link
              to={menuPaths[index]}
              key={index}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
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
