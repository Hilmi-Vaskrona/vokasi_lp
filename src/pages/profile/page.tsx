import MemberCard from "../../components/memberCard";

const Profile = () => {
  const members = [
    {
      name: "SMK Madinatul Quran",
      image:
        "https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg",
      logo: "https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png",
      location:
        "Kp.Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830",
      categories: ["Teknik Komputer Jaringan", "Rekayasa Perangkat Lunak"],
      url: "https://smkmadinatulquran.sch.id/",
    },
    {
      name: "SMK YMA",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-yma.png",
      location:
        "Jl. Raya Puncak Km. 75 No. 81, Cipayung, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: [
        "Bisnis Daring dan Pemasaran",
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Usaha Perjalanan Wisata",
      ],
      url: "https://www.smkyma.sch.id/",
    },
    {
      name: "SMK Panca Karya Sentul",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-panca-karya-sentul.webp",
      location:
        "Jl. Desa Sanja RT 06 RW 06, Karang Asem Barat, Kec. Citeureup, Kab. Bogor, Jawa Barat",
      categories: [
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Teknik Komputer dan Jaringan",
        "Multimedia",
        "Teknik Mekanik Industri",
        "Teknik dan Bisnis Sepeda Motor",
      ],
      url: "#",
      logoFill: true,
      logoScale: 1.05,
    },
    {
      name: "SMK Darus Sa'adah",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-darus-saadah.png",
      location:
        "Jl. Alternatif Sentul RT 07 RW 06, Cijujung, Kec. Sukaraja, Kab. Bogor, Jawa Barat",
      categories: [
        "Rekayasa Perangkat Lunak",
        "Desain Komunikasi Visual",
        "Multimedia",
        "Teknik Komputer dan Jaringan",
      ],
      url: "https://www.darussaadah.sch.id/",
    },
    {
      name: "SMK Humanika 2",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-humanika-2.png",
      location:
        "Jl. Raya Puncak Kebon Cau RT 02/02, Kopo, Kec. Cisarua, Kab. Bogor, Jawa Barat",
      categories: [
        "Bisnis Daring dan Pemasaran",
        "Otomatisasi dan Tata Kelola Perkantoran",
      ],
      url: "http://www.smkhumanika.sch.id",
    },
    {
      name: "SMKS Terpadu Yapisa",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smks-terpadu-yapisa.png",
      location:
        "Jl. Cikopo Selatan Km 6, Desa Sukaresmi, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: [
        "Manajemen Perkantoran dan Layanan Bisnis",
        "Akuntansi dan Keuangan Lembaga",
        "Desain Komunikasi Visual",
      ],
      url: "https://smkterpaduyapisa.sch.id/",
      logoFill: true,
      logoScale: 1.15,
    },
    {
      name: "SMK Al Hafidz",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-al-hafidz.png",
      location:
        "Jl. Mohammad Noh Noor, Ds. Karyasari RT 04/01, Kec. Leuwiliang, Kab. Bogor, Jawa Barat",
      categories: [
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Rekayasa Perangkat Lunak",
      ],
      url: "http://smkalhafidz.sch.id",
    },
    {
      name: "SMK Darmawan",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-darmawan.png",
      location:
        "Jl. Gunung Pancar Kp. Wates RT 004/001, Babakan Madang, Kab. Bogor, Jawa Barat",
      categories: [
        "Tata Boga",
        "Caregiver",
        "Usaha Perjalanan Wisata",
        "Perhotelan",
      ],
      url: "https://smkdarmawan.sch.id/",
    },
    {
      name: "SMK Islam Miftahul Huda",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-islam-miftahul-huda.webp",
      location:
        "Jl. Megamendung No. 46, Cipayung Girang, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: [
        "Pemasaran",
        "Manajemen Perkantoran dan Layanan Bisnis",
      ],
      url: "#",
      logoFill: true,
      logoScale: 1.05,
    },
    {
      name: "SMKS Agribisnis dan Agroteknologi Amerta",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smks-agribisnis-dan-agroteknologi-amerta.png",
      location:
        "Jl. Cikelun Komplek Kuil Myogan-Ji, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: ["Agribisnis Tanaman Pangan dan Hortikultura"],
      url: "#",
      logoFill: true,
      logoScale: 1.1,
    },
    {
      name: "SMK Al Farabi",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-al-farabi.png",
      location:
        "Jl. Cileungsi Jonggol Km. 3, Mekarsari, Kec. Cileungsi, Kab. Bogor, Jawa Barat",
      categories: [
        "Akuntansi dan Keuangan Lembaga",
        "Teknik Komputer dan Jaringan",
        "Teknik dan Bisnis Sepeda Motor",
      ],
      url: "https://smkalfarabi.sch.id/",
    },
    {
      name: "SMKS TI Annisa 2",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smks-ti-annisa-2.png",
      location:
        "Jl. Karanggan No. 35, Puspasari, Kec. Citeureup, Kab. Bogor, Jawa Barat 16810",
      categories: [
        "Teknik Jaringan Komputer dan Telekomunikasi",
        "Desain Komunikasi Visual",
      ],
      url: "https://smktiannisa.sch.id",
    },
    {
      name: "SMK Plus At-Thahirin",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-plus-at-thahirin.png",
      location:
        "Jl. Sirnagalih No.09, Cipayung Girang, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: ["Otomatisasi dan Tata Kelola Perkantoran"],
      url: "#",
      logoFill: true,
    },
    {
      name: "SMK Generasi Mandiri Gunung Putri",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-generasi-mandiri-gunung-putri.png",
      location:
        "Jl. Barokah No.8, Wanaherang, Kec. Gunungputri, Kab. Bogor, Jawa Barat 16965",
      categories: [
        "Teknik Komputer dan Jaringan",
        "Teknik Mekanik Industri",
        "Teknik Kendaraan Ringan Otomotif",
      ],
      url: "http://smkgenerasimandiri.sch.id",
      logoFill: true,
    },
    {
      name: "SMK Mandala",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-mandala.png",
      location:
        "Jl. Hegarsari Leuwilang No.10, Cibeber I, Kec. Leuwiliang, Kab. Bogor, Jawa Barat",
      categories: [
        "Akuntansi dan Keuangan Lembaga",
        "Bisnis Daring dan Pemasaran",
        "Otomatisasi dan Tata Kelola Perkantoran",
      ],
      url: "#",
      logoFill: true,
    },
    {
      name: "SMK Satria Bangsa",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-satria-bangsa.webp",
      location:
        "Jl. Gadog Sisi, Desa Sukajadi, Kec. Tamansari, Kab. Bogor, Jawa Barat",
      categories: ["Bisnis Daring dan Pemasaran"],
      url: "#",
      logoFill: true,
      logoScale: 1.55,
    },
    {
      name: "SMK Kamandaka",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-kamandaka.png",
      location:
        "Jl. Bangbarung Raya, Perumnas Bantar Jati, Tegalgundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat",
      categories: [
        "Bisnis Daring dan Pemasaran",
        "Otomatisasi dan Tata Kelola Perkantoran",
      ],
      url: "http://www.smkkamandakabogor.go.id",
      logoFill: true,
      logoScale: 1.45,
    },
    {
      name: "SMK Widya Kusuma",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-widya-kusuma.png",
      location:
        "Jl. Raya Boulevard, Perum Cileungsi Hijau, Cileungsi Kidul, Kec. Cileungsi, Kab. Bogor, Jawa Barat",
      categories: ["Teknik Jaringan Komputer dan Telekomunikasi"],
      url: "#",
    },
    {
      name: "SMK Bina Vokasi Nusantara",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-bina-vokasi-nusantara.png",
      location:
        "Jl. Raya Nambo, RT 04/RW 02, Desa Bantar Jati, Kec. Klapanunggal, Kab. Bogor, Jawa Barat 16710",
      categories: [
        "Teknik Elektronika Industri",
        "Layanan Perbankan Syariah",
      ],
      url: "https://bivnus.sch.id",
    },
    {
      name: "SMK Nurul Hikmah",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-nurul-hikmah.png",
      location:
        "Jl. Raya Jonggol Cibucil, Sukamanah, Kec. Jonggol, Kab. Bogor, Jawa Barat 16830",
      categories: [
        "Teknik Komputer dan Jaringan",
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Akuntansi dan Keuangan Lembaga",
      ],
      url: "#",
    },
    {
      name: "SMK Al Muttaqien",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-al-muttaqien.png",
      location:
        "Jl. Raya Cijayanti No.02, Cijayanti, Kec. Babakan Madang, Kab. Bogor, Jawa Barat",
      categories: [
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Perhotelan",
      ],
      url: "https://smk-almuttaqien.sch.id",
    },
    {
      name: "SMK Farmasi Bhakti Kencana",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-farmasi-bhakti-kencana.png",
      location:
        "Jl. Raya Cileungsi - Jonggol Km. 9, Kp. Tengah, Desa Cipeucang, Kec. Cileungsi, Kab. Bogor, Jawa Barat",
      categories: [
        "Farmasi Klinis dan Komunitas",
        "Asisten Keperawatan",
        "Teknologi Laboratorium Medik",
      ],
      url: "https://smkfbhaktikencanabogor.com",
    },
    {
      name: "SMK Informatika Bina Generasi",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-informatika-bina-generasi.png",
      location:
        "Jl. Cikerti No. 12, Padasuka, Kec. Ciomas, Kab. Bogor, Jawa Barat",
      categories: ["Multimedia", "Teknik Komputer dan Jaringan"],
      url: "https://www.smkibgbogor.sch.id",
      logoFill: true,
    },
    {
      name: "SMK Informatika Bina Generasi 2",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-informatika-bina-generasi-2.png",
      location:
        "Jl. Taman Pagelaran No. 2, Padasuka, Kec. Ciomas, Kab. Bogor, Jawa Barat",
      categories: [
        "Multimedia",
        "Teknik Komputer dan Jaringan",
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Akomodasi Perhotelan",
      ],
      url: "https://www.smkibgduabogor.sch.id",
      logoFill: true,
    },
    {
      name: "SMK Informatika Bina Generasi 3",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-informatika-bina-generasi-3.png",
      location:
        "Jl. Ciapus Kp. Kabandungan RT 01 RW 05 No. 56, Sirnagalih, Kec. Tamansari, Kab. Bogor, Jawa Barat",
      categories: [
        "Teknik Komputer dan Jaringan",
        "Teknik Kendaraan Ringan",
      ],
      url: "https://www.smkibgtigabogor.sch.id",
    },
    {
      name: "SMK Fajar Sentosa",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-fajar-sentosa.png",
      location:
        "Jl. Perum Griya Alam Sentosa Kp. Bakom RT 03/04, Limus Nunggal, Kec. Cileungsi, Kab. Bogor, Jawa Barat",
      categories: [
        "Akuntansi dan Keuangan Lembaga",
        "Teknik Komputer dan Jaringan",
        "Teknik dan Bisnis Sepeda Motor",
      ],
      url: "http://www.smk_fajarsentosa.com",
      logoFill: true,
    },
    {
      name: "SMK Budiniah",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-budiniah.png",
      location:
        "Jl. Golf Jagorawi No. 2, Karanggan, Puspasari, Kec. Citeureup, Kab. Bogor, Jawa Barat",
      categories: [
        "Teknik Audio Video",
        "Teknik Komputer dan Jaringan",
        "Teknik Pemesinan",
        "Teknik dan Bisnis Sepeda Motor",
        "Teknik Kendaraan Ringan Otomotif",
      ],
      url: "http://smkbudiniah.sch.id",
    },
    {
      name: "SMKIT Al Musthafawiyah",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smkit-al-musthafawiyah.png",
      location:
        "Jl. Cikopo Selatan Km. 06, Pasir Muncang, Kec. Megamendung, Kab. Bogor, Jawa Barat",
      categories: ["Farmasi Klinis dan Komunitas"],
      url: "http://www.al-musthafawiyah.sch.id",
    },
    {
      name: "SMK Kesehatan Prof Dr Moestopo",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-kesehatan-prof-dr-moestopo.png",
      location:
        "Jl. Raya Cibeber No. 48 RT 05/RW 01, Desa Leuwisadeng, Kec. Leuwisadeng, Kab. Bogor, Jawa Barat",
      categories: [
        "Farmasi Klinis dan Komunitas",
        "Teknologi Laboratorium Medik",
      ],
      url: "https://smkkpdm.sch.id",
      logoFill: true,
    },
    {
      name: "SMK Matusha Dwi Elang",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-matusha-dwi-elang.png",
      location:
        "Desa Girimulya RT 01 RW 01, Kec. Cibungbulang, Kab. Bogor, Jawa Barat",
      categories: ["Bisnis Daring dan Pemasaran"],
      url: "#",
      logoFill: true,
    },
    {
      name: "SMK Galileo",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-galileo.png",
      location:
        "Jl. Alvost No. 125, Kadumangu, Kec. Babakan Madang, Kab. Bogor, Jawa Barat",
      categories: [
        "Otomatisasi dan Tata Kelola Perkantoran",
        "Teknik Elektronika Industri",
        "Teknik Komputer dan Jaringan",
        "Teknik Mekanik Industri",
        "Teknik dan Bisnis Sepeda Motor",
      ],
      url: "https://smkgalileo.sch.id",
    },
    {
      name: "SMK Darul Muslim",
      image: "",
      logo: "https://logo-sekolah-delta.vercel.app/logos/smk-darul-muslim.png",
      location:
        "Jl. Raya Tajur RT 04/01 Gang Kabur, Desa Tarikolot, Kec. Citeureup, Kab. Bogor, Jawa Barat",
      categories: [
        "Rekayasa Perangkat Lunak",
        "Teknik Kendaraan Ringan Otomotif",
      ],
      url: "https://smkdarulmuslim.sch.id",
      logoFill: true,
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="w-full min-h-screen bg-[#F7F7F7] flex flex-col items-center overflow-hidden">
      {/* ===== HERO BANNER ===== */}
      <div className="relative w-full h-[280px] md:h-[420px] mt-20 overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/indonesian-flag-on-independence-day-600nw-1457398277.jpg"
          alt="banner"
          className="w-full h-full object-cover scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#F7F7F7]" />

        {/* floating content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 px-6 md:px-10 py-5 rounded-[28px] shadow-2xl">
            <p className="text-white/80 tracking-[4px] text-xs md:text-sm font-medium mb-2">
              DIREKTORI SEKOLAH
            </p>

            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight">
              DIREKTORI
              <span className="block text-blue-300">
                KELEMBAGAAN ANGGOTA
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-14 h-[3px] rounded-full bg-blue-400" />
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-14 h-[3px] rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== TOP BAR ===== */}
      <div className="w-11/12 max-w-7xl -mt-12 z-20 mb-10">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[28px] px-5 md:px-8 py-5">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
            {/* left */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800">
                Daftar Sekolah Anggota
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Jelajahi berbagai sekolah anggota dan program unggulannya.
              </p>
            </div>

            {/* right */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              {/* search */}
              <div className="relative w-full sm:w-[280px]">
                <input
                  type="text"
                  placeholder="Cari sekolah..."
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9FAFB] py-3 pl-5 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>

              {/* sort */}
              <select className="rounded-2xl border border-gray-200 bg-[#F9FAFB] px-5 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 transition-all">
                <option>New users first</option>
                <option>Name A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="w-11/12 max-w-7xl mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-[26px] p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-gray-500 text-sm font-medium">
              Total Sekolah
            </h3>
            <p className="text-4xl font-black text-blue-700 mt-2">
              {members.length}
            </p>
          </div>

          <div className="bg-white rounded-[26px] p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-gray-500 text-sm font-medium">
              Jurusan Populer
            </h3>
            <p className="text-xl font-bold text-gray-800 mt-2">
              TJKT • RPL • DKV
            </p>
          </div>

          <div className="bg-white rounded-[26px] p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-gray-500 text-sm font-medium">
              Lokasi Dominan
            </h3>
            <p className="text-xl font-bold text-gray-800 mt-2">
              Bogor, Jawa Barat
            </p>
          </div>
        </div>
      </div>

      {/* ===== MEMBER GRID ===== */}
      <div className="w-11/12 max-w-[1600px] pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-start">
          {members.map((m, i) => (
            <div
              key={i}
              className="flex w-full h-full"
            >
              <MemberCard {...m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;