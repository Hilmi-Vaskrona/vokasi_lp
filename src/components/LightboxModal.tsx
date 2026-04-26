import { useEffect } from "react"
import { X } from "lucide-react"

interface LightboxModalProps {
  image: string
  onClose: () => void
}

const LightboxModal = ({ image, onClose }: LightboxModalProps) => {
  // Prevent scrolling and listen for Escape key
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalStyle
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative flex items-center justify-center p-4 w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all z-[10000]"
          aria-label="Close"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        
        <img
          src={image}
          alt="Preview"
          className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  )
}

export default LightboxModal
