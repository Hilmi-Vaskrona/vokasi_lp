import { ZoomIn } from "lucide-react"
import { useState } from "react"

interface ImageObject {
  src: string;
  category: string;
  title: string;
  description: string;
}

interface GalleryGridProps {
  images: ImageObject[]
  onSelect: (src: string) => void
}

const GalleryGrid = ({ images, onSelect }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {images.map((img, idx) => (
        <ImageCard key={idx} image={img} idx={idx} onSelect={onSelect} />
      ))}
    </div>
  )
}

const ImageCard = ({ image, idx, onSelect }: { image: ImageObject, idx: number, onSelect: (src: string) => void }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer bg-slate-200 aspect-[4/3] shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
      onClick={() => onSelect(image.src)}
      data-aos="fade-up"
      data-aos-delay={(idx % 3) * 100}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-300" />
      )}
      
      <img
        src={image.src}
        alt={image.title}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-between p-6">
        
        {/* Center Icon */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100">
            <ZoomIn className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="w-full text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-75">
          <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
          <p className="text-slate-200 text-sm font-medium line-clamp-2 leading-relaxed">{image.description}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryGrid
