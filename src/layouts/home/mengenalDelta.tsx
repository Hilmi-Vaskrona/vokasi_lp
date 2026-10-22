import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { deltaVideos, type DeltaVideo } from "@/data/deltaVideos"
import { Volume2, VolumeX, ExternalLink, Play, Sparkles } from "lucide-react"

export default function MengenalDelta() {
  const [activeId, setActiveId] = useState<string>("pembina")
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  const currentVideo: DeltaVideo =
    deltaVideos.find((v) => v.id === activeId) || deltaVideos[0]

  // IntersectionObserver untuk autoplay otomatis saat section masuk ke viewport (muted)
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Autoplay hanya bisa berjalan otomatis jika muted
            video.muted = true
            setIsMuted(true)
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Browser policy fallback
                setIsPlaying(false)
              })
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [activeId])

  const handleSelectVideo = (id: string) => {
    setActiveId(id)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = isMuted
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const handleManualPlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      ref={containerRef}
      className="bg-[#f7f7f7] py-20 px-4 md:px-8 w-full flex flex-col items-center overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mb-10">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          Mengenal Delta
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-wide text-gray-700 relative">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Paparan Pengenalan Delta Team
          </span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mt-2"></div>
        <p className="text-gray-500 text-sm md:text-base italic px-4 mt-2">
          Dengarkan langsung visi, misi, dan arah perjuangan komunitas vokasi dari jajaran dewan pembina, ketua, dan pendiri Delta.
        </p>
      </div>

      {/* Tab Switcher Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 max-w-4xl w-full">
        {deltaVideos.map((item) => {
          const isActive = item.id === activeId
          return (
            <button
              key={item.id}
              onClick={() => handleSelectVideo(item.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-gray-200/90 shadow-xs"
              }`}
            >
              <Play
                className={`w-3.5 h-3.5 ${
                  isActive ? "text-white fill-white" : "text-gray-400"
                }`}
              />
              {item.title}
            </button>
          )
        })}
      </div>

      {/* Main Video Player Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl p-3 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-200/80">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
          <video
            ref={videoRef}
            key={currentVideo.videoUrl}
            src={currentVideo.videoUrl}
            controls
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain"
          >
            Browser Anda tidak mendukung pemutaran video langsung.
          </video>

          {/* Quick Unmute / Mute Floating Overlay */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Aktifkan Suara" : "Matikan Suara"}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white text-xs font-medium transition-all shadow-md cursor-pointer border border-white/20"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-amber-300" />
                <span>Klik untuk Suara</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-300" />
                <span>Suara Aktif</span>
              </>
            )}
          </button>

          {/* Pause/Play center indicator overlay when paused */}
          {!isPlaying && (
            <div
              onClick={handleManualPlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer group transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover:bg-blue-600 group-hover:scale-110 text-white flex items-center justify-center shadow-xl transition-all">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
            </div>
          )}
        </div>

        {/* Video Info & External Player Fallback */}
        <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-1.5 max-w-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  {currentVideo.role}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500 font-medium">
                  {currentVideo.speaker}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {currentVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentVideo.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Fallback button if video playback issues on some networks */}
          <div className="shrink-0">
            <a
              href={currentVideo.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 border border-gray-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Buka di Cloudinary
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
