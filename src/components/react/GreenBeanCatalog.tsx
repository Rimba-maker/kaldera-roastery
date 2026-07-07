import { useState } from "react";
import { motion } from "framer-motion";
import { origins } from "../../data/origins";

const filters = ["Semua", "Sumatra", "Jawa", "Sulawesi", "Bali", "Flores", "Papua", "Natural", "Honey", "Washed"];

export default function GreenBeanCatalog() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? origins
      : origins.filter((o) => o.region === active || o.processing === active);

  return (
    <section id="green-bean" className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Green Bean Dari 15+ Origin.</h2>
      <p className="mt-3 max-w-2xl text-base text-body">
        Setiap lot punya cupping note, altitude, dan processing method yang jelas — bukan
        cuma nama daerah.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
              active === filter ? "text-ink" : "text-muted hover:text-body-strong"
            }`}
          >
            {active === filter && (
              <motion.span
                layoutId="filter-indicator"
                className="absolute inset-0 rounded-md bg-surface-card"
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative">{filter}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((origin, i) => (
          <motion.article
            key={origin.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group rounded-lg border border-hairline bg-surface-card p-6"
          >
            <img
              src={origin.image}
              alt={`Green bean close up ${origin.name}`}
              className="aspect-square w-full rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{origin.name}</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {origin.processing}
            </p>

            <dl className="mt-4 space-y-1.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Altitude</dt>
                <dd className="text-body-strong">{origin.altitude}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Cupping score</dt>
                <dd className="font-semibold text-ember">{origin.cuppingScore}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Notes</dt>
                <dd className="text-right text-body-strong">{origin.notes}</dd>
              </div>
            </dl>

            <p className="mt-4 text-base font-semibold">
              {origin.price} <span className="text-sm font-normal text-muted">({origin.minOrder})</span>
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#sample-request"
                className="flex-1 rounded-md bg-ember px-4 py-2 text-center text-sm font-semibold text-on-ember transition-colors hover:bg-ember-active"
              >
                Request Sample
              </a>
              <a
                href={`/spec-sheets/${origin.slug}.pdf`}
                className="rounded-md border border-hairline-strong px-4 py-2 text-sm font-medium text-body-strong underline-offset-4 hover:text-ink hover:underline"
              >
                Spec Sheet
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
