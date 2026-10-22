import GalleryMasonry from "@/components/GalleryMasonry";
import { deltaPhotos } from "@/data/deltaPhotos";

function GalleryPage() {
  const images = deltaPhotos.map((item) => item.src);

  return (
    <div className="relative min-h-screen py-4 flex mt-12 bg-[#f7f7f7] flex-col items-center gap-12">
      <div className="flex flex-col items-center text-center space-y-2">
        <h2
          className="text-3xl md:text-5xl font-light tracking-wide 
   text-gray-700 relative px-4"
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Gallery Komunitas Kami
          </span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 rounded-full mt-2"></div>
        <p className="text-gray-500 text-sm md:text-base italic px-4 mt-2">
          Inspirasi, kolaborasi dan inovasi yang tidak pernah ada habisnya
          tersimpan sebagai bukti nyata
        </p>
      </div>

      {/* Container dengan efek fade */}
      <div className="relative w-full px-4 md:px-12 h-[90vh] overflow-hidden">
        <div className="pb-24">
          <GalleryMasonry images={images} />
        </div>

        {/* Gradient fade bawah */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-46 bg-gradient-to-t from-[#fdfaf6] to-transparent"></div>
      </div>

      {/* Tombol Lihat Semua */}
      <a
        href="/gallery"
        className="mb-6 px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
      >
        Lihat Semua
      </a>
    </div>
  );
}

export default GalleryPage;
