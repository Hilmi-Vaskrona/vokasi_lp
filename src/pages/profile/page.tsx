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
      name: "SMAN 1 Bogor",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01h5gxhtvh45g1kajn5nb3qxf7.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/id/thumb/5/51/SMA_Negeri_1_Bogor_Logo.png/250px-SMA_Negeri_1_Bogor_Logo.png",
      location:
        "Jl. Ir. H. Juanda No.16, RT.04/RW.01, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
      categories: ["IPA (MIPA)", "IPS (Sosial Budaya)"],
      url: "https://sman1bogor.sch.id/",
    },
    {
      name: "SMK Wikrama Bogor",
      image: "https://smkwikrama.sch.id/storage/Bursa%20Kerja%20Khususpagejpg",
      logo: "https://smkwikrama.sch.id/assets2/wikrama-logo.png",
      location:
        "Jl. Raya Wangun, RT.01/RW.06, Sindangsari, Kec. Bogor Timur , Kota Bogor, Jawa Barat 16146",
      categories: [
        "PPLG",
        "TJKT",
        "DKV",
        "MPLB",
        "BDP (Pemasaran)",
        "Perhotelan",
        "Kuliner",
      ],
      url: "https://smkwikrama.sch.id/",
    },
    {
      name: "SMKS Kusuma Wardhana Bogor",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxZHYTbc35X4ANWt8xftj4bxmaTuWQSOgMjwWWyQP6j5D52A9e1Y_LKP8PTElWAKg-lhB69IPvCn0EZBI5O0IdoVOjea-dQ7PS-j4-L-9CyNaOg3KKAVanMzo18mHQGtjEBBTl36Iw88s/s400/smk+kw-02.jpg",
      logo: "https://kusumawardhana.sch.id/wp-content/uploads/2024/03/smk-kusuma-wardhana-.webp",
      location:
        "Jl. Pangeran Sogiri No. 307 RT 04 RW 011 Tanahbaru, Kec. Kota Bogor Utara, Kota Bogor, Jawa Barat.",
      categories: [
        "Multimedia",
        "Teknik Pemesinan",
        "Teknik Kendaraan Ringan (TKR)",
      ],
      url: "https://kusumawardhana.sch.id/",
    },
    {
      name: "SMK PUTRA PAKUAN",
      image: "https://pbs.twimg.com/media/EWqDjLqUYAAaLiW.jpg",
      logo: "https://smk.putrapakuan.sch.id/media_library/images/614a2c2d1f27b2c63de5d20ccdda0f28.png",
      location:
        "Jl. Raya Jakarta Bogor Km. 50 Pertokoan Vivo Sentul Kebon Kelapa RT 03/04 Desa Cimandala, Kec. Sukaraja, Kab. Bogor, Jawa Barat",
      categories: [
        "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
        "Akuntansi dan Keuangan Lembaga (AKL)",
        "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
        "Desain Komunikasi Visual (DKV)",
        "Teknik Kendaraan Ringan (TKR)",
        "Teknik Sepeda Motor (TSM)",
      ],
      url: "https://smk.putrapakuan.sch.id/",
    },
    {
      name: "SMK Grafika Mardi Yuana Bogor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshJvlviDYgXodpdNn40KCK2HIjemYJ74Jqg&s",
      logo: "https://media.cake.me/image/upload/s--mi-2UhgN--/c_pad,fl_png8,h_400,w_400/v1666684462/z0eye6vfdlpjpthzkzo4.png",
      location:
        "Jl. Siliwangi No.50, RT.01/RW.13, Bondongan, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16131",
      categories: ["Teknik Grafika", "Desain Komunikasi Visual"],
      url: "https://smkgrafika.mardiyuana.sch.id/",
    },

    {
      name: "SMK TRI DHARMA 2 BOGOR",
      image:
        "https://girlcode.id/wp-content/uploads/2020/02/tridharma2bangunan.jpg",
      logo: "https://smktridharma2.sch.id/logoheaderbannertd2.png",
      location:
        "Jl. Kb. Pedes No.25, RT.03/RW.05, Kb. Pedes, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16162",
      categories: [
        "Akuntansi dan Keuangan Lembaga",
        "Manajemen Perkantoran",
        "Pemasaran",
        "Design Komunikasi Visual",
        "Rekayasa Perangkat Lunak",
      ],
      url: "https://smktridharma2.sch.id/",
    },
    {
      name: "SMK KOSGORO KOTA BOGOR",
      image:
        "https://www.ydsk.org/images/resized/041bad71d7975dce585ee8a1951121b5/Kampus_SMK_Kosgoro_2023.jpg",
      logo: "https://pbs.twimg.com/profile_images/746555816266760192/ApX3zyZN_400x400.png",
      location:
        "Jl. Raya Pajajaran No.217 A, RT.02/RW.11, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153",
      categories: ["Teknik Komputer dan Informatika", "Broadcasting"],
      url: "https://ydsk.org/index.php/21-smk-kosgoro",
    },
    {
      name: "SMK Muhammadiyah 1 Cileungsi",
      image:
        "https://www.ydsk.org/images/resized/041bad71d7975dce585ee8a1951121b5/Kampus_SMK_Kosgoro_2023.jpg",
      logo: "https://smkmutucileungsi.sch.id/wp-content/uploads/2020/10/logo-1.png",
      location:
        "Jl. Anggrek No.86, Cileungsi, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820",
      categories: [
        "Teknik Pemesinan",
        "Teknik Instalasi Tenaga Listrik",
        "Teknik Pengelasan",
        "Desain Komunikasi Visual",
        "Desain Pemodelan dan Informasi Bangunan",
      ],
      url: "https://smkmutucileungsi.sch.id/",
    },
  ];

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
      <div className="w-11/12 max-w-7xl pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="transition-all duration-300 hover:-translate-y-2"
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