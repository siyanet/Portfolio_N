// src/components/home/About.tsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full  py-28 px-6 lg:px-16 grid-pattern">
       <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-foreground sm:text-5xl text-center lg:text-left"
          >
            Who I Am
          </motion.h2>
      <div className=" max-w-7xl  grid gap-16 lg:grid-cols-2 items-start">
         

        {/* LEFT SIDE */}
        <div>
        

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-muted text-lg leading-8 max-w-xl text-center lg:text-left"
          >
          I am a frontend-heavy full stack software engineer with experience building scalable web platforms, enterprise systems, and modern digital products.

My work focuses on creating high performance frontend experiences while also developing the backend systems, APIs, and architectures that power complete applications.

I enjoy transforming complex business workflows into clean, maintainable, and production ready software solutions with strong attention to scalability, usability, and long term system growth.

I care deeply about code quality, system design, user experience, and building software that delivers real world impact.

          </motion.p>

          {/* <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center md:text-left text-muted text-lg leading-8 max-w-xl"
          >
            My work revolves around designing dashboards, ERP systems, and
            operational tools where engineering quality directly impacts real
            users and real business processes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 space-y-3 flex flex-col items-center lg:items-start"
          >
            {[
              "Clean, scalable frontend architecture",
              "Backend systems that handle real load",
              "Performance-first mindset",
              "Maintainable code over clever code",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-muted"
              >
                <span className="h-2 w-2 rounded-full bg-foreground/60" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
           */}
        </div>

        {/* RIGHT SIDE */}
      
      </div>
    </section>
  );
}



  {/* <div className="space-y-6 flex flex-col items-center lg:items-start">

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Full Stack Engineering
            </h3>
            <p className="mt-2 text-muted">
           Building complete web applications with modern frontend interfaces, scalable backend systems, and clean architecture focused on performance, maintainability, and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
            Frontend Engineering
            </h3>
            <p className="mt-2 text-muted">
            Developing responsive and scalable frontend applications using React, TypeScript, Tailwind CSS, and Redux for efficient state management and modern user experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Backend Development
            </h3>
            <p className="mt-2 text-muted">
              Building scalable backend systems, REST APIs, database architectures, business workflows, and server-side logic that power reliable production applications
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
              SaaS Application Development
            </h3>
            <p className="mt-2 text-muted">
Creating scalable SaaS platforms, dashboard systems, and multi-role business applications with modern workflows and real-time capabilities
            </p>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
              API Integration
            </h3>
            <p className="mt-2 text-muted">
             Integrating third-party services, payment systems, external APIs, and real-time features to extend application functionality and improve system connectivity
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-foreground">
              System Maintenance & Optimization
            </h3>
            <p className="mt-2 text-muted">
             Maintaining and improving existing applications through feature development, performance optimization, refactoring, and scalable architecture enhancements
            </p>
          </motion.div>
          

        </div> */}