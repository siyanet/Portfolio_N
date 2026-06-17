// src/pages/ProjectDetails.tsx

import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import PageLayout from "../components/layout/PageLayout";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-foreground">
          Project not found
        </h1>
      </section>
    );
  }

  return (
   <PageLayout>
     <section className="w-full">
    

      <div className="">

        {/* BACK */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted transition hover:text-foreground"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* GRID */}
        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          {/* IMAGE SLIDER */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur-xl">

            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={project.images[currentIndex]}
                  src={project.images[currentIndex]}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* INDICATORS */}
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "w-10 bg-white"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">

            {/* TITLE */}
            <h1 className="text-2xl font-black tracking-tight text-foreground lg:text-4xl">
              {project.title}
            </h1>

            {/* COMPANY / ROLE CARD */}
            <div className="mt-8 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl">

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Company
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {project.company}
                  </h3>
                </div>

                <span className="rounded-full border border-border bg-background/40 px-4 py-2 text-xs text-muted">
                  {project.role}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted">
                {project.shortDescription}
              </p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Visit Live Project
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* LONG DESCRIPTION */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">
                Overview
              </h2>

              <p className="mt-4 text-lg leading-8 text-muted">
                {project.description}
              </p>
            </div>

            {/* CONTRIBUTIONS */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">
                Key Contributions
              </h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
                {project.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.platforms && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground">
                  Platforms
                </h2>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* TECH STACK */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">
                Tech Stack
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION */}
            <div className="mt-12">
              <Link
                to="/projects"
                className="rounded-2xl border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-card/70"
              >
                More Projects
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
   </PageLayout>
  );
}
