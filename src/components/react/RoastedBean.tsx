import { motion } from "framer-motion";
import { roastedBeanLines } from "../../data/roastedBeanLines";

export default function RoastedBean() {
  return (
    <section id="roasted-bean" className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Roasted Bean, Siap Pakai Untuk Cafe-mu.
      </h2>
      <p className="mt-3 max-w-2xl text-base text-body">
        Tidak semua cafe punya waktu atau mesin untuk roasting sendiri. Kami roasting sesuai
        profil yang kamu mau — espresso base, filter, atau custom.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {roastedBeanLines.map((line, i) => (
          <motion.article
            key={line.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            className="rounded-lg border border-hairline bg-surface-card p-6"
          >
            <img
              src={line.image}
              alt={line.name}
              className="aspect-square w-full rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{line.name}</h3>
            <p className="mt-1 text-sm text-body">{line.description}</p>

            <ul className="mt-4 space-y-2">
              {line.points.map((point, j) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 + 0.1 }}
                  className="text-sm text-body-strong"
                >
                  · {point}
                </motion.li>
              ))}
            </ul>

            <p className="mt-4 text-sm font-semibold text-ember">{line.price}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
