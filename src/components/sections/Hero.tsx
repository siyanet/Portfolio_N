// src/components/home/Hero.tsx

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  css,
  ts,
  react,
  python,
  django,
  postgres,
  node,
  docker,
  firebase,
  mongo,
} from "../../assets/svg";
import { Link } from "react-router-dom";
import profilePhoto1 from "../../assets";

type FloatingIcon = {
  src: string;
  desktop: string;
  mobile: string;
};

const floatingIcons: FloatingIcon[] = [
  {
    src: react,
    desktop: "-top-6 left-[42%]",
    mobile: "-top-8 left-[42%]",
  },
  {
    src: ts,
    desktop: "top-[10%] -right-6",
    mobile: "top-[8%] right-0",
  },
  {
    src: css,
    desktop: "top-[8%] left-0",
    mobile: "top-[10%] left-0",
  },
  {
    src: python,
    desktop: "top-[35%] -left-8",
    mobile: "top-[35%] right-0",
  },
  {
    src: django,
    desktop: "top-[35%] -right-8",
    mobile: "top-[35%] -right-5",
  },
  {
    src: postgres,
    desktop: "bottom-[18%] -left-6",
    mobile: "bottom-[20%] -left-7",
  },
  {
    src: node,
    desktop: "bottom-[18%] -right-6",
    mobile: "bottom-[20%] -right-5",
  },
  {
    src: docker,
    desktop: "bottom-[10%] left-[20%]",
    mobile: "-bottom-[8%] left-[40%]",
  },
  {
    src: firebase,
    desktop: "bottom-[5%] right-[20%]",
    mobile: "-bottom-[2%] -right-[10%]",
  },
  {
    src: mongo,
    desktop: "top-[65%] left-[8%]",
    mobile: "top-[80%] left-[5%]",
  },
  // {
  //   src: git,
  //   desktop: "top-[65%] right-[8%]",
  //   mobile: "top-[68%] right-[5%]",
  // },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden grid-pattern px-6 py-16 lg:min-h-[calc(100vh-80px)] lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
         <div className="relative flex items-center justify-center">
          
          {/* WRAPPER */}
          <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[620px] lg:w-[620px]">

            {/* ICONS */}
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`
                  absolute z-0 opacity-50
                  ${item.mobile}
                  lg:${item.desktop}
                `}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card/40 p-3 backdrop-blur-xl sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <img
                    src={item.src}
                    alt="tech stack"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}

            {/* PROFILE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="overflow-hidden border border-border bg-card/40 p-3 backdrop-blur-xl rounded-full">
                
                <div className="h-[240px] w-[240px] overflow-hidden rounded-[1.5rem] sm:h-[320px] sm:w-[320px] sm:rounded-[2rem] lg:h-[380px] lg:w-[380px] lg:rounded-full">
                  <img
                    src={profilePhoto1}
                    alt="Siyanet Getahun"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
        
        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-full border border-border bg-card/60 px-5 py-2 backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-muted">
              Frontend Heavy Full Stack Engineer
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-2xl text-4xl font-black leading-tight text-secondary sm:text-5xl lg:text-6xl"
          >
            I'm Siyanet Getahun
          </motion.h1>

          {/* TYPE ANIMATION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "",
                300,
                "Software Engineer",
                2000,
                "",
                300,
                "ERP Developer",
                2000,
                "",
                300,
                "Frontend Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-sm leading-8 text-muted sm:text-base lg:text-lg"
          >
          Designing and building modern digital products with clean architecture, scalable systems, and user-focused experiences.

Focused on transforming complex workflows into fast, maintainable, and production-ready applications through modern frontend engineering and reliable backend development.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-end"
          >
            <Link
              to="/projects"
              className="rounded-2xl bg-foreground px-7 py-4 text-sm font-semibold text-background transition duration-300 hover:-translate-y-1"
            >
              View Projects
            </Link>

          
          </motion.div>
        </div>

        {/* PROFILE + ICONS */}
       
      </div>
    </section>
  );
}