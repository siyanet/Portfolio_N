// src/components/home/Contact.tsx

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiGithub,
  SiLinkerd,
  SiGitter,
} from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    console.log(form);
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

        <p className="mt-4 text-muted max-w-2xl">
          Have a project, idea, or opportunity? I’m always open to discussing
          systems, architecture, and building impactful products.
        </p>

        {/* GRID */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">

          {/* FORM */}
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
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-foreground text-background py-3 font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >

            <div className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-foreground">
                Direct Contact
              </h3>

              <p className="mt-2 text-muted">
                Email: youremail@example.com
              </p>

              <p className="text-muted">
                Open to freelance, full-time, and collaborations
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-4 rounded-xl border border-border bg-card/40 hover:bg-card/60 transition"
              >
                <SiGithub className="text-2xl text-foreground" />
              </a>

              <a
                href="#"
                className="p-4 rounded-xl border border-border bg-card/40 hover:bg-card/60 transition"
              >
                <SiLinkerd className="text-2xl text-foreground" />
              </a>

              <a
                href="#"
                className="p-4 rounded-xl border border-border bg-card/40 hover:bg-card/60 transition"
              >
                <SiGitter className="text-2xl text-foreground" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}