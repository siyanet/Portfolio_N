// src/components/home/Resume.tsx

import { motion } from "framer-motion";
import Header from "../components/layout/Header";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

type Certificate = {
  title: string;
  image: string;
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Addis Software",
    period: "2025 — Present",
    description:
      "Developing scalable enterprise systems, operational dashboards, ERP workflows, and production-grade web applications using React, TypeScript, Django, and PostgreSQL.",
  },

  {
    role: "Frontend Engineer",
    company: "Freelance",
    period: "2024 — 2025",
    description:
      "Built responsive frontend systems, booking platforms, admin dashboards, and modern UI architectures focused on maintainability and scalability.",
  },
];

const education: Education[] = [
  {
    degree: "BSc in Software Engineering",
    school: "Bahir Dar University",
    period: "2021 — 2026",
    description:
      "Focused on software architecture, distributed systems, databases, algorithms, system design, and modern full-stack engineering.",
  },
];

const certificates: Certificate[] = [
  {
    title: "React Advanced Development",
    image: "/images/certificates/react.png",
  },

  {
    title: "Backend System Design",
    image: "/images/certificates/backend.png",
  },

  {
    title: "Full Stack Engineering",
    image: "/images/certificates/fullstack.png",
  },
];

export default function Resume() {
  return (
    <section className="w-full  grid-pattern">
        <Header />
      <div className=" flex max-w-screen-2xl flex-col gap-16 px-6 lg:flex-row">

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* HEADER */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
              Resume
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-foreground">
              Experience & Education
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              My professional journey, academic background, and certifications
              that shaped my engineering and problem solving experience.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground">
              Experience
            </h3>

            <div className="mt-8 space-y-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">
                        {item.role}
                      </h4>

                      <p className="mt-2 text-lg text-muted">
                        {item.company}
                      </p>
                    </div>

                    <div className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted">
                      {item.period}
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

      
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:max-w-[420px]">

          {/* DEGREE CARD */}
          {/* <motion.div
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur-xl"
          >
            <img
              src="/images/bdu.jpg"
              alt="Bahir Dar University"
              className="h-[260px] w-full object-cover"
            />

            <div className="p-8">
              <div className="inline-flex rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted">
                Degree
              </div>

              <h3 className="mt-6 text-3xl font-black text-foreground">
                Software Engineering
              </h3>

              <p className="mt-4 text-lg text-muted">
                Bahir Dar University
              </p>

              <p className="mt-6 leading-8 text-muted">
                Studying modern software engineering principles, scalable
                systems, distributed applications, and enterprise-grade
                architecture.
              </p>
            </div>
          </motion.div> */}
              {/* EDUCATION */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground">
              Education
            </h3>

            <div className="mt-8 space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">
                        {item.degree}
                      </h4>

                      <p className="mt-2 text-lg text-muted">
                        {item.school}
                      </p>
                    </div>

                  </div>

                  <p className="mt-6 leading-8 text-muted">
                    CCP 3.5 GPA
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CERTIFICATES */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-foreground">
              Certificates
            </h3>

            <div className="mt-6 space-y-6">
              {certificates.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[180px] w-full object-cover"
                  />

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}