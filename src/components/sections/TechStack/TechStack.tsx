import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,

  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiLaravel,

  SiDocker,
  SiGit,
  SiLinux,
  SiFigma,
} from "react-icons/si";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Tech, TechCategory } from "./types";

const techStack: Record<TechCategory
, Tech[]> = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
  ],

  backend: [
    { name: "Django", icon: SiDjango },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Laravel", icon: SiLaravel },
  ],

  others: [
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Linux", icon: SiLinux },
    { name: "Figma", icon: SiFigma },
  ],
};
// src/components/home/TechStack.tsx


type Category = "frontend" | "backend" | "others";

export default function TechStack() {
  const [active, setActive] = useState<Category>("frontend");

  return (
    <section className="w-full py-28 grid-pattern">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <h2 className="text-4xl font-black text-foreground text-center lg:text-left">
          Tech Stack
        </h2>

        {/* MAIN LAYOUT */}
        <div className="mt-24 flex flex-col justify-between lg:flex-row gap-12">

          {/* LEFT: TABS */}
          <div className="lg:w-1/4">
            <div className="flex flex-row lg:flex-col flex-wrap gap-4">
              {(["frontend", "backend", "others"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full px-6 py-3 rounded-xl border text-left font-medium transition-all duration-200 ${
                    active === cat
                      ? "bg-foreground text-background"
                      : "bg-card/40 text-foreground hover:bg-card/70"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: GRID */}
          <div className="lg:w-2/4 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {techStack[active].map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.06 }}
                      className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl hover:bg-card/60 transition"
                    >
                      <Icon className="text-5xl text-foreground" />
                      <span className="text-sm text-muted font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}