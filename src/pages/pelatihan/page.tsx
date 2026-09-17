import { useState, useEffect } from 'react'
import {
  GraduationCap,
  Users,
  Briefcase,
  UserCheck,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  Search,
  BookOpen,
  ArrowRight,
  X,
  PhoneCall
} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { dataPelatihan, type PelatihanItem } from '@/data/pelatihan'

type CategoryFilter = 'semua' | 'kepala-sekolah' | 'guru' | 'tendik' | 'murid'

export default function PelatihanPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [formatFilter, setFormatFilter] = useState('semua')
  const [selectedPelatihan, setSelectedPelatihan] = useState<PelatihanItem | null>(null)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true
    })
  }, [])

  const categories = [
    { key: 'semua', label: 'Semua Program', icon: Sparkles, count: dataPelatihan.length },
    { key: 'kepala-sekolah', label: 'Kepala Sekolah', icon: Briefcase, count: dataPelatihan.filter(p => p.category === 'kepala-sekolah').length },
    { key: 'guru', label: 'Guru & Pendidik', icon: UserCheck, count: dataPelatihan.filter(p => p.category === 'guru').length },
    { key: 'tendik', label: 'Tenaga Kependidikan', icon: Users, count: dataPelatihan.filter(p => p.category === 'tendik').length },
    { key: 'murid', label: 'Murid & Siswa', icon: GraduationCap, count: dataPelatihan.filter(p => p.category === 'murid').length }
  ]

  const filteredData = dataPelatihan.filter((item) => {
    const matchCategory = activeCategory === 'semua' || item.category === activeCategory
    const matchFormat = formatFilter === 'semua' || item.format.toLowerCase().includes(formatFilter.toLowerCase())
    const matchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetAudience.toLowerCase().includes(searchQuery.toLowerCase())

    return matchCategory && matchFormat && matchQuery
  })

  const getCategoryBadge = (cat: PelatihanItem['category']) => {
    switch (cat) {
      case 'kepala-sekolah':
        return { label: 'Kepala Sekolah', bg: 'bg-amber-50 text-amber-700 border-amber-200' }
      case 'guru':
        return { label: 'Guru & Pendidik', bg: 'bg-blue-50 text-blue-700 border-blue-200' }
      case 'tendik':
        return { label: 'Tenaga Kependidikan', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
      case 'murid':
        return { label: 'Murid & Siswa', bg: 'bg-purple-50 text-purple-700 border-purple-200' }
    }
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRegistrationSuccess(true)
    setTimeout(() => {
      setRegistrationSuccess(false)
      setSelectedPelatihan(null)
    }, 2500)
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-28 md:pt-36 pb-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === HERO SECTION === */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-8 md:p-14 lg:p-16 mb-12 shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs md:text-sm font-semibold mb-6 uppercase tracking-wider"
            >
              <Sparkles size={16} className="text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
              Pusat Pengembangan SDM Vokasi Unggul
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6"
            >
              Program Pelatihan Terpadu Komunitas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300">
                Delta Team
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              Tingkatkan kompetensi dan kapabilitas ekosistem SMK Kabupaten Bogor. Kami menghadirkan pelatihan terarah
              yang dirancang khusus bagi <strong className="text-white">Kepala Sekolah</strong>,{' '}
              <strong className="text-white">Guru</strong>, <strong className="text-white">Tenaga Kependidikan</strong>,
              dan <strong className="text-white">Murid</strong> menuju standar vokasi masa depan.
            </p>

            {/* Quick Stats Banner */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15"
            >
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">8+</div>
                <div className="text-xs text-slate-300 mt-0.5">Program Aktif</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">400+</div>
                <div className="text-xs text-slate-300 mt-0.5">Peserta Terdaftar</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">35+</div>
                <div className="text-xs text-slate-300 mt-0.5">SMK Terhubung</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-amber-300">100%</div>
                <div className="text-xs text-slate-300 mt-0.5">Bersertifikat Resmi</div>
              </div>
            </div>
          </div>
        </div>

        {/* === FILTER CATEGORY TABS === */}
        <div className="flex flex-col gap-6 mb-10" data-aos="fade-up">
          {/* Target Audience Tabs */}
          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key as CategoryFilter)}
                  className={`whitespace-nowrap px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-white' : 'text-blue-600'} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search & Secondary Format Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full sm:w-80 md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul, materi, atau pengajar..."
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

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                Format:
              </span>
              <div className="flex gap-1.5">
                {[
                  { key: 'semua', label: 'Semua' },
                  { key: 'luring', label: 'Luring' },
                  { key: 'hybrid', label: 'Hybrid' },
                  { key: 'daring', label: 'Daring' }
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFormatFilter(f.key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      formatFilter === f.key
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === PROGRAM LIST GRID === */}
        {filteredData.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8" data-aos="fade-up">
            <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">Program Tidak Ditemukan</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Tidak ada pelatihan yang cocok dengan kata kunci atau filter yang Anda pilih. Silakan reset filter atau cari dengan kata kunci lain.
            </p>
            <button
              onClick={() => {
                setActiveCategory('semua')
                setSearchQuery('')
                setFormatFilter('semua')
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item, idx) => {
              const catBadge = getCategoryBadge(item.category)
              const percentage = Math.round((item.registered / item.quota) * 100)

              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100}
                  className="group bg-white rounded-3xl border border-slate-200/80 shadow-[0_2px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Card Header Badges */}
                  <div className="p-6 pb-4 flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border tracking-wide uppercase ${catBadge.bg}`}
                    >
                      {catBadge.label}
                    </span>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {item.format}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="px-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Metadata Specs */}
                    <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-100 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-blue-500 shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={15} className="text-blue-500 shrink-0" />
                        <span>{item.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin size={15} className="text-blue-500 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.instructor.avatar}
                        alt={item.instructor.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-800 truncate">{item.instructor.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">{item.instructor.title}</div>
                      </div>
                    </div>

                    {/* Quota Progress Bar */}
                    <div className="mt-auto mb-4">
                      <div className="flex justify-between items-center text-[11px] text-slate-500 font-medium mb-1.5">
                        <span>Kuota Peserta</span>
                        <span>
                          <strong className="text-slate-800">{item.registered}</strong> / {item.quota} Kursi ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            percentage >= 90
                              ? 'bg-red-500'
                              : percentage >= 70
                              ? 'bg-amber-500'
                              : 'bg-blue-600'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPelatihan(item)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    >
                      <span>Lihat Silabus & Daftar</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* === DETAIL / REGISTRATION MODAL === */}
        {selectedPelatihan && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8 pr-14">
                <button
                  onClick={() => setSelectedPelatihan(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-500/30 text-blue-200 border border-blue-400/30">
                    {selectedPelatihan.category.replace('-', ' ')}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                    {selectedPelatihan.format}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-2">
                  {selectedPelatihan.title}
                </h2>
                <p className="text-blue-100 text-sm opacity-90">
                  Target: {selectedPelatihan.targetAudience}
                </p>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                
                {/* Registration Alert */}
                {registrationSuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold">Pendaftaran Berhasil Dikirim!</div>
                      <div className="text-xs text-emerald-700">
                        Tim narahubung Delta Team akan menghubungi nomor WhatsApp/Email Anda untuk konfirmasi jadwal.
                      </div>
                    </div>
                  </div>
                )}

                {/* Deskripsi */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Tentang Pelatihan
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedPelatihan.description}
                  </p>
                </div>

                {/* Grid Info Ringkas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Durasi</span>
                    <span className="font-bold text-slate-800">{selectedPelatihan.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Mulai Tanggal</span>
                    <span className="font-bold text-slate-800">{selectedPelatihan.startDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Tingkat</span>
                    <span className="font-bold text-slate-800">{selectedPelatihan.level}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Investasi</span>
                    <span className="font-bold text-emerald-600">{selectedPelatihan.investment}</span>
                  </div>
                </div>

                {/* Silabus Materi */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-blue-600" />
                    Silabus & Kurikulum Pelatihan
                  </h4>
                  <div className="space-y-2">
                    {selectedPelatihan.syllabus.map((materi, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                      >
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-medium pt-0.5">{materi}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manfaat & Fasilitas */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    Manfaat & Fasilitas Peserta
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPelatihan.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-700"
                      >
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instruktur */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center gap-4">
                  <img
                    src={selectedPelatihan.instructor.avatar}
                    alt={selectedPelatihan.instructor.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">Pemateri / Instruktur</div>
                    <div className="text-base font-bold text-slate-800">{selectedPelatihan.instructor.name}</div>
                    <div className="text-xs text-slate-500">{selectedPelatihan.instructor.title}</div>
                  </div>
                </div>

                {/* Form Pendaftaran Cepat */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Formulir Registrasi Cepat
                  </h4>
                  <form onSubmit={handleRegisterSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap & Gelar *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Asal SMK / Institusi *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        required
                        placeholder="Nomor WhatsApp (Aktif) *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Alamat Email *"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
                      >
                        Kirim Pendaftaran Sekarang
                      </button>

                      <a
                        href={`https://wa.me/6281293423248?text=Halo%20Delta%20Team,%20saya%20tertarik%20dengan%20pelatihan:%20${encodeURIComponent(
                          selectedPelatihan.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all"
                      >
                        <PhoneCall size={16} />
                        <span>Chat Panitia (WA)</span>
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
