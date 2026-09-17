import { useState, useEffect } from 'react'
import {
  Briefcase,
  MapPin,
  Calendar,
  Search,
  ExternalLink,
  CheckCircle2,
  X,
  Mail
} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { dataLowongan, type LowonganItem } from '@/data/lowongan'

type CategoryFilter = 'semua' | 'Guru Produktif' | 'Guru Umum / BK' | 'Tenaga Kependidikan' | 'Teknisi & Laboran'

export default function LowonganPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('semua')
  const [selectedSchool, setSelectedSchool] = useState('semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<LowonganItem | null>(null)
  const [applicationSuccess, setApplicationSuccess] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true
    })
  }, [])

  // List of unique schools offering vacancies
  const schoolList = Array.from(new Set(dataLowongan.map((j) => j.schoolName)))

  const categories = [
    { key: 'semua', label: 'Semua Bidang' },
    { key: 'Guru Produktif', label: 'Guru Kejuruan / Produktif' },
    { key: 'Guru Umum / BK', label: 'Guru Umum / BK' },
    { key: 'Tenaga Kependidikan', label: 'Tenaga Kependidikan (TU)' },
    { key: 'Teknisi & Laboran', label: 'Teknisi & Laboran' }
  ]

  const filteredJobs = dataLowongan.filter((job) => {
    const matchCategory = activeCategory === 'semua' || job.category === activeCategory
    const matchSchool = selectedSchool === 'semua' || job.schoolName === selectedSchool
    const matchQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.schoolLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchCategory && matchSchool && matchQuery
  })

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setApplicationSuccess(true)
    setTimeout(() => {
      setApplicationSuccess(false)
      setSelectedJob(null)
    }, 2500)
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-28 md:pt-36 pb-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === HERO BANNER === */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white p-8 md:p-14 mb-12 shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 -mb-16 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs md:text-sm font-semibold mb-6 uppercase tracking-wider"
            >
              <Briefcase size={16} className="text-blue-400" />
              Bursa Karir & Talenta SMK Delta
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5"
            >
              Peluang Karir & Lowongan Kerja{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-emerald-300">
                SMK Mitra Bogor
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              Temukan peluang pengabdian dan karir terbaik di lingkungan sekolah menengah kejuruan mitra Komunitas Delta
              Team. Mulai dari posisi tenaga pengajar kejuruan, staf administrasi tata usaha, hingga teknisi laboratorium.
            </p>

            {/* Quick Metrics */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg"
            >
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">{dataLowongan.length}</div>
                <div className="text-xs text-slate-300 mt-0.5">Lowongan Terbuka</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">{schoolList.length}</div>
                <div className="text-xs text-slate-300 mt-0.5">Sekolah Perekrut</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-300">Resmi</div>
                <div className="text-xs text-slate-300 mt-0.5">Terverifikasi Komunitas</div>
              </div>
            </div>
          </div>
        </div>

        {/* === FILTER & SEARCH CONTROLS === */}
        <div className="flex flex-col gap-5 mb-10" data-aos="fade-up">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key as CategoryFilter)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search Bar & School Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            {/* Search Keyword */}
            <div className="relative md:col-span-2">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari posisi pekerjaan, sekolah mitra, atau keahlian..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* School Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700 cursor-pointer"
              >
                <option value="semua">Semua Sekolah Mitra</option>
                {schoolList.map((sch) => (
                  <option key={sch} value={sch}>
                    {sch}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* === JOB LISTINGS === */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8" data-aos="fade-up">
            <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">Belum Ada Lowongan yang Sesuai</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Tidak ditemukan lowongan pekerjaan dengan kriteria pencarian Anda. Silakan ubah kata kunci atau pilih sekolah lain.
            </p>
            <button
              onClick={() => {
                setActiveCategory('semua')
                setSelectedSchool('semua')
                setSearchQuery('')
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, idx) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 2) * 100}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* School Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0 shadow-sm">
                      <img
                        src={job.schoolLogo}
                        alt={job.schoolName}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback icon if image fails
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-blue-600 font-bold uppercase tracking-wider mb-0.5">
                        <span>{job.schoolName}</span>
                        {job.schoolWebsite && (
                          <a
                            href={job.schoolWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            title="Buka Website Sekolah"
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                        <MapPin size={13} className="text-slate-400 shrink-0" />
                        <span className="truncate">{job.schoolLocation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pills / Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {job.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {job.type}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {job.experienceLevel}
                    </span>
                  </div>

                  {/* Description Preview */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-5">
                    {job.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Batas Lamaran:</div>
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mt-0.5">
                      <Calendar size={13} className="text-amber-500" />
                      <span>{job.deadline}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all text-center"
                  >
                    Detail & Lamar Sekarang →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === DETAIL / LAMAR MODAL === */}
        {selectedJob && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-6 md:p-8 pr-14">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={selectedJob.schoolLogo}
                      alt={selectedJob.schoolName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 font-bold uppercase tracking-wider">{selectedJob.schoolName}</div>
                    <div className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{selectedJob.schoolLocation}</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-2">
                  {selectedJob.title}
                </h2>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-white/15 text-white font-medium">
                    {selectedJob.type}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/30 text-blue-200 font-medium border border-blue-400/20">
                    {selectedJob.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/30 text-emerald-200 font-medium">
                    Batas: {selectedJob.deadline}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                
                {/* Alert Success */}
                {applicationSuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold">Lamaran Anda Berhasil Dikirim!</div>
                      <div className="text-xs text-emerald-700">
                        Berkas Anda telah diteruskan ke bagian rekrutmen {selectedJob.schoolName}. Silakan pantau email/WhatsApp Anda.
                      </div>
                    </div>
                  </div>
                )}

                {/* Deskripsi Posisi */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Deskripsi Pekerjaan
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Tanggung Jawab Utama */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Tanggung Jawab Utama
                  </h4>
                  <div className="space-y-2">
                    {selectedJob.responsibilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Persyaratan & Kualifikasi */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Kualifikasi & Persyaratan
                  </h4>
                  <div className="space-y-2">
                    {selectedJob.requirements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefit & Fasilitas */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Benefit & Fasilitas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJob.benefits.map((item, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center gap-2"
                      >
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gaji & Rentang */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900">
                  <span className="font-bold block mb-1">Kompensasi / Estimasi Gaji:</span>
                  <span>{selectedJob.salaryRange}</span>
                </div>

                {/* Cara Melamar Langsung */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                  <span className="font-bold block mb-1">Petunjuk Pengiriman Berkas Mandiri:</span>
                  <span>{selectedJob.howToApply}</span>
                  <div className="mt-2 flex flex-wrap gap-4 font-semibold text-slate-800">
                    <div>📧 Email: <a href={`mailto:${selectedJob.contactEmail}`} className="text-blue-600 underline">{selectedJob.contactEmail}</a></div>
                    <div>📞 Kontak: {selectedJob.contactPhone}</div>
                  </div>
                </div>

                {/* Formulir Lamaran Cepat */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Kirim Lamaran Cepat Melalui Sistem
                  </h4>
                  <form onSubmit={handleApplySubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Nomor Telepon / WhatsApp *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        placeholder="Alamat Email Aktif *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Pendidikan Terakhir / Jurusan"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        required
                        placeholder="Link Google Drive CV & Portofolio (Pastikan Akses Publik) *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
                      >
                        Kirim Berkas Lamaran Sekarang
                      </button>

                      <a
                        href={`mailto:${selectedJob.contactEmail}?subject=Lamaran%20Pekerjaan%20-%20${encodeURIComponent(
                          selectedJob.title
                        )}`}
                        className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm transition-all"
                      >
                        <Mail size={16} />
                        <span>Kirim via Email</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
