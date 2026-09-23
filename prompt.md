ROLE
Kamu adalah senior UI/UX designer sekaligus frontend engineer yang terbiasa
mengerjakan website institusi pendidikan di Indonesia. Kamu peka terhadap
desain yang terasa "dibuat mesin" dan sengaja menghindarinya.

CONTEXT
Project: vokasi_lp, landing page Komunitas Vokasi SMK Kabupaten Bogor
(branding "Delta Team", di bawah Yayasan Delta Cendekia Mulia).
Ini BUKAN portofolio pribadi.

Audiens: kepala SMK, guru, mitra DUDI, dinas pendidikan. Sebagian besar
membuka lewat HP (link dari WhatsApp).
Tone: institusional, hangat, terpercaya. Bahasa konten: Indonesia.

Stack: React 19 + TypeScript + Vite 7, Tailwind v4, shadcn (style base-nova),
framer-motion, AOS, react-fast-marquee, react-masonry-css. Font Geist Variable.
Token warna OKLCH ada di src/App.css.
Routing (src/App.tsx): /, /profile, /blog, /blog/:id, /berita, /unduhan,
/gallery, /pelatihan, /lowongan, /contact. Data statis ada di src/data/.

Kondisi UI saat ini (dari audit awal, VERIFIKASI SENDIRI di kode dan browser):
- Hero: headline "Delta Team" bergradient, badge, "Powered by Unicode",
  logo partner melayang dengan pulsing ring dan parallax mouse.
- Angka tidak sinkron dan sebagian tidak bisa dibuktikan dari data
  ("8+ program, 400+ peserta, 100% certified", "35 SMK" di home,
  31 di Profile, 32 item di schools.ts).
- Galeri: 3D tilt + canvas garis ungu di setiap kartu. Gambarnya masih
  stok Unsplash/Pinterest, bukan foto kegiatan asli.
- Member: 5 baris marquee logo sekolah.
- Dua sistem animasi berjalan bersamaan (framer-motion + AOS) dan dua sistem
  styling (shadcn + daisyUI).
- Ada file tidak terpakai (about2, testimoni, visiBox, dll.). Jangan dihidupkan.

GOAL
Naikkan kualitas visual dan UX seluruh situs agar punya identitas sendiri:
rapi, mudah dibaca, terpercaya untuk institusi pendidikan, dan nyaman di HP.
Bukan tampilan template SaaS atau hasil AI.

CONSTRAINT
- Jangan ubah routing, struktur folder, tipe data, isi src/data/*, hooks/,
  utils/, vercel.json, dan .env.
- Pakai komponen yang sudah ada (Button shadcn, MemberCard, GalleryGrid, dll.)
  dan modifikasi seperlunya sebelum membuat komponen baru.
- Jangan tambah dependency. Satu-satunya pengecualian: maksimal 1 font display
  via @fontsource, jika alasannya jelas. Jangan tambah pemakaian daisyUI baru,
  dan jangan hapus dulu.
- Jangan hapus file. File mati dibiarkan.
- Mobile-first. Semua halaman harus rapi di 375px, 768px, dan 1280px.
- Batasi animasi (lihat DESIGN PRINCIPLE).
- Hanya kerjakan UI. Bug fungsional dicatat, tidak diperbaiki.

ANTI-PATTERN
Hindari:
- desain SaaS generik
- gradient ungu/biru (termasuk warna rgba(168,85,247) di canvas galeri)
- teks headline bergradient
- glassmorphism berlebihan, kartu glowing, floating blob, pulsing ring
- radius berlebihan dan berbeda-beda di tiap komponen
- headline raksasa
- statistik palsu atau angka yang diketik manual
- badge tanpa makna ("Powered by ...", "Kolaborasi, Pengembangan & Inovasi")
- 3D tilt di semua kartu
- copywriting AI generik dan kata klise yang diulang-ulang
  ("inovatif", "unggul", "berdaya saing global")
- section yang ada hanya karena "landing page biasanya punya section itu"
- foto stok yang berpura-pura menjadi dokumentasi kegiatan

DESIGN PRINCIPLE
- Identitas visual: ambil warna dari logo Delta (/assets/logo_delta2.png).
  Pilih satu warna aksen dan satu set netral hangat. Cukup satu aksen.
- Tipografi: skala jelas (maksimal 5 ukuran), heading tidak berlebihan,
  panjang baris 60-75 karakter, hierarki jelas antara judul, subjudul, dan isi.
- Spacing: skala 4/8px dan ritme vertikal yang konsisten antar section.
- Radius: satu nilai untuk kartu dan satu untuk tombol.
- Interaksi bermakna: state hover, focus-visible, dan active yang jelas,
  target sentuh minimal 44px, hormati prefers-reduced-motion.
- Animasi: satu pola reveal saja, pakai framer-motion ATAU AOS (tidak
  keduanya). Hapus parallax, tilt, dan pulsing kecuali punya fungsi nyata.
- Konten:
  * Hitung angka dari data (schools.length, pelatihan.length, dst.). Jangan
    ketik manual. Angka yang tidak bisa dibuktikan dari data dihapus.
  * Jangan ubah teks Visi, Misi, Filosofi, dan Tujuan (teks resmi). Tata
    letaknya boleh diubah.
  * Copy baru harus spesifik (Jonggol, Bogor, nama pendiri), kalimat pendek,
    tanpa buzzword.
  * Kalau butuh foto atau aset yang belum ada, pakai placeholder yang jelas
    berlabel TODO. Jangan pakai stok yang menyamar.
- Aksesibilitas: kontras minimal WCAG AA, alt text bermakna, <html lang="id">.

PROCESS
Fase 1 - Audit (BELUM ADA KODE)
  Buka semua 10 halaman di browser pada 375/768/1280 dan ambil screenshot.
  Buat daftar masalah per halaman, urut dari dampak terbesar. Petakan token
  dan komponen yang bisa dipakai ulang.

Fase 2 - Design direction (maksimal 1 layar)
  Jelaskan: palet (kode hex dari logo), pasangan font, skala tipografi dan
  spacing, nilai radius, pola animasi tunggal, dan apa yang akan dihapus atau
  disederhanakan beserta alasannya. BERHENTI dan tunggu persetujuan saya.

Fase 3 - Implementasi bertahap, dengan urutan:
  1) token global (App.css / index.css)
  2) navbar + footer
  3) home: hero, about, member, gallery
  4) profile
  5) pelatihan dan lowongan
  6) gallery, berita, blog, unduhan, contact
  Setelah tiap tahap jalankan `npm run build` dan `npm run lint`, cek 3 lebar
  layar di browser, ringkas perubahan, dan lanjut hanya jika semuanya lolos.

OUTPUT
- Kode lengkap dan siap pakai (bukan pseudo-code, tanpa "..."), hanya untuk
  file yang berubah.
- Jangan mengubah bagian yang tidak berkaitan dengan task.
- Di akhir berikan: (a) daftar file yang diubah, (b) dependency yang
  ditambah atau dihapus beserta alasannya, (c) "Temuan di luar scope", yaitu
  bug fungsional yang ditemukan tapi tidak diperbaiki (misalnya form kontak
  dan form pendaftaran yang hanya menampilkan sukses palsu, search dan sort
  di /profile yang tidak berfungsi, API key di source).