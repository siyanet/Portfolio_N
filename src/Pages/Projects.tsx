// src/pages/Projects.tsx

import ProjectCard from "../components/ui/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import PageLayout from "../components/layout/PageLayout";

export default function Projects() {
  return (
   <PageLayout>
     <section className="w-full">
      
      <div >

        {/* HEADER */}
        <div className="">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-black tracking-tight text-foreground sm:text-3xl text-center lg:text-left"
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
              type = {project?.type}
            />
          ))}
        </div>

      </div>
    </section>
   </PageLayout>
  );
}
