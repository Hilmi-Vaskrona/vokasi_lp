import { useState } from "react"
import { motion } from "framer-motion"
import { deltaTestimonials, type DeltaTestimonial } from "@/data/deltaTestimonials"
import { GraduationCap, Quote, ExternalLink, Play } from "lucide-react"

export default function PengalamanSection() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  return (
    <section className="bg-[#f7f7f7] py-20 px-4 md:px-8 w-full flex flex-col items-center overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mb-14">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-600 border border-indigo-200/80 shadow-xs">
          <GraduationCap className="w-3.5 h-3.5" />
          Pengalaman
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-wide text-gray-700 relative">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Testimoni Kepala Sekolah SMK
          </span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-400 rounded-full mt-2"></div>
        <p className="text-gray-500 text-sm md:text-base italic px-4 mt-2">
          Apresiasi, pengalaman, dan pandangan langsung para Kepala Sekolah SMK se-Kabupaten Bogor atas sinergi bersama Delta Team.
        </p>
      </div>

      {/* Grid of 3 Testimonial Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full">
        {deltaTestimonials.map((item: DeltaTestimonial, index: number) => {
          const isPlaying = playingVideoId === item.id

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-5 shadow-[0_4px_22px_rgba(0,0,0,0.06)] border border-gray-200/80 hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Video Player Box */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black mb-5 shadow-sm">
                  <video
                    src={item.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingVideoId(item.id)}
                    onPause={() => {
                      if (playingVideoId === item.id) setPlayingVideoId(null)
                    }}
                    className="w-full h-full object-cover"
                  >
                    Browser Anda tidak mendukung tag video.
                  </video>

                  {/* Play Hint Overlay before interaction */}
                  {!isPlaying && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20">
                      <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg transform scale-90 transition-transform">
                        <Play className="w-5 h-5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Principal Info */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-medium text-gray-500">
                      {item.school}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug pt-1">
                    {item.name}
                  </h3>
                </div>

                {/* Quote Box */}
                <div className="relative bg-slate-50/80 rounded-2xl p-4 border border-slate-100 text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  <Quote className="w-4 h-4 text-indigo-400 mb-1.5 opacity-60" />
                  <p className="italic">“{item.quote}”</p>
                </div>
              </div>

              {/* Card Footer / Cloudinary Link */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium">
                  Video Testimoni Resmi
                </span>
                <a
                  href={item.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Buka Player
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
