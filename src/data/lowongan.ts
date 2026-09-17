export interface LowonganItem {
  id: string
  title: string
  schoolName: string
  schoolLogo: string
  schoolLocation: string
  schoolWebsite: string
  category: 'Guru Produktif' | 'Guru Umum / BK' | 'Tenaga Kependidikan' | 'Teknisi & Laboran'
  type: 'Penuh Waktu (Full-Time)' | 'Paruh Waktu (Part-Time)' | 'Kontrak / Project'
  experienceLevel: 'Fresh Graduate / 0-1 Tahun' | '1 - 3 Tahun' | 'Minimal 3 Tahun'
  salaryRange: string
  postedDate: string
  deadline: string
  isActive: boolean
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  contactEmail: string
  contactPhone: string
  howToApply: string
}

export const dataLowongan: LowonganItem[] = [
  {
    id: 'loker-guru-rpl-smk-madinatul-quran',
    title: 'Guru Kejuruan Rekayasa Perangkat Lunak (RPL)',
    schoolName: 'SMK Madinatul Quran',
    schoolLogo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png',
    schoolLocation: 'Singasari, Kec. Jonggol, Kab. Bogor',
    schoolWebsite: 'https://smkmadinatulquran.sch.id/',
    category: 'Guru Produktif',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: '1 - 3 Tahun',
    salaryRange: 'Kompetitif + Tunjangan Tempat Tinggal / Asrama',
    postedDate: '10 September 2026',
    deadline: '15 Oktober 2026',
    isActive: true,
    description: 'SMK Madinatul Quran membuka kesempatan bagi pendidik profesional yang memiliki passion dalam membimbing generasi muda di bidang software engineering modern berbasis nilai-nilai Islam.',
    responsibilities: [
      'Mengajar mata pelajaran kejuruan RPL (Web Development, Mobile Apps, & Database)',
      'Membimbing proyek siswa dalam program Teaching Factory (TeFa)',
      'Mengembangkan perangkat ajar modul ajar Kurikulum Merdeka',
      'Mendampingi siswa dalam persiapan uji kompetensi keahlian dan lomba LKS'
    ],
    requirements: [
      'Pendidikan minimal S1 Informatika / Sistem Informasi / Pendidikan Ilmu Komputer',
      'Menguasai salah satu tech stack: React/Next.js, Flutter, Node.js, atau Laravel',
      'Mampu membaca Al-Quran dengan baik dan memiliki akhlak terpuji',
      'Memiliki sertifikasi BNSP atau pengalaman industri software menjadi nilai tambah besar'
    ],
    benefits: [
      'Gaji pokok kompetitif + tunjangan fungsional',
      'Fasilitas tempat tinggal / asrama dan konsumsi harian',
      'Dukungan sertifikasi keahlian industri',
      'Lingkungan kerja yang asri, islami, dan kondusif'
    ],
    contactEmail: 'karir@smkmadinatulquran.sch.id',
    contactPhone: '+62 812-3456-7890',
    howToApply: 'Kirimkan CV, ijazah terakhir, transkrip nilai, dan portofolio coding/proyek Anda melalui email dengan subjek: LAMAR_GURURPL_NAMA.'
  },
  {
    id: 'loker-teknisi-lab-tkj-panca-karya',
    title: 'Teknisi Laboratorium Komputer & Jaringan (TKJ)',
    schoolName: 'SMK Panca Karya Sentul',
    schoolLogo: 'https://logo-sekolah-delta.vercel.app/logos/smk-panca-karya-sentul.webp',
    schoolLocation: 'Karang Asem Barat, Kec. Citeureup, Kab. Bogor',
    schoolWebsite: 'https://smkpancakarya.sch.id',
    category: 'Teknisi & Laboran',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: 'Fresh Graduate / 0-1 Tahun',
    salaryRange: 'UMK Bogor + Uang Makan & Transport',
    postedDate: '08 September 2026',
    deadline: '20 Oktober 2026',
    isActive: true,
    description: 'Kami mengundang tenaga muda yang cekatan dan bertanggung jawab untuk mengelola infrastruktur lab jaringan, server lokal sekolah, serta pemeliharaan hardware/software komputer siswa.',
    responsibilities: [
      'Memelihara koneksi jaringan LAN, WiFi sekolah, dan perangkat router/switch MikroTik',
      'Melakukan instalasi, konfigurasi, dan troubleshooting PC laboratorium',
      'Menyiapkan perangkat lab untuk ujian berbasis komputer (ANBK) dan praktik harian',
      'Mendokumentasikan inventaris peralatan laboratorium secara berkala'
    ],
    requirements: [
      'Pendidikan minimal SMK Jurusan TKJ / D3 Teknik Komputer',
      'Memahami konfigurasi router MikroTik, Cisco dasar, dan pengkabelan jaringan',
      'Mampu merakit dan troubleshooting hardware komputer dengan cepat',
      'Disiplin, jujur, dan berorientasi pada penyelesaian masalah'
    ],
    benefits: [
      'Gaji sesuai standar UMK Kabupaten Bogor',
      'BPJS Ketenagakerjaan & BPJS Kesehatan',
      'Kesempatan mengikuti pelatihan dan sertifikasi MTCNA / CCNA gratis',
      'Jenjang karir staf laboratorium'
    ],
    contactEmail: 'hrd@smkpancakarya.sch.id',
    contactPhone: '+62 821-9876-5432',
    howToApply: 'Kirimkan surat lamaran, CV terbaru, dan fotokopi sertifikat ke email resmi HRD kami.'
  },
  {
    id: 'loker-guru-bdp-smk-yma',
    title: 'Guru Bisnis Daring & Pemasaran (Digital Marketing)',
    schoolName: 'SMK YMA',
    schoolLogo: 'https://logo-sekolah-delta.vercel.app/logos/smk-yma.png',
    schoolLocation: 'Jl. Raya Puncak Km. 75, Cipayung, Kec. Megamendung, Kab. Bogor',
    schoolWebsite: 'https://www.smkyma.sch.id/',
    category: 'Guru Produktif',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: '1 - 3 Tahun',
    salaryRange: 'Sesuai Standar Yayasan + Tunjangan Jabatan',
    postedDate: '12 September 2026',
    deadline: '25 Oktober 2026',
    isActive: true,
    description: 'Bergabunglah bersama keluarga besar SMK YMA Megamendung untuk mencetak entrepreneur muda dan praktisi pemasaran digital berdaya saing tinggi.',
    responsibilities: [
      'Mengajar materi e-commerce, social media marketing, SEO, dan live commerce',
      'Membimbing siswa dalam mengelola toko online bisnis sekolah',
      'Menjalin koordinasi kemitraan magang siswa dengan pelaku UMKM dan industri retail',
      'Melaksanakan asesmen penilaian kurikulum secara teratur'
    ],
    requirements: [
      'Pendidikan S1 Manajemen Pemasaran / Pendidikan Ekonomi / Ilmu Komunikasi',
      'Memiliki pemahaman praktis tentang Facebook Ads, Google Ads, TikTok Shop, & Marketplace',
      'Komunikatif, kreatif, dan mampu menginspirasi siswa',
      'Berpengalaman mengajar atau menjalankan agensi digital marketing diutamakan'
    ],
    benefits: [
      'Gaji kompetitif yayasan + insentif kinerja',
      'Tunjangan hari raya & bonus tahunan',
      'Lingkungan kerja sejuk dan ramah di kawasan Puncak Bogor',
      'Pelatihan upskilling kurikulum berkala'
    ],
    contactEmail: 'rekrutmen@smkyma.sch.id',
    contactPhone: '+62 857-1122-3344',
    howToApply: 'Kirimkan berkas lamaran lengkap beserta tautan portofolio kampanye digital yang pernah dijalankan ke email rekrutmen.'
  },
  {
    id: 'loker-guru-dkv-darus-saadah',
    title: 'Guru Desain Komunikasi Visual (DKV) & Multimedia',
    schoolName: "SMK Darus Sa'adah",
    schoolLogo: 'https://logo-sekolah-delta.vercel.app/logos/smk-darus-saadah.png',
    schoolLocation: 'Jl. Alternatif Sentul, Cijujung, Kec. Sukaraja, Kab. Bogor',
    schoolWebsite: 'https://www.darussaadah.sch.id/',
    category: 'Guru Produktif',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: 'Fresh Graduate / 0-1 Tahun',
    salaryRange: 'Gaji Pokok + Insentif Proyek TeFa',
    postedDate: '14 September 2026',
    deadline: '30 Oktober 2026',
    isActive: true,
    description: 'Kami mencari pendidik kreatif yang mahir dalam dunia grafis, videografi, dan animasi untuk mengembangkan potensi siswa jurusan DKV di era visual digital.',
    responsibilities: [
      'Mengajar prinsip desain grafis, ilustrasi vektor, tipografi, dan video editing',
      'Mengoperasikan software industri (Adobe Creative Cloud, Blender, Figma)',
      'Mengawal proyek pesanan klien komersial bersama siswa di studio DKV',
      'Memfasilitasi siswa menghasilkan karya portofolio berstandar pameran'
    ],
    requirements: [
      'Pendidikan S1 Desain Komunikasi Visual (DKV) / Seni Rupa / Multimedia',
      'Wajib melampirkan portofolio desain/video terbaru (Behance / Drive)',
      'Menguasai Adobe Photoshop, Illustrator, Premiere Pro, atau After Effects',
      'Memiliki dedikasi tinggi terhadap pendidikan generasi muda'
    ],
    benefits: [
      'Akses fasilitas studio podcast & editing DKV modern',
      'Bagi hasil proyek pesanan Teaching Factory industri',
      'Lingkungan kerja dinamis dan kolaboratif',
      'Tunjangan kesehatan & BPJS'
    ],
    contactEmail: 'smk.darussaadah@gmail.com',
    contactPhone: '+62 813-2233-4455',
    howToApply: 'Kirimkan CV, Ijazah, dan Portofolio (PDF atau Link Website/Behance) ke email resmi kami.'
  },
  {
    id: 'loker-staf-tu-yapisa',
    title: 'Staf Administrasi & Tata Usaha (TU) Sekolah',
    schoolName: 'SMKS Terpadu Yapisa',
    schoolLogo: 'https://logo-sekolah-delta.vercel.app/logos/smks-terpadu-yapisa.png',
    schoolLocation: 'Jl. Cikopo Selatan Km 6, Desa Sukaresmi, Kec. Megamendung, Kab. Bogor',
    schoolWebsite: 'https://smkterpaduyapisa.sch.id/',
    category: 'Tenaga Kependidikan',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: 'Fresh Graduate / 0-1 Tahun',
    salaryRange: 'Standar Upah Yayasan + Tunjangan',
    postedDate: '11 September 2026',
    deadline: '18 Oktober 2026',
    isActive: true,
    description: 'SMKS Terpadu Yapisa membuka lowongan staf administrasi tata usaha untuk memperkuat pelayanan persuratan, kesiswaan, dan pelaporan berkas akreditasi sekolah.',
    responsibilities: [
      'Mengelola korespondensi persuratan dinas keluar dan masuk secara rapi',
      'Membantu input dan pemutakhiran data induk siswa & kepegawaian di sistem sekolah',
      'Memberikan layanan administrasi yang ramah kepada wali murid dan tamu lembaga',
      'Mengarsipkan berkas fisik dan digital sekolah'
    ],
    requirements: [
      'Pendidikan minimal D3 / S1 Manajemen, Administrasi Perkantoran, atau bidang relevan',
      'Mahir mengoperasikan Microsoft Office (Excel, Word) & Google Workspace',
      'Teliti, rapi, jujur, dan memiliki kemampuan komunikasi yang santun',
      'Mampu bekerja mandiri maupun dalam tim'
    ],
    benefits: [
      'Gaji pokok bulanan & tunjangan kehadiran',
      'Jaminan kesehatan',
      'Pelatihan sistem administrasi digital berkala',
      'Suasana kerja kekeluargaan yang harmonis'
    ],
    contactEmail: 'info@smkterpaduyapisa.sch.id',
    contactPhone: '+62 858-7788-9900',
    howToApply: 'Bawa langsung berkas fisik ke kantor Tata Usaha SMKS Terpadu Yapisa atau kirim berkas PDF via email.'
  },
  {
    id: 'loker-guru-bk-smk-al-hafidz',
    title: 'Guru Bimbingan Konseling (BK)',
    schoolName: 'SMK Al Hafidz',
    schoolLogo: 'https://logo-sekolah-delta.vercel.app/logos/smk-al-hafidz.png',
    schoolLocation: 'Jl. Mohammad Noh Noor, Ds. Karyasari, Kec. Leuwiliang, Kab. Bogor',
    schoolWebsite: 'http://smkalhafidz.sch.id',
    category: 'Guru Umum / BK',
    type: 'Penuh Waktu (Full-Time)',
    experienceLevel: '1 - 3 Tahun',
    salaryRange: 'Gaji Tetap Yayasan + Tunjangan Fungsional',
    postedDate: '09 September 2026',
    deadline: '22 Oktober 2026',
    isActive: true,
    description: 'Kami mengundang Konselor / Guru Bimbingan Konseling yang berdedikasi untuk mendampingi perkembangan psikologis, karakter, dan perencanaan karir siswa kejuruan.',
    responsibilities: [
      'Melaksanakan konseling individual dan kelompok bagi siswa',
      'Membantu pemetaan minat, bakat, dan rencana karir siswa menuju dunia kerja/kuliah',
      'Menjalin koordinasi intensif dengan wali kelas dan orang tua murid',
      'Merancang program pembinaan karakter dan pencegahan perundungan (anti-bullying)'
    ],
    requirements: [
      'Pendidikan minimal S1 Bimbingan Konseling (BK) / Psikologi Pendidikan',
      'Memiliki empati tinggi, pendengar yang baik, dan mampu menjaga kerahasiaan konseli',
      'Memiliki keteladanan akhlak dan sikap santun',
      'Diutamakan berpengalaman menangani remaja usia SMK/SMA'
    ],
    benefits: [
      'Gaji pokok bulanan + tunjangan kinerja',
      'Ruang konseling tersendiri yang nyaman',
      'Fasilitas BPJS Kesehatan & Ketenagakerjaan',
      'Peluang pengembangan diri melalui asosiasi profesi'
    ],
    contactEmail: 'smkalhafidz.official@gmail.com',
    contactPhone: '+62 812-8899-0011',
    howToApply: 'Kirimkan CV dan surat lamaran ke alamat email kami dengan format PDF.'
  }
]
