/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import GalleryGrid from "@/components/GalleryGrid"
import LightboxModal from "@/components/LightboxModal"

import AOS from "aos"
import "aos/dist/aos.css"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("semua")

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  const categories = [
    { key: "semua", label: "Semua" },
    { key: "kegiatan", label: "Kegiatan" },
    { key: "acara", label: "Acara" },
    { key: "ekstrakurikuler", label: "Ekstrakurikuler" },
  ]

  const allImages = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", category: "acara", title: "Wisuda Angkatan", description: "Momen kelulusan yang penuh dengan suka cita dan kebanggaan." },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", category: "acara", title: "Seminar Nasional", description: "Membahas perkembangan teknologi masa depan bersama pakar." },
    { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop", category: "kegiatan", title: "Diskusi Kelompok", description: "Mahasiswa berdiskusi memecahkan studi kasus di ruang kelas." },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", category: "kegiatan", title: "Tur Kampus", description: "Mengenal lebih dekat fasilitas dan lingkungan hijau kampus." },
    { src: "https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=800&auto=format&fit=crop", category: "kegiatan", title: "Belajar Mandiri", description: "Sesi belajar mandiri mahasiswa di taman terbuka yang asri." },
    { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", category: "ekstrakurikuler", title: "Paduan Suara", description: "Persiapan intensif untuk kompetisi paduan suara tingkat nasional." },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", category: "ekstrakurikuler", title: "Rapat Organisasi", description: "Rapat rutin pengurus BEM untuk merencanakan kegiatan sosial." },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", category: "kegiatan", title: "Kuliah Umum", description: "Pemaparan materi berharga oleh dosen tamu dari industri." },
    { src: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800&auto=format&fit=crop", category: "acara", title: "Pameran Inovasi", description: "Menampilkan karya dan proyek akhir terbaik mahasiswa." },
  ]

  const images = activeCategory === "semua"
    ? allImages
    : allImages.filter(img => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-slate-50 pt-28 md:pt-36 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
            data-aos="fade-down"
          >
            Galeri Kegiatan
          </h1>
          <p 
            className="text-lg text-slate-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dokumentasi kegiatan dan momen terbaik kami.
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          className="flex overflow-x-auto pb-4 mb-8 md:mb-12 justify-start md:justify-center gap-3 sm:gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ease-out border ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 border-transparent transform scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200 hover:shadow-md"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div data-aos="fade-up" data-aos-delay="300">
          <GalleryGrid 
            images={images} 
            onSelect={setSelectedImage} 
          />
        </div>

        {selectedImage && (
          <LightboxModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </section>
    </main>
  )
}

export default GalleryPage
