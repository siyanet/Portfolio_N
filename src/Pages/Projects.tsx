// src/pages/Projects.tsx

import Header from "../components/layout/Header";
import ProjectCard from "../components/ui/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="w-full  grid-pattern">
        <Header/>
      <div className=" px-10 lg:px-15">

        {/* HEADER */}
        <div className="">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black tracking-tight text-foreground sm:text-5xl text-center lg:text-left"
          >
            Portfolio
          </motion.h2>
          
              <p className="mt-6 text-lg  text-muted ">
            Welcome to my collection of projects that showcase my
            expertise, knowledge, and real world experiences in
            creating innovative solutions.
          </p>

     

        
        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              slug={project.slug}
              images={project.images}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
