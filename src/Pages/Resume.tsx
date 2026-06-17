// src/components/home/Resume.tsx

import { motion } from "framer-motion";
import { Certificates } from "../assets/certificates";
import PageLayout from "../components/layout/PageLayout";

type Experience = {
  role: string;
  company: string;
  description: string;
};

type Education = {
  degree: string;
  school: string;
  description: string;
};

type Certificate = {
  title: string;
  image: string;
};

const experiences: Experience[] = [
  {
    role: "Full Stack Software Engineer",
    company: "Swenetix (formerly Addis Software)",

    description:
      "Contributing to scalable multi-product systems including an electric mobility platform. Developing and maintaining full-stack applications integrating APIs, improving system performance, and collaborating with cross-functional teams on core product features and architecture decisions.",
  },

  {
    role: "Full Stack Software Engineer",
    company: "Seamless Technology",

    description:
      "Worked on large-scale health and public-sector data platforms. Refactored OpenIMIS modules to improve maintainability, aligned frontend-backend API contracts, and contributed to NHDD platform UI consistency, validation workflows, and performance optimization.",
  },

  {
    role: "Frontend Developer & UI/UX Designer",
    company: "Kuraz Tech",

    description:
      "Built a full restaurant management system using React, Redux, and Tailwind CSS. Developed reusable UI components, responsive layouts, and scalable frontend architecture. Recognized for strong UI/UX contributions and frontend implementation quality.",
  },

  {
    role: "Software Developer Intern",
    company: "Tria PLC",

    description:
      "Supported QA processes for a Learning Management System. Performed manual and exploratory testing, identified bugs, and contributed to improving system stability and usability through structured feedback loops.",
  },
];

const education: Education[] = [
  {
    degree: "BSc in Software Engineering",
    school: "Bahir Dar University",
    description:
      "Focused on software architecture, distributed systems, databases, algorithms, system design, and modern full-stack engineering.",
  },
];

const certificates: Certificate[] = [
  {
    title: "Programming in Python ",
    image: Certificates[0],
  },

  {
    title: "Django Framework",
    image: Certificates[2],
  },
  {
    title: "APIS",
    image: Certificates[3],
  },
  {
    title: "The Full Stack",
    image: Certificates[4],
  },
  {
    title: "Meta Backend Devloper",
    image: Certificates[1],
  },
];

export default function Resume() {
  return (
    <PageLayout>
      <section className="w-full">
        <div className="w-full flex justify-between items-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Resume
          </p>

          <a
            href="/Siyanet-Getahun-Resume.pdf"
            download
            className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            Download CV
          </a>
        </div>

        <div className=" flex  flex-col gap-16 lg:flex-row">
          {/* LEFT SIDE */}
          <div className="flex-1">
            {/* HEADER */}
            <div className="max-w-2xl">
              <h2 className="mt-4 text-2xl font-black tracking-tight text-foreground">
                Experience & Education
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted">
                My professional journey, academic background, and certifications
                that shaped my engineering and problem solving experience.
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="mt-16">
              <h3 className="text-xl font-bold text-foreground">Experience</h3>

              <div className="mt-8 space-y-6">
                {experiences.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-xl"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {item.role}
                        </h4>

                        <p className="mt-2 text-lg text-muted">
                          {item.company}
                        </p>
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
            <div className="mt-16">
              <h3 className="text-xl font-bold text-foreground">Education</h3>

              <div className="mt-8 space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-xl"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          {item.degree}
                        </h4>

                        <p className="mt-2 text-lg text-muted">{item.school}</p>
                      </div>
                    </div>

                    <p className="mt-6 leading-8 text-muted">CCGP 3.5 GPA</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CERTIFICATES */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground">
                Certificates
              </h3>

              <div className="mt-6 space-y-6">
                {certificates.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="overflow-hidden py-3 rounded-[2rem] border border-border bg-card/40 backdrop-blur-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[180px] w-full object-contain"
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
    </PageLayout>
  );
}
