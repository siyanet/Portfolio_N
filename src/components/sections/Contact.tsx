// src/components/home/Contact.tsx

import { motion } from "framer-motion";
import { useState } from "react";
import { SiGithub, SiLinkerd, SiGmail } from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:siyangetahunw@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="w-full py-28 grid-pattern">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-foreground"
        >
          Let’s Work Together
        </motion.h2>

        <p className="mt-4 max-w-2xl text-muted">
          Have a project, opportunity, or idea? I’m open to discussing
          full-stack development, scalable systems, and impactful digital
          products.
        </p>

        {/* GRID */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">

          {/* CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-foreground py-3 font-semibold text-background transition hover:opacity-90"
            >
              Send Message
            </button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >

            {/* DIRECT CONTACT */}
            <div className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-foreground">
                Direct Contact
              </h3>

              <a
                href="mailto:siyangetahunw@gmail.com"
                className="mt-3 block text-muted transition hover:text-foreground"
              >
                siyangetahunw@gmail.com
              </a>

              <p className="mt-3 text-muted">
                Open to freelance, full-time opportunities, and technical collaborations.
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">

              <a
                href="https://github.com/siyanet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-border bg-card/40 p-4 transition hover:bg-card/60"
              >
                <SiGithub className="text-2xl text-foreground" />
              </a>

              <a
                href="https://www.linkedin.com/in/siyanet-getahun-5b7734287/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-border bg-card/40 p-4 transition hover:bg-card/60"
              >
                <SiLinkerd className="text-2xl text-foreground" />
              </a>

              <a
                href="mailto:siyangetahunw@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-border bg-card/40 p-4 transition hover:bg-card/60"
              >
                <SiGmail className="text-2xl text-foreground" />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}