# Undangan Pernikahan Online — Andhika & Kirana (Template)

Website undangan pernikahan digital dibangun dengan **Astro** + **Tailwind CSS v4**.
Tema: elegan, ivory / onyx / gold.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`. Tambahkan `?to=Nama+Tamu` di URL untuk melihat
personalisasi nama tamu di layar pembuka, mis:
`http://localhost:4321/?to=Budi+Santoso`

## Build untuk produksi

```bash
npm run build
npm run preview   # pratinjau hasil build
```

Hasil build statis akan berada di folder `dist/`, siap di-deploy ke Vercel,
Netlify, Cloudflare Pages, atau hosting statis apa pun.

## Cara mengganti isi undangan (template)

Semua data mempelai, tanggal, lokasi acara, galeri, rekening kado, dan cerita
cinta ada di **satu file**:

```
src/data/wedding.config.ts
```

Ubah nilai di file itu saja — tidak perlu menyentuh komponen lain untuk
mengganti nama, tanggal, atau lokasi.

Ganti foto di `public/images/` (groom.jpg, bride.jpg, gallery-1.jpg … gallery-6.jpg)
dengan foto asli pasangan pada rasio yang sama (potret 4:5 untuk foto profil,
landscape untuk galeri). Foto saat ini adalah placeholder bermonogram emas.

Tambahkan musik latar dengan meletakkan file mp3 di `public/audio/` dan
memperbarui `wedding.music.src` di file config.

## Struktur proyek

```
src/
├─ components/
│  ├─ CoverGate.astro        → layar sampul "Buka Undangan" (baca ?to= dari URL)
│  ├─ Hero.astro              → judul utama setelah undangan dibuka
│  ├─ CoupleSection.astro     → profil mempelai
│  ├─ CountdownSection.astro  → hitung mundur ke acara pertama
│  ├─ EventSection.astro      → detail Akad & Resepsi + tautan peta
│  ├─ LoveStorySection.astro  → linimasa kisah cinta
│  ├─ GallerySection.astro    → galeri foto
│  ├─ RSVPSection.astro       → formulir konfirmasi kehadiran
│  ├─ GiftSection.astro       → info amplop digital / kado
│  ├─ Footer.astro            → penutup + pemutar musik latar
│  └─ GoldOrnament.astro      → elemen ornamen emas (dipakai berulang)
├─ data/
│  └─ wedding.config.ts       → SATU-SATUNYA file yang perlu diubah untuk isi
├─ layouts/
│  └─ Layout.astro            → shell halaman, font, meta tag
├─ styles/
│  └─ global.css              → token warna & font (Tailwind v4 @theme)
└─ pages/
   └─ index.astro             → merangkai semua section
```

## Palet warna

| Nama         | Hex       | Penggunaan                     |
|--------------|-----------|---------------------------------|
| Ivory        | `#FAF7F0` | Latar utama                     |
| Sand         | `#F0E6D2` | Latar bagian alternatif         |
| Onyx         | `#1C1917` | Bagian gelap / teks utama       |
| Onyx Soft    | `#2B2620` | Teks sekunder                   |
| Gold         | `#B8935A` | Aksen utama, tombol, garis      |
| Gold Light   | `#D9BC8C` | Highlight / hover                |
| Gold Deep    | `#8F6F40` | Bayangan / tombol ditekan        |

## Menghubungkan RSVP ke penyimpanan data

Formulir RSVP sudah siap, tinggal isi `wedding.rsvp.formEndpoint` di
`wedding.config.ts` dengan URL endpoint (mis. Google Apps Script, Formspree,
atau backend sendiri) yang menerima `POST` dengan `FormData`.

## Belum dibuat (langkah berikutnya)

- Integrasi endpoint RSVP nyata (saat ini hanya menampilkan status jika endpoint kosong)
- QRIS untuk kado digital
- Halaman ucapan/wishlist tamu (guest book) yang menampilkan ucapan terkirim
- Varian tema warna lain (mis. hijau emerald + gold) jika dibutuhkan multi-tema
# pahreza-risti-wedding-invitation
# pahreza-risti-wedding-invitation
