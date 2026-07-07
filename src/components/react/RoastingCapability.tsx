import { motion } from "framer-motion";

const cards = [
  {
    icon: "🔥",
    title: "Mesin Probat & Loring",
    description: "Kapasitas 25kg dan 60kg per batch",
  },
  {
    icon: "📦",
    title: "Output 2 Ton/Bulan",
    description: "Cukup untuk supply puluhan cafe rutin",
  },
  {
    icon: "📊",
    title: "Roast Log Terdokumentasi",
    description: "Setiap batch tercatat curve, waktu, dan suhu",
  },
  {
    icon: "🚚",
    title: "Fresh Roast Guarantee",
    description: "Dikirim maksimal 7 hari setelah tanggal roasting",
  },
];

export default function RoastingCapability() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Kapasitas Produksi Kami.</h2>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1561480337-7fb12b1d9bc4?q=80&w=1200&auto=format&fit=crop"
        alt="Mesin roasting industrial"
        className="mt-8 aspect-[3/2] w-full rounded-lg border border-hairline object-cover"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            className="rounded-lg border border-hairline bg-surface-card p-6"
          >
            <span className="text-2xl">{card.icon}</span>
            <h3 className="mt-3 font-semibold">{card.title}</h3>
            <p className="mt-1 text-sm text-body">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
