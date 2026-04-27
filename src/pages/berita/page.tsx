import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNewsData } from "@/hooks/useNewsData";
import NewsGrid from "@/components/NewsGrid";
import NewsFilter from "@/components/NewsFilter";
import NewsSkeleton from "@/components/NewsSkeleton";

const BeritaPage = () => {
  const [category, setCategory] = useState("all");

  // 🔹 Inisialisasi AOS hanya di halaman ini
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // Gunakan keyword search untuk kategori
  const searchQuery =
    category === "science"
      ? "sains OR teknologi OR ilmu"
      : category === "religion"
      ? "dakwah OR islam OR agama"
      : undefined;

  const {
    data: news,
    isLoading,
    isError,
  } = useNewsData(undefined, searchQuery);

  if (isLoading)
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-4 md:px-6 pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Heading */}
          <div className="flex flex-col justify-center items-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Live Update
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3 leading-tight">
              Berita{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1E40AF]">
                Terkini
              </span>
            </h1>
            <p className="text-[#64748B] text-base md:text-lg font-medium mb-8">
              Update informasi terbaru hari ini
            </p>
            <NewsFilter category={category} setCategory={setCategory} />
          </div>
          <NewsSkeleton />
        </div>
      </main>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Gagal memuat data berita.</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 md:px-6 pt-28 md:pt-36 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Hero Heading */}
        <div className="flex flex-col justify-center items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            Live Update
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3 leading-tight">
            Berita{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1E40AF]">
              Terkini
            </span>
          </h1>
          <p className="text-[#64748B] text-base md:text-lg font-medium mb-8">
            Update informasi terbaru hari ini
          </p>
          <NewsFilter category={category} setCategory={setCategory} />
        </div>

        {/* News Grid */}
        <section data-aos="fade-up">
          <NewsGrid news={news || []} />
        </section>

      </div>
    </main>
  );
};

export default BeritaPage;
