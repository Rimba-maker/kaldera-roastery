import { useState, type FormEvent } from "react";
import { origins } from "../../data/origins";

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export default function SampleRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);

  function toggleOrigin(name: string) {
    setSelectedOrigins((prev) =>
      prev.includes(name) ? prev.filter((o) => o !== name) : [...prev, name]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any) as Record<string, string>;
    data.origin = selectedOrigins.join(", ");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "sample-request", ...data }),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="sample-request" className="mx-auto max-w-[1280px] px-6 py-24">
        <div className="rounded-lg border border-hairline bg-surface-card p-10 text-center">
          <h2 className="text-2xl font-bold">Request Terkirim.</h2>
          <p className="mt-2 text-body">Tim kami akan hubungi kamu via WhatsApp dalam 1x24 jam.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="sample-request" className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Coba Dulu Sebelum Komitmen.
        </h2>
        <p className="mt-3 text-body">
          Sample 250g–500g gratis untuk origin pilihan (ongkir ditanggung pemesan). Cocok
          untuk cupping internal sebelum order rutin.
        </p>

        <form
          name="sample-request"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input type="hidden" name="form-name" value="sample-request" />
          <p className="hidden">
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="text-sm font-medium text-body-strong">
              Nama
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1.5 h-10 w-full rounded-md border border-hairline bg-surface-card px-3.5 text-sm text-ink placeholder:text-muted-soft focus:border-ember focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="business" className="text-sm font-medium text-body-strong">
              Nama Bisnis
            </label>
            <input
              id="business"
              name="business"
              required
              className="mt-1.5 h-10 w-full rounded-md border border-hairline bg-surface-card px-3.5 text-sm text-ink placeholder:text-muted-soft focus:border-ember focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="text-sm font-medium text-body-strong">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              className="mt-1.5 h-10 w-full rounded-md border border-hairline bg-surface-card px-3.5 text-sm text-ink placeholder:text-muted-soft focus:border-ember focus:outline-none"
            />
          </div>

          <div>
            <span className="text-sm font-medium text-body-strong">
              Origin yang mau dicoba
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {origins.map((origin) => (
                <button
                  type="button"
                  key={origin.slug}
                  onClick={() => toggleOrigin(origin.name)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedOrigins.includes(origin.name)
                      ? "border-ember bg-ember text-on-ember"
                      : "border-hairline-strong text-body-strong hover:border-ember"
                  }`}
                >
                  {origin.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="address" className="text-sm font-medium text-body-strong">
              Alamat Kirim
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="mt-1.5 w-full rounded-md border border-hairline bg-surface-card px-3.5 py-2.5 text-sm text-ink placeholder:text-muted-soft focus:border-ember focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-ember px-6 py-3 text-sm font-semibold text-on-ember transition-colors hover:bg-ember-active"
          >
            Request Sample
          </button>
        </form>
      </div>
    </section>
  );
}
