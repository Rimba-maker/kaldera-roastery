import { motion } from "framer-motion";

const services = [
  "Konsultasi pemilihan origin & roast profile",
  "Custom packaging (kami punya supplier kemasan, atau pakai punyamu)",
  "Label & barcode siap jual",
  "Minimum order 20 kg per SKU",
  "Cocok untuk: cafe yang mau jual retail bean, hotel gift shop, brand baru yang belum punya roastery sendiri",
];

export default function PrivateLabel() {
  return (
    <section id="private-label" className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Mau Punya Brand Kopi Sendiri?
          </h2>
          <p className="mt-3 max-w-xl text-base text-body">
            Kami handle sourcing, roasting, dan packaging — kamu tinggal jual dengan nama
            brandmu sendiri.
          </p>

          <ul className="mt-6 space-y-3">
            {services.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
                className="flex gap-2 text-sm text-body-strong"
              >
                <span className="text-ember">✓</span>
                {service}
              </motion.li>
            ))}
          </ul>

          <a
            href="#sample-request"
            className="mt-8 inline-block rounded-md bg-ember px-6 py-3 text-sm font-semibold text-on-ember transition-colors hover:bg-ember-active"
          >
            Konsultasi Private Label
          </a>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          src="https://images.pexels.com/photos/13549431/pexels-photo-13549431.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Packaging custom brand"
          className="aspect-[4/3] w-full rounded-lg border border-hairline object-cover"
        />
      </div>
    </section>
  );
}
