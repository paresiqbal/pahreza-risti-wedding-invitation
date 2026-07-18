// ---------------------------------------------------------------
// WEDDING CONFIG — edit this single file to reuse the template
// for any couple. Nothing else in the codebase should need to
// change for a basic re-skin.
// ---------------------------------------------------------------

import groomPhoto from "../assets/paheza.jpeg";
import bridePhoto from "../assets/risti.jpeg";

export type EventDetail = {
  label: string; // e.g. "Akad Nikah" or "Resepsi"
  date: string; // ISO date, e.g. "2026-11-14"
  startTime: string; // "08:00"
  endTime: string; // "10:00"
  timezone: string; // "WIB" | "WITA" | "WIT"
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
};

export type LoveStoryMoment = {
  date: string; // display string, e.g. "Agustus 2019"
  title: string;
  description: string;
};

export type GiftAccount = {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  cardImage: string; // illustrative card visual shown above the account details
};

export const wedding = {
  // Shown in <title> and social share previews
  seo: {
    title: "Undangan Pernikahan — Pahreza & Risti",
    description:
      "Dengan penuh sukacita, kami mengundang Anda untuk merayakan hari bahagia pernikahan Pahreza& Risti.",
    ogImage: "/og-image.jpg",
  },

  // The couple
  groom: {
    fullName: "Pahreza Iqbal Prastowo S.Kom",
    nickname: "Pahreza",
    parents: "Putra dari Bapak Budi Yanto & Sumiatun",
    instagram: "@pares_iqbal",
    photo: groomPhoto.src,
  },
  bride: {
    fullName: "Risti Yolanda S.Pd",
    nickname: "Risti",
    parents: "Putri dari Bapak A. Sikin & Ibu Linda Haryanti",
    instagram: "@ristiylnd",
    photo: bridePhoto.src,
  },

  // Opening quote — commonly a Quranic verse, Bible verse, or a
  // secular line, depending on the couple. Kept configurable.
  openingQuote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },

  // Akad & Resepsi — add or remove entries freely
  events: [
    {
      label: "Akad Nikah",
      date: "25-06-2026",
      startTime: "08:00",
      endTime: "16:00",
      timezone: "WIB",
      venueName: "Kediaman Mempelai Wanita",
      venueAddress: "Perrumahan Ryu Perdana Estate, Karang Anyar, Curup Timur",
      mapsUrl: "https://maps.google.com/?q=Kebayoran+Baru+Jakarta",
    },
    {
      label: "Ngunduh Mantu",
      date: "02-08-2026",
      startTime: "08:00",
      endTime: "16:00",
      timezone: "WIB",
      venueName: "Kediaman Mempelai Pria",
      venueAddress:
        "Jl. Stadion, Air Bang, Curup Tengah, Kabupaten Rejang Lebong",
      mapsUrl: "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta",
    },
  ] satisfies EventDetail[],

  loveStory: [
    {
      date: "Agustus 2019",
      title: "Pertama Bertemu",
      description: "Dipertemukan dalam sebuah acara kantor yang tak terduga.",
    },
    {
      date: "Februari 2021",
      title: "Menjalin Kasih",
      description: "Memutuskan untuk melangkah bersama menjalani hubungan.",
    },
    {
      date: "Juni 2026",
      title: "Lamaran",
      description: "Andhika melamar Kirana disaksikan keluarga tercinta.",
    },
    {
      date: "November 2026",
      title: "Hari Pernikahan",
      description: "Hari di mana kami resmi menjadi satu.",
    },
  ] satisfies LoveStoryMoment[],

  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ],

  // Digital angpau / kado
  gifts: {
    intro:
      "Doa restu Anda adalah karunia yang sangat berarti bagi kami. Namun jika ingin memberi tanda kasih, kami sediakan amplop digital berikut.",
    accounts: [
      {
        bankName: "BRI",
        accountNumber: "1234567890",
        accountHolder: "Pahreza Iqbal Prastowo",
        cardImage: "/images/card-bca.jpg",
      },
      {
        bankName: "BRI",
        accountNumber: "0987654321",
        accountHolder: "Kirana Ayu Lestari",
        cardImage: "/images/card-mandiri.jpg",
      },
    ] satisfies GiftAccount[],
    address: {
      show: true,
      recipientName: "Andhika & Kirana",
      fullAddress: "Jl. Melati No. 12, Kebayoran Baru, Jakarta Selatan, 12180",
    },
  },

  rsvp: {
    formEndpoint: "", // wire up to a backend / Google Form / Formspree, etc.
  },

  music: {
    src: "/audio/wedding-theme.mp3",
    title: "A Thousand Years — Christina Perri",
  },
} as const;
