// src/components/home/WhatIOffer.tsx

import { motion } from "framer-motion";

const offerings = [
  {
    title: "Full Stack Engineering",
    description:
      " Building complete web applications with modern frontend interfaces, scalable backend systems, and clean architecture focused on performance, maintainability, and user experience",
  },
  {
    title: "Frontend Engineering",
    description:
      "Developing responsive and scalable frontend applications using React, TypeScript, Tailwind CSS, and Redux for efficient state management and modern user experiences",
  },
  {
    title: "Backend Development",
    description:
      "Building scalable backend systems, REST APIs, database architectures, business workflows, and server-side logic that power reliable production applications",
  },
  {
    title: "SaaS Application Development",
    description:
      "Creating scalable SaaS platforms, dashboard systems, and multi-role business applications with modern workflows and real-time capabilities",
  },
  {
    title: "API Integration",
    description:
      "Integrating third-party services, payment systems, external APIs, and real-time features to extend application functionality and improve system connectivity",
  },
  {
    title: "System Maintenance & Optimization",
    description:
      "Maintaining and improving existing applications through feature development, performance optimization, refactoring, and scalable architecture enhancements",
  },
];

export default function WhatIOffer() {
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
          What I Offer
        </motion.h2>

        {/* GRID */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl transition"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-muted leading-7 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}