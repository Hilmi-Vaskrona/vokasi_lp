"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";

import { localPosts } from "./localpost";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import SidebarKategori from "@/components/SidebarKategori";
import SidebarRecent from "@/components/SidebarRecent";

// API key NewsData.io (sesuaikan dengan env milikmu)
const API_KEY = import.meta.env.VITE_API_NEWS_IO_KEY as string;

// Kategori statis
const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
];

// Helper untuk memetakan berita edukasi ke kategori sidebar
const mapEducationCategory = (title?: string, description?: string): string => {
  const text = `${title || ""} ${description || ""}`.toLowerCase();

  if (/lomba|kompetisi|olimpiade|turnamen|festival/.test(text)) {
    return "Lomba";
  }
  if (/ekstrakurikuler|ekskul|pramuka|paskibra|osis|club|klub/.test(text)) {
    return "Ekstrakurikuler";
  }
  if (/pengumuman|diberitahukan|pemberitahuan|info penting/.test(text)) {
    return "Pengumuman";
  }
  if (/prestasi|juara|pemenang|penghargaan|award/.test(text)) {
    return "Prestasi";
  }
  if (
    /sekolah|kelas|guru|siswa|mahasiswa|kampus|universitas|kuliah|pendidikan/.test(
      text
    )
  ) {
    return "Kegiatan Sekolah";
  }

  return "Artikel Umum";
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  // Ambil data berita edukasi dari NewsData.io
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Base query hanya seputar EDUKASI
        const baseQuery =
          "pendidikan OR sekolah OR siswa OR guru OR universitas OR kampus OR pelajar";

        const url = new URL("https://newsdata.io/api/1/news");
        url.searchParams.set("apikey", API_KEY);
        url.searchParams.set("q", baseQuery);
        url.searchParams.set("country", "id");
        url.searchParams.set("language", "id");
        url.searchParams.set("category", "education");

        const res = await fetch(url.toString());
        const data = await res.json();

        const postsWithExtras =
          (data.results || []).map((post: any) => {
            const categoryLabel = mapEducationCategory(
              post.title,
              post.description
            );

            return {
              ...post,
              id: post.article_id,
              title: post.title,
              image: post.image_url,
              author: post.source_id,
              // brand dipakai di filter, samakan dengan source
              brand: post.source_id,
              // kategori disesuaikan ke kategori sidebar
              category: categoryLabel,
            };
          }) ?? [];

        setAllPosts([...localPosts, ...postsWithExtras]);
        sessionStorage.setItem("allPosts", JSON.stringify([...localPosts, ...postsWithExtras]));
      } catch (error) {
        console.error("Gagal fetch posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // 🔎 Search berdasarkan title, brand (source_id), dan category lokal
  const filteredPosts = allPosts.filter((post: any) => {
    const query = search.toLowerCase();

    return (
      post.title?.toLowerCase().includes(query) ||
      post.brand?.toLowerCase().includes(query) ||
      post.category?.toLowerCase().includes(query)
    );
  });

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedPosts = filteredPosts.slice(start, end);

  return (
    <main className="w-full px-4 md:px-8 lg:px-16 xl:px-24 pt-28 lg:pt-36 pb-20 flex gap-10 bg-[#F8FAFC] min-h-screen">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[65%] flex flex-col gap-8">

        {/* Breadcrumb */}
        <Breadcrumb items={["Beranda", "Blog"]} />

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold text-[#0F172A] leading-tight">
            Semua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]">
              Blog
            </span>
          </h1>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]" />
          <p className="text-[#64748B] text-sm font-medium mt-1">
            Artikel, berita, dan informasi terbaru dari dunia pendidikan
          </p>
        </div>

        {/* Post List */}
        {loading ? (
          <div className="flex flex-col gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex gap-5 animate-pulse border border-[#E2E8F0]">
                <div className="w-44 h-32 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 flex-shrink-0" />
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <div className="h-4 bg-gray-200 rounded-full w-1/4" />
                  <div className="h-5 bg-gray-200 rounded-full w-3/4" />
                  <div className="h-5 bg-gray-200 rounded-full w-1/2" />
                  <div className="h-3 bg-gray-100 rounded-full w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <PostList posts={displayedPosts} />
        )}

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalItems={filteredPosts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setPage}
        />
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="w-[35%] mt-28 hidden lg:flex flex-col gap-6 sticky top-32 self-start">
        {/* Search */}
        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-[#E2E8F0] p-5">
          <SearchBar onChange={setSearch} />
        </div>

        {/* Kategori */}
        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-[#E2E8F0] p-5">
          <SidebarKategori items={categories} />
        </div>

        {/* Recent */}
        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-[#E2E8F0] p-5">
          <SidebarRecent items={allPosts.slice(0, 3)} />
        </div>
      </aside>

    </main>
  );
}
