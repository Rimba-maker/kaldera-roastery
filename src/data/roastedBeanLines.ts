export interface RoastedBeanLine {
  name: string;
  description: string;
  points: string[];
  price: string;
  image: string;
}

export const roastedBeanLines: RoastedBeanLine[] = [
  {
    name: "House Blend Series",
    description: "Blend siap pakai untuk espresso based drink",
    points: [
      "3 varian: Balanced, Dark & Bold, Bright & Fruity",
      "Roasting mingguan, kirim maks. 7 hari setelah roast",
    ],
    price: "Rp 165.000–195.000/kg (min. 10 kg)",
    image: "https://images.pexels.com/photos/9334456/pexels-photo-9334456.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Single Origin Roasted",
    description: "Semua origin di katalog green bean tersedia versi roasted",
    points: ["Custom roast level (light/medium/dark)"],
    price: "Rp 175.000–230.000/kg (min. 5 kg)",
    image: "https://images.unsplash.com/photo-1769437082791-8c9af44d7c28?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Custom Roast Profile",
    description: "Kirim spek rasa yang kamu mau, kami sesuaikan roast curve",
    points: [
      "Cocok untuk cafe yang sudah punya signature taste",
      "Free 1x revisi profil roasting",
    ],
    price: "Konsultasi via WA, harga menyesuaikan volume",
    image: "https://images.pexels.com/photos/22679458/pexels-photo-22679458.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
