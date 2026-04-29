const Unduhan = () => {
  /* CARD UMUM (semua kotak isi) */
  const cardClass =
    "group border border-[#E2E8F0] rounded-2xl p-5 md:p-6 lg:p-7 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.12)] hover:border-[#93C5FD] hover:-translate-y-1 transition-all duration-300 ease-out h-full w-full overflow-hidden";

  /* KOTAK BESAR SECTION */
  const sectionClass =
    "w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_4px_32px_rgba(0,0,0,0.07)] overflow-hidden";

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A]">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#1E3A8A] text-white pt-36 pb-24 md:pb-28 px-4 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3">
            SELAMAT DATANG <br />
            DI PERATURAN SMK VOKASI KOTA BOGOR
          </h1>

          <p className="text-white/70 mb-8">
            Pusat dokumen dan peraturan resmi yang mudah diakses
          </p>
        </div>
      </section>

      {/* KLASIFIKASI */}
      <section className={`${sectionClass} mt-12 md:mt-14 p-6 md:p-10 lg:p-14`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold">Klasifikasi Peraturan</h2>
            <div className="w-12 h-1 mt-1.5 rounded-full bg-[#2563EB]" />
          </div>

          <button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-sm font-bold">
            Lihat Statistik
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[
            {
              title: "Peraturan BPK",
              desc: "Berisi kumpulan peraturan SMK se-Kota Bogor.",
              icon: "📋",
            },
            {
              title: "Peraturan Kementerian/Lembaga",
              desc: "Berisi kumpulan peraturan dari Dinas Pendidikan, dll.",
              icon: "🏛️",
            },
            {
              title: "Peraturan Pusat",
              desc: "Berisi kumpulan UU, PP, dan peraturan pusat lainnya.",
              icon: "📜",
            },
            {
              title: "Peraturan Daerah",
              desc: "Berisi kumpulan peraturan daerah setempat seperti Perda dan Pergub.",
              icon: "🗺️",
            },
          ].map((item, i) => (
            <div key={i} className={cardClass}>
              <div className="flex items-start gap-4 w-full">
                <span className="text-3xl shrink-0">{item.icon}</span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-base mb-2 break-words leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748B] mb-4 break-words leading-relaxed">
                    {item.desc}
                  </p>

                  <button className="text-xs font-bold text-[#2563EB]">
                    Lihat Peraturan →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERATURAN BPK */}
      <section className={`${sectionClass} mt-10 md:mt-14 lg:mt-16 p-6 md:p-10 lg:p-14`}>
        <h2 className="text-2xl font-extrabold mb-8">Peraturan BPK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className={cardClass}>
                <p className="text-xs font-bold text-[#2563EB] mb-2">
                  BPK • 2025
                </p>

                <h3 className="font-extrabold mb-2 break-words">
                  Peraturan No. {i + 1} Tahun 2025
                </h3>

                <p className="text-sm text-[#64748B] break-words">
                  Tentang Penetapan dan Tata Kelola Sekolah Vokasi Kota Bogor
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* TERBARU */}
      <section className={`${sectionClass} mt-10 md:mt-14 lg:mt-16 p-6 md:p-10 lg:p-14`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {["Peraturan Terbaru", "Input Terbaru"].map((title, idx) => (
            <div key={idx} className="w-full min-w-0">
              <h2 className="text-xl font-extrabold mb-6">{title}</h2>

              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={cardClass}>
                      <h3 className="font-bold text-sm mb-2 break-words">
                        {idx === 0
                          ? `Permendik No. ${i + 10} Tahun 2025`
                          : `Peraturan Daerah No. ${i + 1} Tahun 2025`}
                      </h3>

                      <p className="text-sm text-[#64748B] break-words">
                        Tentang Pengembangan Sekolah Vokasi
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STANDAR LAYANAN */}
      <section
        className={`${sectionClass} mt-10 md:mt-14 lg:mt-16 p-6 md:p-10 lg:p-14`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Gambar kiri */}
          <div className="flex justify-center items-center">
            <img
              src="/logos/logo_delta.png"
              alt="logo"
              className="rounded-2xl w-80 object-cover shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* Content kanan */}
          <div className="space-y-4 w-full min-w-0">
            <div className="mb-2">
              <h2 className="text-xl font-extrabold text-[#0F172A]">
                Standar Layanan
              </h2>

              <div className="w-10 h-1 mt-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]" />
            </div>

            {[
              "Produk hukum yang diunggah berasal dari sumber resmi.",
              "Semua dokumen diklasifikasikan berdasarkan jenis, tema, dan asal.",
              "Dapat diakses publik tanpa syarat.",
              "Saran & kritik bisa dikirim ke kontak resmi kami.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#F8FAFC] p-4 md:p-5 rounded-xl border border-[#E2E8F0] hover:border-[#93C5FD] hover:bg-blue-50/50 transition-all duration-200 w-full overflow-hidden"
              >
                <span className="mt-0.5 text-[#2563EB] font-extrabold text-sm shrink-0">
                  ✓
                </span>

                <p className="text-sm text-[#374151] leading-relaxed break-words">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className={`${sectionClass} mt-10 md:mt-14 lg:mt-16 mb-20 p-6 md:p-10 lg:p-14`}>
        <h2 className="text-2xl font-extrabold text-center mb-8">
          VIDEO TUTORIAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={cardClass}>
            <p className="text-sm text-[#64748B] break-words">
              Video tutorial membantu pengguna memahami cara mencari dan
              mengakses peraturan SMK Kota Bogor.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-2xl">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/IFFOW8DlgTQ"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unduhan;