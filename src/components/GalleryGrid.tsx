import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Tag, ZoomIn } from "lucide-react"
import { GenerativeArtCanvas } from "@/components/ui/generative-art-canvas"

export interface ImageObject {
  src: string
  category: string
  title: string
  description: string
  date?: string
  location?: string
}

interface GalleryGridProps {
  images: ImageObject[]
  onSelect: (src: string, imageObj?: ImageObject) => void
}

const getCategoryBadgeClass = (category: string) => {
  switch (category.toLowerCase()) {
    case "acara":
      return "bg-amber-500/90 text-white border-amber-300/40"
    case "kegiatan":
      return "bg-blue-600/90 text-white border-blue-400/40"
    case "ekstrakurikuler":
      return "bg-emerald-600/90 text-white border-emerald-400/40"
    default:
      return "bg-slate-800/90 text-white border-slate-600/40"
  }
}

const getGenerativeColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "acara":
      return "rgba(245, 158, 11, 0.45)" // Amber
    case "kegiatan":
      return "rgba(59, 130, 246, 0.45)" // Blue
    case "ekstrakurikuler":
      return "rgba(16, 185, 129, 0.45)" // Emerald
    default:
      return "rgba(99, 102, 241, 0.45)" // Indigo
  }
}

const GalleryGrid = ({ images, onSelect }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <AnimatePresence mode="popLayout">
        {images.map((img, idx) => (
          <GalleryCard key={`${img.src}-${idx}`} image={img} index={idx} onSelect={onSelect} />
        ))}
      </AnimatePresence>
    </div>
  )
}

const GalleryCard = ({
  image,
  index,
  onSelect
}: {
  image: ImageObject
  index: number
  onSelect: (src: string, imageObj?: ImageObject) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // 3D Tilt Spring Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 0.6,
        delay: (index % 6) * 0.05
      }
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.25 } }
  }

  const badgeClass = getCategoryBadgeClass(image.category)
  const canvasColor = getGenerativeColor(image.category)

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(image.src, image)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-80 sm:h-84 md:h-92 w-full rounded-3xl cursor-pointer overflow-hidden border border-slate-200/90 dark:border-border bg-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.22)] transition-shadow duration-500"
    >
      {/* 3D Elevated Layer */}
      <div
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-3xl p-6"
      >
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}

        {/* Base Image with Smooth Scale */}
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Generative Art Canvas (draws animated lines on hover) */}
        <GenerativeArtCanvas isHovered={isHovered} color={canvasColor} />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent transition-opacity duration-300" />

        {/* Top-Left Category Badge */}
        <div className="absolute left-5 top-5 z-20">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md border ${badgeClass}`}
          >
            <Tag size={12} className="opacity-90" />
            {image.category}
          </span>
        </div>

        {/* Top-Right Arrow Action Icon */}
        <div className="absolute right-5 top-5 z-20 text-white opacity-0 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="w-10 h-10 rounded-full bg-white/25 hover:bg-blue-600 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Center Hover Zoom Indicator (subtle appearance on desktop) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 px-4 py-2 rounded-full bg-blue-600/90 text-white text-xs font-bold tracking-wide backdrop-blur-md shadow-lg shadow-blue-500/40 flex items-center gap-2">
            <ZoomIn size={14} />
            <span>Lihat Detail Foto</span>
          </div>
        </div>

        {/* Bottom Content with Motion Reveal */}
        <div className="relative z-20 pt-4">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 8,
              opacity: isHovered ? 1 : 0.92
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-1.5 drop-shadow-md group-hover:text-blue-200 transition-colors"
          >
            {image.title}
          </motion.h3>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 8,
              opacity: isHovered ? 1 : 0.75
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.04 }}
            className="text-slate-300 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed"
          >
            {image.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default GalleryGrid
