import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function SelectedProjects() {
  return (
    <section className="w-full py-16">
      <h2 className="text-center text-3xl font-black text-foreground">
        Selected Projects
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-border bg-card/40 p-6"
          >
            <p className="text-sm text-muted">{project.company}</p>
            <h3 className="mt-2 text-xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-muted">
              {project.shortDescription}
            </p>
            <Link
              to={`/projects/${project.slug}`}
              className="mt-4 inline-block font-semibold text-foreground underline underline-offset-4"
            >
              View project
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/projects"
          className="font-semibold text-foreground underline underline-offset-4"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
