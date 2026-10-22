import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import GalleryGrid from "@/components/GalleryGrid"
import LightboxModal from "@/components/LightboxModal"
import { deltaPhotos } from "@/data/deltaPhotos"

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
    { key: "delta", label: "Delta Team" },
  ]

  const allImages = deltaPhotos

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

        {/* Category Tabs using shadcn Button */}
        <div
          className="flex overflow-x-auto pb-4 mb-8 md:mb-12 justify-start md:justify-center gap-3 sm:gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          data-aos="fade-up"
          data-aos-delay="200"
          role="group"
          aria-label="Kategori Galeri"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key
            return (
              <Button
                key={cat.key}
                variant={isActive ? "default" : "outline"}
                size="default"
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ease-out border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 border-transparent transform scale-105 hover:from-blue-700 hover:to-indigo-700"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200 hover:shadow-md"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </Button>
            )
          })}
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
