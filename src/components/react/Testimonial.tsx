import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Dipercaya Cafe & Roaster.</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            className="rounded-lg border border-hairline bg-surface-card p-6"
          >
            <blockquote className="text-sm leading-relaxed text-body-strong">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img
                src={t.image}
                alt={t.author}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
