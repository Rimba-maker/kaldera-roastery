export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Konsistensi rasa dari Kaldera yang bikin kami loyal. 2 tahun order rutin, tidak pernah ada batch yang meleset dari sample awal.",
    author: "Owner",
    role: "Fixed Coffee Bandung",
    image: "https://images.pexels.com/photos/16537980/pexels-photo-16537980.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Private label kami dihandle penuh sama Kaldera — dari roasting sampai packaging. Kami tinggal jual.",
    author: "Founder",
    role: "brand kopi retail lokal",
    image: "https://images.pexels.com/photos/3906984/pexels-photo-3906984.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Spec sheet-nya lengkap banget, memudahkan kami cupping internal sebelum order besar.",
    author: "Head Roaster",
    role: "coffee shop chain Jakarta",
    image: "https://images.pexels.com/photos/7175989/pexels-photo-7175989.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];
