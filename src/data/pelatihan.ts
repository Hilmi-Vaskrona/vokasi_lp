export interface PelatihanItem {
  id: string
  title: string
  category: 'kepala-sekolah' | 'guru' | 'tendik' | 'murid'
  targetAudience: string
  duration: string
  format: 'Luring (Tatap Muka)' | 'Hybrid (Daring & Luring)' | 'Daring Interaktif'
  level: 'Dasar' | 'Menengah' | 'Lanjutan' | 'Semua Level'
  location: string
  instructor: {
    name: string
    title: string
    avatar: string
  }
  badge: string
  summary: string
  description: string
  syllabus: string[]
  benefits: string[]
  quota: number
  registered: number
  startDate: string
  investment: string
}

export const dataPelatihan: PelatihanItem[] = [
  // === KEPALA SEKOLAH ===
  {
    id: 'kepala-sekolah-kepemimpinan-vokasi',
    title: 'Transformational Leadership & Strategic Management Kepala SMK Unggul',
    category: 'kepala-sekolah',
    targetAudience: 'Kepala Sekolah & Wakil Kepala Sekolah',
    duration: '3 Hari (24 JP)',
    format: 'Hybrid (Daring & Luring)',
    level: 'Lanjutan',
    location: 'Auditorium Delta Center & Zoom Meeting',
    instructor: {
      name: 'Dr. Dina Martha Tiraswati, M.Pd.',
      title: 'Praktisi Pendidikan & Pengawas SMK',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Program Unggulan',
    summary: 'Akselerasi kepemimpinan transformasional untuk memimpin SMK menjadi institusi vokasi unggul berdaya saing global.',
    description: 'Pelatihan intensif yang dirancang untuk membekali Kepala SMK dengan kompetensi manajerial modern, penyusunan rencana kerja jangka menengah berbasis data rapor pendidikan, dan kepemimpinan adaptif menghadapi era otomasi dan kecerdasan buatan.',
    syllabus: [
      'Kepemimpinan Adaptif & Visi Global Pendidikan Kejuruan',
      'Penyusunan RKAS & RKT Berbasis Rapor Pendidikan',
      'Manajemen Tata Kelola Kolaboratif Komunitas Vokasi',
      'Strategi Peningkatan Akreditasi & Budaya Mutu Berkelanjutan'
    ],
    benefits: [
      'Sertifikat Resmi 24 JP Terakreditasi',
      'Toolkit Template RKT & RKAS Siap Pakai',
      'Konsultasi Mentoring 1-on-1 Pasca Pelatihan',
      'Akses Jejaring Kepala SMK Se-Jawa Barat'
    ],
    quota: 40,
    registered: 32,
    startDate: '10 Oktober 2026',
    investment: 'Gratis (Anggota Delta)'
  },
  {
    id: 'kepala-sekolah-link-and-match',
    title: 'Strategi Link & Match 8+i dengan DUDI Nasional & Multinasional',
    category: 'kepala-sekolah',
    targetAudience: 'Kepala Sekolah & Humas / Hubin',
    duration: '2 Hari (16 JP)',
    format: 'Luring (Tatap Muka)',
    level: 'Menengah',
    location: 'Grand Savero Hotel Bogor',
    instructor: {
      name: 'Ir. Hendra Kusuma, M.T.',
      title: 'Senior HR Director & Konsultan Kerjasama Industri Vokasi',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Kemitraan DUDI',
    summary: 'Penyelarasan kurikulum, sinkronisasi PKL, magang guru, hingga komitmen penyerapan lulusan bersama industri terkemuka.',
    description: 'Pelatihan praktis penyusunan MoU kemitraan industri yang tidak sekadar formalitas di atas kertas, melainkan ekosistem nyata Teaching Factory (TeFa), kelas industri, dan penyaluran kerja berkelanjutan.',
    syllabus: [
      'Analisis Kebutuhan Kompetensi DUDI Era Industri 4.0',
      'Formula Penyusunan Kurikulum Bersama Industri (Penyelarasan)',
      'Optimalisasi Teaching Factory (TeFa) Menghasilkan Omzet',
      'Legalitas & Standardisasi MoU Kemitraan Strategis'
    ],
    benefits: [
      'Sertifikat Resmi 16 JP',
      'Draft Kontrak Kerjasama (MoU) Standar Industri',
      'Koneksi Langsung ke 15+ Mitra Asosiasi Industri',
      'Modul Panduan Teaching Factory'
    ],
    quota: 35,
    registered: 28,
    startDate: '24 Oktober 2026',
    investment: 'Gratis (Anggota Delta)'
  },

  // === GURU ===
  {
    id: 'guru-pedagogik-ai-digital',
    title: 'Implementasi AI & Media Pembelajaran Interaktif untuk Guru SMK',
    category: 'guru',
    targetAudience: 'Guru Produktif & Normatif/Adaptif',
    duration: '4 Hari (32 JP)',
    format: 'Daring Interaktif',
    level: 'Semua Level',
    location: 'Live LMS Delta Learning & Google Meet',
    instructor: {
      name: 'Bambang Triatmojo, S.Kom., M.T.',
      title: 'Google Certified Educator & Spesialis EdTech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Teknologi Terkini',
    summary: 'Pemanfaatan Artificial Intelligence (AI) untuk merancang modul ajar berdiferensiasi, asesmen otomatis, dan media interaktif.',
    description: 'Tingkatkan efisiensi dan daya tarik belajar mengajar Anda dengan teknologi AI. Pelajari teknik prompt engineering untuk guru, pembuatan video animasi pembelajaran berbasis AI, hingga simulasi asesmen kejuruan.',
    syllabus: [
      'Prompt Engineering untuk Perancangan Modul Ajar Kurikulum Merdeka',
      'Pembuatan Video Edukasi & Simulasi Virtual Interaktif',
      'Asesmen Formatif & Sumatif Otomatis Menggunakan AI',
      'Etika Penggunaan AI di Lingkungan Sekolah Vokasi'
    ],
    benefits: [
      'Sertifikat Kompetensi 32 JP Terverifikasi',
      'Akun Premium Tool AI Pembelajaran (3 Bulan)',
      'Bank Prompt & Template Perangkat Ajar Lengkap',
      'Gabung Komunitas Pendidik Inovatif Vokasi'
    ],
    quota: 80,
    registered: 64,
    startDate: '18 Oktober 2026',
    investment: 'Gratis (Anggota Delta)'
  },
  {
    id: 'guru-project-based-learning',
    title: 'Pengembangan Project-Based Learning (PjBL) & Portofolio Industri',
    category: 'guru',
    targetAudience: 'Guru Mata Pelajaran Produktif / Kejuruan',
    duration: '3 Hari (24 JP)',
    format: 'Hybrid (Daring & Luring)',
    level: 'Menengah',
    location: 'Lab Terpadu SMKS Yapisa Bogor',
    instructor: {
      name: 'Siti Rahmawati, S.Pd., M.M.',
      title: 'Instruktur Nasional Pembelajaran Vokasi Berbasis Proyek',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Pedagogik Kejuruan',
    summary: 'Metode mendesain proyek nyata di kelas kejuruan yang menghasilkan produk berstandar pasar dan bernilai jual.',
    description: 'Transformasi pembelajaran kelas menjadi lingkungan kerja nyata. Guru akan dilatih membimbing siswa menyelesaikan riil project dari pesanan industri, mengintegrasikan lintas mata pelajaran, dan menyusun rubrik penilaian autentik.',
    syllabus: [
      'Prinsip Desain PjBL Terintegrasi Standardisasi Industri',
      'Manajemen Proyek Kelas Menggunakan Agile / Scrum Sederhana',
      'Penyusunan Rubrik Penilaian Portofolio & Unjuk Kerja',
      'Showcase & Pameran Hasil Karya Siswa Berstandar Industri'
    ],
    benefits: [
      'Sertifikat Resmi 24 JP',
      'Kumpulan Studi Kasus Proyek Kejuruan Nyata',
      'Buku Panduan Penilaian Autentik PjBL',
      'Pendampingan Pembuatan Rubrik Pembelajaran'
    ],
    quota: 50,
    registered: 41,
    startDate: '5 November 2026',
    investment: 'Gratis (Anggota Delta)'
  },

  // === TENAGA KEPENDIDIKAN (TENDIK) ===
  {
    id: 'tendik-digitalisasi-administrasi',
    title: 'Digitalisasi Tata Kelola Administrasi & Arsip Sekolah Vokasi Modern',
    category: 'tendik',
    targetAudience: 'Staf Tata Usaha (TU), Kepegawaian & Kearsipan',
    duration: '2 Hari (16 JP)',
    format: 'Luring (Tatap Muka)',
    level: 'Menengah',
    location: 'Delta Training Hall, Cibinong, Bogor',
    instructor: {
      name: 'Rahmat Hidayat, S.Sos., M.AP.',
      title: 'Pakar Tata Kelola Sistem Informasi Sekolah & Kearsipan Digital',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Efisiensi Sekolah',
    summary: 'Optimalisasi sistem informasi manajemen sekolah, cloud archiving, dan otomasi korespondensi persuratan dinas.',
    description: 'Bimbingan teknis komprehensif bagi staf administrasi sekolah untuk beralih dari kearsipan konvensional menuju sistem digital paperless yang cepat, aman, dan mudah ditelusuri untuk kebutuhan akreditasi.',
    syllabus: [
      'Manajemen Dokumen & Kearsipan Elektronik Sesuai Standar ANRI',
      'Otomasi Persuratan dan Disposisi Digital Berbasis Cloud',
      'Pengelolaan Database Dapodik & Layanan Informasi Siswa Efisien',
      'Keamanan Data (Data Security) & Backup Terjadwal Dokumen Lembaga'
    ],
    benefits: [
      'Sertifikat Resmi Tendik Vokasi 16 JP',
      'Aplikasi Template Pengarsipan Digital Berbasis Spreadsheet/Cloud',
      'SOP Standar Administrasi Tata Usaha SMK',
      'Konsultasi Teknis Pengelolaan Dokumen Akreditasi'
    ],
    quota: 40,
    registered: 35,
    startDate: '12 November 2026',
    investment: 'Gratis (Anggota Delta)'
  },
  {
    id: 'tendik-manajemen-lab-k3',
    title: 'Standardisasi Manajemen Bengkel / Lab & K3 Vokasi Berstandar ISO',
    category: 'tendik',
    targetAudience: 'Laboran, Toolman & Pengelola Bengkel Praktik',
    duration: '2 Hari (16 JP)',
    format: 'Luring (Tatap Muka)',
    level: 'Menengah',
    location: 'Workshop SMK Madinatul Quran, Jonggol',
    instructor: {
      name: 'Ahmad Fauzi, S.T., M.Eng.',
      title: 'Auditor K3 & Konsultan Keselamatan Fasilitas Industri',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Keselamatan Kerja',
    summary: 'Penerapan 5R (Ringkas, Rapi, Resik, Rawat, Rajin), SOP perawatan peralatan bengkel/lab, dan mitigasi risiko K3.',
    description: 'Pelatihan teknis langsung di bengkel vokasi untuk memastikan setiap ruang praktik siswa memenuhi regulasi Kesehatan dan Keselamatan Kerja (K3), tata letak perkakas yang aman, dan inventarisasi suku cadang.',
    syllabus: [
      'Penerapan Budaya Industri 5R / 5S di Lingkungan Sekolah Kejuruan',
      'Penyusunan SOP Keselamatan Kerja & Prosedur Tanggap Darurat Lab',
      'Manajemen Inventaris Alat dan Pemeliharaan Preventif (Preventive Maintenance)',
      'Pengelolaan Limbah B3 Praktik Siswa Sesuai Regulasi Lingkungan'
    ],
    benefits: [
      'Sertifikat Kompetensi Pengelolaan Lab & K3 16 JP',
      'Format Dokumen Checklist 5R & Form Maintenance Alat',
      'Safety Sign Kit (File Desain Rambu K3 Siap Cetak)',
      'Panduan Uji Emisi & Penanganan Limbah B3 Sekolah'
    ],
    quota: 30,
    registered: 26,
    startDate: '20 November 2026',
    investment: 'Gratis (Anggota Delta)'
  },

  // === MURID / SISWA ===
  {
    id: 'murid-work-readiness-bootcamp',
    title: 'Vocational Work Readiness & Personal Branding Sukses Rekrutmen DUDI',
    category: 'murid',
    targetAudience: 'Siswa SMK Kelas XI & XII Semua Jurusan',
    duration: '2 Hari (12 JP)',
    format: 'Hybrid (Daring & Luring)',
    level: 'Semua Level',
    location: 'Aula SMK Panca Karya Sentul & Live Streaming',
    instructor: {
      name: 'Annisa Maharani, S.Psi., M.M.',
      title: 'Talent Acquisition & Career Coach Industri Terkemuka',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Kesiapan Kerja',
    summary: 'Bedah CV ATS-friendly, simulasi interview kerja industri, etos kerja profesional, dan pengembangan LinkedIn portofolio.',
    description: 'Persiapkan diri Anda untuk langsung terserap dunia kerja setelah lulus! Siswa akan dibimbing langsung oleh praktisi rekrutmen perusahaan dalam menyusun CV yang memikat HRD, teknik wawancara kerja, dan etika profesional.',
    syllabus: [
      'Menyusun CV ATS-Friendly & Video Resume yang Menarik HRD',
      'Bedah Portofolio Kejuruan Berdasarkan Jurusan',
      'Simulasi Wawancara Kerja (Mock HR & User Interview)',
      'Etika Komunikasi Kerja, Adaptabilitas & Mengelola Stres'
    ],
    benefits: [
      'Sertifikat Work-Readiness Delta Career Center',
      'Review & Feedback Personal CV Gratis oleh HRD',
      'Akses Langsung ke Bursa Kerja Khusus (BKK) Mitra Delta',
      'Grup Mentoring Karir Persiapan Lulusan'
    ],
    quota: 120,
    registered: 98,
    startDate: '15 Oktober 2026',
    investment: 'Gratis untuk Siswa SMK Mitra'
  },
  {
    id: 'murid-coding-ai-future-skills',
    title: 'Bootcamp Generative AI & Digital Skills untuk Generasi Emas Vokasi',
    category: 'murid',
    targetAudience: 'Siswa SMK Jurusan RPL, TKJ, DKV, & Umum',
    duration: '4 Pertemuan (16 JP)',
    format: 'Daring Interaktif',
    level: 'Dasar',
    location: 'Discord Community & Zoom Interaktif',
    instructor: {
      name: 'Muhammad Farhan, B.Comp.Sc.',
      title: 'Software Engineer & AI Community Lead',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop'
    },
    badge: 'Digital Skills',
    summary: 'Eksplorasi kecerdasan buatan, visual generation, otomasi tugas digital, dan logika programming dasar untuk masa depan.',
    description: 'Bootcamp hands-on intensif yang melatih siswa vokasi menguasai tools teknologi masa kini: coding dasar, integrasi open-source AI, pembuatan website portofolio sendiri, dan pemanfaatan AI untuk meningkatkan produktivitas belajar.',
    syllabus: [
      'Memahami Ekosistem Generative AI & Cara Kerjanya',
      'Membangun Website Portofolio Interaktif dengan Vite & Tailwind',
      'Pemanfaatan AI untuk Desain Grafis & Konten Multimedia',
      'Mini Project Showcase: Solusi Teknologi untuk Lingkungan Sekolah'
    ],
    benefits: [
      'Sertifikat Digital Completion dengan ID Verifikasi',
      'Source Code & Template Project Portfolio Siap Pakai',
      'Akses Repositori Materi & Rekaman Selamanya',
      'Reward Hadiah Menarik untuk Proyek Terbaik'
    ],
    quota: 100,
    registered: 89,
    startDate: '28 Oktober 2026',
    investment: 'Gratis untuk Siswa SMK Mitra'
  }
]
