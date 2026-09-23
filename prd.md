# PRD / Rangkuman Proyek — vokasi_lp (Delta Team)

> Dokumen ini adalah rangkuman lengkap dan detail tentang proyek **vokasi_lp** agar dapat dipahami secara menyeluruh (misalnya untuk dianalisis oleh asisten AI seperti Claude) tanpa harus membaca seluruh kode sumber.

---

## 1. Ringkasan Eksekutif

**vokasi_lp** adalah **landing page / situs publik** untuk komunitas kepala SMK (Sekolah Menengah Kejuruan) di Kabupaten Bogor yang bernama **Komunitas Vokasi SMK Kabupaten Bogor**, di bawah naungan **Yayasan Delta Cendekia Mulia**. Branding publiknya adalah **"Delta Team"**.

- **Tujuan**: menjadi wadah kolaboratif profesional para Kepala SMK Kabupaten Bogor untuk mencetak generasi vokasi yang unggul, inovatif, dan berdaya saing global.
- **Jenis aplikasi**: *Single Page Application (SPA)* — **React 19 + TypeScript + Vite 7**, di-render di sisi klien (client-side rendering), tanpa backend sendiri.
- **Deployment**: **Vercel**, nama project `vokasi-lp`.
- **Repo**: `https://github.com/Hilmi-Vaskrona/vokasi_lp.git`
- **Bahasa konten**: Indonesia.
- **Sumber data**: sebagian besar konten **statis (hardcoded)** di dalam kode; hanya halaman **Berita dan Blog** yang mengonsumsi **API berita eksternal** (NewsData.io dan GNews).
- **Fitur utama** (10 route): Beranda, Profile (direktori sekolah anggota), Blog (artikel + berita pendidikan), Berita (berita terkini dengan filter), Unduhan (peraturan), Gallery (galeri kegiatan), Pelatihan (agenda pelatihan + modal pendaftaran), Lowongan (bursa karir + modal lamaran), Kontak.

---

## 2. Tech Stack

### Production dependencies (dari `package.json`)
| Paket | Versi | Fungsi |
|---|---|---|
| `react` / `react-dom` | ^19.1.1 | Library UI |
| `vite` | ^7.1.7 | Build tool & dev server |
| `typescript` | ~5.9.3 | Type checking |
| `react-router-dom` | ^7.9.4 | Routing SPA (BrowserRouter) |
| `@tanstack/react-query` (+devtools) | ^5.90.x | Server state caching (berita) |
| `axios` | ^1.12.2 | HTTP client (berita) |
| `tailwindcss` + `@tailwindcss/vite` | ^4.1.14 | Styling (utility-first v4) |
| `daisyui` | ^5.5.19 | Plugin komponen tambahan (devDependencies) |
| `shadcn` + `cn` + `class-variance-authority` | ^0.7.1+ | Komponen UI ala shadcn (style `base-nova`) |
| `@base-ui/react` | ^1.8.0 | Komponen headless untuk Button shadcn |
| `framer-motion` | ^12.43.0 | Animasi (parallax, stagger, hover, AnimatePresence) |
| `aos` (+ `@types/aos`) | ^2.3.4 | Animasi scroll-reveal (contact, berita, pelatihan, dll.) |
| `react-fast-marquee` | ^1.6.5 | Carousel/infinite marquee logo sekolah |
| `react-masonry-css` | ^1.0.16 | Layout masonry |
| `lucide-react` / `lucide` / `react-icons` | ^0.545 / ^5.5 | Icon |
| `@fontsource-variable/geist` | ^5.3.0 | Font Geist Variable |
| `tw-animate-css` | ^1.4.0 | Utilitas animasi untuk Tailwind/shadcn |

### Terinstall tapi TIDAK dipakai (dead dependencies)
- `@gsap/react`
- `ckeditor5`, `ckeditor` (v0.3), `@ckeditor/ckeditor5-build-classic`

### Dev tooling
- `@vitejs/plugin-react-swc` (Fast Refresh via SWC)
- `eslint` 9 + `typescript-eslint` + plugin react-hooks/react-refresh
- `@types/node`, `@types/react`

### Konfigurasi utama
- **`vite.config.ts`**: plugin `react()` (SWC) + `tailwindcss()`, alias `@` → `./src`.
- **`components.json`**: shadcn style `base-nova`, icon `lucide`, alias `@/components`, `@/lib`, dst.
- **`tsconfig`**: `tsconfig.json` (references), `tsconfig.app.json`, `tsconfig.node.json`.

---

## 3. Struktur Direktori `src/`

```
src/
├── main.tsx                        # Entry React: QueryClient + Provider + Devtools
├── App.tsx                         # Shell aplikasi: navbar + footer + Routing (10 route)
├── index.css                       # Tailwind import + CSS kustom (loader, skeleton, ellipsis)
├── App.css                         # Token shadcn @theme, variabel OKLCH, daisyUI plugin
├── declarations.d.ts               # Deklarasi modul *.jsx
├── helpers/
│   └── reactQuery.tsx              # (TIDAK TERPAKAI) wrapper provider React Query
├── hooks/
│   ├── useNewsModule.ts            # Hook berita GNews.io (API key hardcoded)
│   └── useNewsData.ts              # Hook berita NewsData.io (key dari env)
├── lib/
│   └── utils.ts                    # re-export `cn` dari paket "cn"
├── utils/
│   ├── axiosClient.ts              # Instance axios (baseURL http://localhost:5002)
│   └── clickTracker.ts             # Hitung klik sekolah → localStorage → TopSchools
├── data/
│   ├── schools.ts                  # 32 anggota SMK (School[])
│   ├── pelatihan.ts                # 7 program pelatihan (PelatihanItem[])
│   └── lowongan.ts                 # 6 lowongan kerja (LowonganItem[])
├── pages/
│   ├── home.tsx                    # Landing page (komposisi 4 section)
│   ├── contact.tsx                 # Halaman kontak
│   ├── profile/page.tsx            # Direktori sekolah anggota
│   ├── berita/page.tsx             # Berita terkini (NewsData.io + filter)
│   ├── gallery/page.tsx            # Galeri kegiatan + lightbox
│   ├── lowongan/page.tsx           # Bursa karir + modal lamaran
│   ├── pelatihan/page.tsx          # Program pelatihan + modal pendaftaran
│   ├── unduhan/page.tsx            # Peraturan vokasi (konten statis)
│   ├── blog/
│   │   ├── page.tsx                # Listing blog (NewsData.io + localPosts)
│   │   ├── localpost.ts            # 1 artikel lokal (Dr. Iskandar)
│   │   ├── detail/detail.tsx       # Detail artikel (cari di sessionStorage + embed PDF)
│   │   ├── [id]/page.tsx           # ⚠ ORPHANED (gaya Next.js App Router, tidak ter-route)
│   │   └── tsx                     # ⚠ ORPHANED (partial, import next/image)
│   ├── saintek/
│   │   ├── saintek.tsx             # ⚠ ORPHANED halaman "Saintek" (tidak ter-route)
│   │   └── detail/detailNews.tsx   # ⚠ ORPHANED (link ke /saintek/news/:id)
│   └── pojok-dakwah/page.tsx       # ⚠ ORPHANED halaman "Pojok Dakwah" (tidak ter-route)
├── layouts/
│   ├── home/
│   │   ├── hero.tsx                # Hero landing (framer-motion parallax)
│   │   ├── about2.tsx              # ⚠ TIDAK TERPAKAI (scroll-jacking versi About)
│   │   ├── gallery.tsx             # Section galeri landing (masonry)
│   │   ├── member.tsx              # Section anggota (marquee + TopSchools)
│   │   ├── testimoni.tsx           # ⚠ TIDAK TERPAKAI (testimoni)
│   │   └── visiBox.tsx             # ⚠ TIDAK TERPAKAI (accordion, konten beda organisasi)
│   ├── Gallery/page.tsx            # ⚠ ORPHANED versi lama halaman galeri
│   ├── effect/about.css            # (TIDAK TERPAKAI) utilitas fade
│   └── assets/                     # Meeting.png, Teaching.png
└── components/
    ├── ui/
    │   ├── button.tsx              # Button shadcn (base-ui + cva)
    │   └── generative-art-canvas.tsx # Canvas garis partikel saat hover
    ├── footer.tsx                  # Footer situs
    ├── about.tsx                   # About / Visi / Misi / Tujuan (dipakai landing)
    ├── aboutRework.tsx             # ⚠ FILE KOSONG
    ├── loader.tsx                  # SVG ring loader
    ├── Breadcrumb.tsx              # Breadcrumb trail
    ├── HeroPost.tsx                # ⚠ TIDAK TERPAKAI
    ├── GalleryMasonry.tsx          # wrapper react-masonry-css
    ├── GalleryGrid.tsx             # grid galeri 3D-tilt → Lightbox
    ├── LightboxModal.tsx           # modal gambar fullscreen (Esc close)
    ├── NewsCard.tsx                # kartu berita
    ├── NewsGrid.tsx                # grid kartu berita (AOS fade)
    ├── NewsFilter.tsx              # tab filter (Semua / Sainstek / Pojok Dakwah)
    ├── NewsSkeleton.tsx            # skeleton shimmer
    ├── memberCard.tsx              # kartu sekolah di direktori
    ├── PostCard.tsx                # kartu artikel blog
    ├── PostList.tsx                # wrapper PostCard → Link /blog/:id
    ├── Pagination.tsx              # Pagination prev/pages/next
    ├── SearchBar.tsx               # input pencarian
    ├── SidebarKategori.tsx         # tombol kategori pill
    ├── SidebarRecent.tsx           # thumbnail artikel terbaru
    ├── sidebarCategory.tsx         # ⚠ sidebar sekunder (link ke /saintek yang tak ter-route)
    └── TopSchools.tsx              # Top-5 sekolah berdasarkan klik (localStorage)
```

---

## 4. Routing & Navigasi

Semua route didefinisikan di **`src/App.tsx`** (React Router v7, `BrowserRouter`). Navbar fixed (tinggi `h-20`, `z-[999]`) berubah menjadi floating bar blur saat di-scroll (`scrollY > 20`). Ada 9 menu navbar + hamburger menu mobile (auto-close saat navigasi).

| Route | Halaman (/route file) | Isi utama |
|---|---|---|
| `/` | `pages/home.tsx` | Landing page |
| `/profile` | `pages/profile/page.tsx` | Direktori kelembagaan anggota |
| `/blog` | `pages/blog/page.tsx` | Listing artikel & berita pendidikan |
| `/blog/:id` | `pages/blog/detail/detail.tsx` | Detail artikel (cari di localPosts → sessionStorage, embed PDF) |
| `/berita` | `pages/berita/page.tsx` | Berita terkini (NewsData.io) |
| `/unduhan` | `pages/unduhan/page.tsx` | Peraturan SMK Vokasi (statis) |
| `/gallery` | `pages/gallery/page.tsx` | Galeri kegiatan |
| `/pelatihan` | `pages/pelatihan/page.tsx` | Program pelatihan |
| `/lowongan` | `pages/lowongan/page.tsx` | Bursa karir / lowongan |
| `/contact` | `pages/contact.tsx` | Kontak & lokasi |

Struktur App:
- `main.tsx` → `<QueryClientProvider><App/></QueryClientProvider>`
- `App.tsx` → `WrappedApp` membungkus `<BrowserRouter>` dengan `<App/>` + global `<Footer/>` sehingga `useLocation` bekerja.
- URL Logo: `/assets/logo_delta2.png`, brand "Delta Team".

### ⚠ Route yang ada di kode tapi TIDAK terdaftar di Router (mengarah ke halaman hilang)
- `src/pages/saintek/saintek.tsx` → navigasinya ke `/saintek/news/:id` (tidak ada route → 404).
- `src/pages/pojok-dakwah/page.tsx` → navigasi ke `/saintek/news/:id`.
- `src/pages/blog/[id]/page.tsx` → gaya Next.js App Router (`async function` + `params`), tidak cocok dengan React Router.
- `src/pages/blog/tsx` → partial file, import `next/image`, bukan file `.tsx` valid.
- `src/layouts/Gallery/page.tsx` → versi lama galeri.
- `components/sidebarCategory.tsx` → menautkan ke `/saintek?category=...` (tidak ter-route).

---

## 5. Detail Setiap Halaman

### 5.1 Home `/` (`pages/home.tsx`)
Landing page di atas background `bg-[#F7F7F7]`, menyusun 4 section aktif:
1. **Hero** (`layouts/home/hero.tsx`): headline "Delta Team" gradient; subline "Wadah kolaboratif profesional Kepala SMK Kabupaten Bogor untuk mencetak generasi vokasi yang unggul, inovatif, dan berdaya saing global."; badge "Kolaborasi, Pengembangan & Inovasi"; CTA "Bergabung Sekarang" / "Pelajari Lebih Lanjut"; "Powered by Unicode"; logo lingkaran Delta Team dengan **parallax mouse** (framer-motion) + logo partner floating (Kemdikbud, Vokasi, Kota Bogor, SMK Bisa) + pulsing ring; indikator "Scroll Down".
2. **About** (`components/about.tsx`): 5 blok animasi —
   - *Tentang Kami*: komunitas profesional Kepala SMK Bogor, digagas **Ibu Dina Martha Tiraswati, M.Pd.**, menghubungkan sekolah–universitas–industri.
   - *Filosofi*: "Bersama Kita Bisa, Bermitra Kita Juara".
   - *Visi*: "Terwujudnya SMK unggul, kolaboratif, berdaya saing global…".
   - *Misi*: 5 poin (kolaborasi, kemitraan DUDI, program Entrepreneurship Leader, pelatihan guru, transformasi).
   - *Tujuan Strategis*: 5 kartu (Jejaring Kolaborasi, Standar Internasional, Peluang Kerja, Kepemimpinan Agen Perubahan, Inovasi Pembelajaran).
3. **Member** (`layouts/home/member.tsx`): klaim "35 SMK Bogor"; menampilkan **TopSchools** (top-5 berdasarkan klik localStorage) + 5 baris **marquee scroll** strip logo sekolah (kecepatan/arah bervariasi). Klik logo → track click (`clickTracker.ts`) → `/profile`.
4. **Gallery** (`layouts/home/gallery.tsx`): masonry 11 gambar Pinterest, dengan gradien fade di bawah + tombol "Lihat Semua" → `/gallery`.

Komponen landing yang dikomentari / tidak aktif: `about2.tsx` (scroll-jacking) & `testimoni.tsx`.

### 5.2 Profile `/profile` (`pages/profile/page.tsx`)
"Direktori Kelembagaan Anggota".
- Hero banner dengan bendera Indonesia + statistik (total sekolah **31**, jurusan populer TJKT·RPL·DKV, lokasi dominan Bogor).
- **Search input & sort select TAMPAKHAN tetapi TIDAK berfungsi (UI-only, tanpa state).**
- Grid responsif `MemberCard` (nama, logo lingkaran, alamat, pill kategori, expandable jika > 3 kategori), array members hardcoded terurut A–Z.

### 5.3 Blog `/blog` (`pages/blog/page.tsx`)
- Left 65%: Breadcrumb, judul "Semua Blog", skeleton saat loading → `PostList` (pagination 6/halaman) berisi `localPosts` + artikel NewsData.io (kategori pendidikan, keyword dipetakan ke kategori lokal).
- Right 35% sticky sidebar: `SearchBar`, `SidebarKategori` (6 kategori statis), `SidebarRecent` (3 teratas).
- Hasil gabungan di-cache di `sessionStorage["allPosts"]`.
- Data: `VITE_API_NEWS_IO_KEY`, query: `pendidikan OR sekolah OR siswa OR guru OR universitas OR kampus OR pelajar`, country `id`, bahasa `id`, kategori `education`.

### 5.4 Blog Detail `/blog/:id` (`pages/blog/detail/detail.tsx`)
- Mencari post di `localPosts`, lalu `sessionStorage["allPosts"]`.
- Render judul, kategori/brand, gambar, deskripsi, dan **embed PDF `/assets/gurubadut.pdf`** via `dangerouslySetInnerHTML`.
- Sidebar kanan menampilkan artikel lokal terbaru.
- `localpost.ts`: 1 artikel "Guru Badut dan Guru yang Dianut" oleh **Dr. Iskandar, M.Pd.** (konten markdown penuh).

### 5.5 Berita `/berita` (`pages/berita/page.tsx`)
"Berita Terkini".
- `NewsFilter` tab: **Semua / 🔬 Sainstek / 🕌 Pojok Dakwah** (memetakan query: `sains OR teknologi OR ilmu` / `dakwah OR islam OR agama`).
- Menggunakan `useNewsData` (NewsData.io, country `id`, bahasa `id`). Ada state skeleton, error state, dan `NewsGrid` dari `NewsCard` yang menaut ke URL artikel asli.

### 5.6 Unduhan `/unduhan` (`pages/unduhan/page.tsx`)
"Peraturan SMK Vokasi Kota Bogor" — **konten statis sepenuhnya**:
- Hero, section "Klasifikasi Peraturan" (4 kartu: Peraturan BPK, Kementerian/Lembaga, Pusat, Daerah).
- Kartu placeholder "Peraturan BPK", "Peraturan Terbaru / Input Terbaru", "Standar Layanan" (checkmarks + logo).
- Embed YouTube `https://www.youtube.com/embed/IFFOW8DlgTQ`.
- Tombol-tombol tidak punya aksi nyata (no-op).

### 5.7 Gallery `/gallery` (`pages/gallery/page.tsx`)
"Galeri Kegiatan".
- Tab kategori: Semua / Kegiatan / Acara / Ekstrakurikuler (pakai shadcn `Button`).
- `GalleryGrid`: kartu hover 3D-tilt + canvas generative art, 9 gambar hardcoded Unsplash.
- Klik → `LightboxModal` (fullscreen, tutup dengan Esc/klik/tombol close).

### 5.8 Pelatihan `/pelatihan` (`pages/pelatihan/page.tsx`)
"Program Pelatihan Terpadu Komunitas Delta Team".
- Hero dengan metrik: 8+ program, 400+ peserta, 35+ SMK, 100% certified.
- Tab audiens (Semua / Kepala Sekolah / Guru / Tendik / Murid, dengan count), search + filter format (Luring/Hybrid/Daring).
- Kartu program dengan progress bar kuota; **modal detail/pendaftaran**: syllabus, benefits, instruktur, form cepat (mensimulasikan sukses), plus tombol WhatsApp ke `6281293423248`.
- Data dari `data/pelatihan.ts` (7 program: 2 Kepala Sekolah, 2 Guru, 2 Tendik, 2 Murid; tanggal pelatihan tahun 2026).

### 5.9 Lowongan `/lowongan` (`pages/lowongan/page.tsx`)
"Bursa Karir & Talenta SMK Delta".
- Hero metrik, tab kategori, search + dropdown filter sekolah.
- Kartu lowongan (logo, sekolah, judul, lokasi, pill, deadline) dan **modal detail/lamaran** (deskripsi, tanggung jawab, kualifikasi, benefit, gaji, cara apply, form cepat dengan simulasi sukses).
- Data dari `data/lowongan.ts` (6 lowongan: SMK Madinatul Quran, Panca Karya Sentul, YMA, Darus Sa'adah, Yapisa, Al Hafidz).

### 5.10 Kontak `/contact` (`pages/contact.tsx`)
- Hero dengan `/background/bg-contact.jpg`.
- **Form kontak (nama/email/pesan + tombol "Kirim Pesan") TANPA submit handler — tidak berfungsi.**
- Kartu "Ayo Bergabung", 3 info: WhatsApp +62 812-9342-3248, email DeltaKv@delta-kv.com, lokasi Jonggol, Bogor.
- Embed Google Maps area Jonggol, Bogor. Animasi AOS.

---

## 6. Data & Integrasi API

### 6.1 File data statis + TypeScript types
| File | Type | Isi |
|---|---|---|
| `src/data/schools.ts` | `School { id; name; logo }` | 32 SMK anggota; logo dari `https://logo-sekolah-delta.vercel.app/logos/...` |
| `src/data/pelatihan.ts` | `PelatihanItem { id; title; category; targetAudience; duration; format; level; location; instructor; badge; summary; description; syllabus[]; benefits[]; quota; registered; startDate; investment }` | 7 program pelatihan |
| `src/data/lowongan.ts` | `LowonganItem { id; title; schoolName; schoolLogo; schoolLocation; schoolWebsite; category; type; experienceLevel; salaryRange; postedDate; deadline; isActive; description; responsibilities[]; requirements[]; benefits[]; contactEmail; contactPhone; howToApply }` | 6 lowongan kerja |
| `src/pages/blog/localpost.ts` | `localPosts[]` | 1 artikel lokal (Dr. Iskandar) |

Type inline lain: `NewsItem { title; link; source_id; pubDate; image_url; description }`, `ImageObject { src; category; title; description; date?; location? }`, `Member { name; image; logo; location?; categories?; url?; ... }`.

### 6.2 API eksternal (live)
| Tujuan | File | Endpoint | Auth |
|---|---|---|---|
| Berita teknologi (EN) | `hooks/useNewsModule.ts` | `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=9` | `apikey` **hardcoded di source** (`ea4bbb92932b8de3415756a37cbdb01e`) |
| Berita Indonesia | `hooks/useNewsData.ts` | `https://newsdata.io/api/1/news` param `{ apikey, country:"id", language:"id", category?, q? }` | `VITE_API_NEWS_IO_KEY` (env) |
| Berita pendidikan (Blog) | `pages/blog/page.tsx` | `https://newsdata.io/api/1/news` param query pendidikan | `VITE_API_NEWS_IO_KEY`, cache ke `sessionStorage["allPosts"]` |

### 6.3 Axios client
`src/utils/axiosClient.ts`:
```ts
export const axiosClient = axios.create({
  baseURL: "http://localhost:5002",
  headers: { "Content-Type": "application/json" },
});
```
Hanya dipakai oleh `useNewsModule.ts` (GNews). Backend `localhost:5002` tidak direferensikan di tempat lain — kemungkinan konfigurasi mati.

### 6.4 Env variables (`.env`)
```
API_NEWS_KEY                     → nilai apikey GNews (juga hardcoded di useNewsModule.ts)
VITE_API_NEWS_IO_KEY             → apikey NewsData.io (prefix pub_…)
VITE_ISLAMI_API_URL              → https://artikel-islami-api-kamu.up.railway.app (⚠ tidak direferensikan di src)
```

### 6.5 Aset eksternal pihak ketiga
- Logo sekolah: `https://logo-sekolah-delta.vercel.app/logos/...`, `https://background-sekolah-delta.vercel.app/...`
- Gambar berita: `asset.kompas.com`, `akcdn.detik.net.id` (URL original)
- Galeri: URL Unsplash + `i.pinimg.com` (Pinterest) hardcoded
- Video YouTube embed: `IFFOW8DlgTQ`
- Google Maps embed: Jonggol, Bogor
- WhatsApp deep-link: `https://wa.me/6281293423248`

### 6.6 Utilitas
- `src/utils/clickTracker.ts`: ketika logo sekolah diklik, simpan hitungan ke `localStorage` → dipakai `TopSchools` (top-5 paling sering diklik).

---

## 7. Komponen & Layout

### Komponen aktif (dipakai)
- `components/ui/button.tsx`: Button shadcn (base-ui + cva) — digunakan di gallery, lowongan, pelatihan, contact.
- `components/footer.tsx`: Footer global (branding "Yayasan Delta Cendekia Mulia / Komunitas Vokasi SMK Kabupaten Bogor").
- `components/about.tsx`: About/Visi/Misi/Tujuan landing.
- `components/loader.tsx`: SVG ring loader.
- `components/Breadcrumb.tsx`: breadcrumb trail.
- `components/GalleryMasonry.tsx` & `GalleryGrid.tsx` & `LightboxModal.tsx`: galeri.
- `components/NewsCard.tsx`, `NewsGrid.tsx`, `NewsFilter.tsx`, `NewsSkeleton.tsx`: halaman berita.
- `components/memberCard.tsx`: kartu sekolah.
- `components/PostCard.tsx`, `PostList.tsx`, `Pagination.tsx`, `SearchBar.tsx`, `SidebarKategori.tsx`, `SidebarRecent.tsx`: halaman blog.
- `components/TopSchools.tsx`: top-5 sekolah berdasarkan klik.
- `components/ui/generative-art-canvas.tsx`: canvas partikel di kartu galeri.

### Komponen/layout mati (untuk PRD/cleanup)
- `aboutRework.tsx` (kosong), `HeroPost.tsx`, `sidebarCategory.tsx`, `about2.tsx`, `testimoni.tsx`, `visiBox.tsx` (konten visi asrama Islam, bukan vokasi — kemungkinan sisa project lain), `helpers/reactQuery.tsx`, `layouts/Gallery/page.tsx`, `layouts/effect/about.css`.

---

## 8. Sistem Styling & Animasi

### CSS
- `src/App.css` (# main styling brain, ~430 baris):
  - `@import "tailwindcss"`, `"tw-animate-css"`, `"shadcn/tailwind.css"`, `"@fontsource-variable/geist"`.
  - `@custom-variant dark`; `@plugin "daisyui"`.
  - Token shadcn `@theme inline` (font/sidebar/chart/radius), variabel `:root` & `.dark` dalam **OKLCH** (base color `neutral`, radius 0.625rem).
  - `@layer base`: `border-border outline-ring/50`, bg/text default, font-sans.
- `src/index.css`: `@import "tailwindcss"` + `.ellipsis-2`, loader ring animasi (Uiverse "Nawsome"), `.no-scrollbar`, teks animasi "loading...", kelas UI Berita (`news-fade-in`, `skeleton-shimmer`, `line-clamp-2/3`). Catatan: beberapa utilitas duplikat antara App.css dan index.css.

### Animasi
- **framer-motion**: parallax hero, stagger/hover di about & galeri, AnimatePresence.
- **AOS** (`data-aos`): contact, berita, gallery, lowongan, pelatihan (initsialiasi per halaman).

### Font
- **Geist Variable** (`--font-sans`).

---

## 9. Deployment, SEO, PWA

### Vercel
- Project `vokasi-lp` (`.vercel/project.json`), origin GitHub `Hilmi-Vaskrona/vokasi_lp`.
- `vercel.json` rewrites: `/service-worker.js`, `/service-worker.js.map`, `/sitemap.xml`, `/robots.txt`, `/favicon.ico` → ke dirinya sendiri, plus catch-all `/(.*)` → `/` (SPA fallback).

### Status SEO / PWA
- **Tidak ada** service worker/PWA manifest (`sw.js`, workbox, vite-plugin-pwa).
- **Tidak ada** `sitemap.xml` dan `robots.txt` di `public/` maupun `dist/` (padahal Vercel rewrites sudah mengantisipasinya).
- **SEO minimal**: `index.html` dan `dist/index.html` hanya berisi charset, favicon `vite.svg`, viewport, dan `<title>vite-project</title>`. **Tidak ada** meta description, OG/Twitter tags, structured data. `<html lang="en">` padahal konten Indonesia.
- `npm run build` = `tsc -b && vite build`; lint = `eslint .`.

### Riwayat commit terkini (contoh pola)
`feat: implement MemberCard...`, `update lowongan, pelatihan`, `update gallery`, `update logo sekolah dan logo delta`, dst. (gaya conventional-ish, campur EN/ID).

---

## 10. Daftar Isu & Risiko (untuk perbaikan/saran Claude)

### 10.1 Dead code & orphaned files (prioritas tinggi untuk cleanup)
1. Halaman tidak ter-route: `pages/saintek/*`, `pages/pojok-dakwah/*`, `pages/blog/[id]/page.tsx`, `pages/blog/tsx`, `layouts/Gallery/page.tsx`.
2. Komponen tidak terpakai: `aboutRework.tsx` (kosong), `HeroPost.tsx`, `sidebarCategory.tsx`, `helpers/reactQuery.tsx`, `about2.tsx`, `testimoni.tsx`, `visiBox.tsx`, `layouts/effect/about.css`.
3. Dead dependencies: `@gsap/react`, `ckeditor5`, `ckeditor`, `@ckeditor/ckeditor5-build-classic`.
4. `home.tsx` & `saintek.tsx` banyak import yang dikomentari.

### 10.2 Keamanan (prioritas tinggi)
- **API key GNews hardcoded** di `hooks/useNewsModule.ts` (nilai sama dengan `.env` `API_NEWS_KEY`).
- **File `.env` ter-commit** ke repo (berisi key API). Sebaiknya pindahkan hanya ke env Vercel dan masukkan `.env` ke `.gitignore`; key GNews saat ini hanya dipakai di hook yang tidak terpakai → bisa dihapus.
- `VITE_ISLAMI_API_URL` tidak dipakai → hapus atau integrasikan.

### 10.3 UI / fungsionalitas
- **Form kontak tidak berfungsi** (tidak ada submit handler).
- **Search & sort di `/profile` UI-only** (tidak ada state/logika).
- Tombol-tombol di `/unduhan` no-op.
- `index.html` title masih "vite-project".
- Konten `testimoni` & `pojok-dakwah` masih lorem ipsum.

### 10.4 SEO / PWA (untuk produksi)
- Tambah meta description, OG/Twitter, structured data, `<html lang="id">`.
- Belum ada `sitemap.xml` / `robots.txt` / service worker (infrastruktur Vercel sudah siap).
- Ganti favicon `vite.svg` dengan logo Delta.

### 10.5 Konsistensi data & arsitektur
- Pelatihan/Lowongan/Unduhan/Gallery/Profile seluruhnya data statis hardcoded; hanya Blog/Berita yang live API, dengan pemetaan format yang tidak konsisten antar file.
- Backend `localhost:5002` di `axiosClient.ts` tidak berfungsi di production.
- `axiosClient` hanya dipakai untuk GNews (dead path) — sementara berita NewsData.io memakai axios default.

### 10.6 Catatan lain
- Blog detail pakai `dangerouslySetInnerHTML` + embed PDF lokal.
- `sessionStorage["allPosts"]` dipakai sebagai cache ringan tanpa invalidation/expiry.

---

*Dokumen disusun berdasarkan kondisi kode terbaru di repo (commit `84e119e` dan sebelum).*