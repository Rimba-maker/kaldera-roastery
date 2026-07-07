import { motion } from "framer-motion";

const b2bReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const badges = [
  "15+ Origin Terverifikasi",
  "Cupping Score Terdokumentasi",
  "100+ Cafe Partner",
  "Kirim Seluruh Indonesia",
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 md:grid-cols-12 md:items-center">
      <motion.div
        className="md:col-span-7"
        initial="hidden"
        animate="visible"
        variants={b2bReveal}
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          Biji Kopi Yang Konsisten. Bisnis Kopi Yang Tenang.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
          Supplier green bean dan roasted bean untuk cafe, roaster, dan hotel di seluruh
          Indonesia. Sourcing langsung dari petani, cupping score terdokumentasi, dan
          konsistensi batch yang bisa diandalkan.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <a
            href="#sample-request"
            className="rounded-md bg-ember px-6 py-3 text-sm font-semibold text-on-ember transition-colors hover:bg-ember-active"
          >
            Request Sample Gratis
          </a>
          <a
            href="#green-bean"
            className="rounded-md bg-surface-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-elevated"
          >
            Lihat Katalog Green Bean
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {badges.map((badge) => (
            <span key={badge} className="text-xs font-medium uppercase tracking-wide text-muted">
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="md:col-span-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="https://images.unsplash.com/photo-1773035806309-df18afd25f13?q=80&w=900&auto=format&fit=crop"
          alt="Gudang green bean"
          className="aspect-[4/5] w-full rounded-lg border border-hairline object-cover"
        />
      </motion.div>
    </section>
  );
}
