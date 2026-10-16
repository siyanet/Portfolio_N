import { Link } from "react-router-dom";

const experiences = [
  {
    role: "Full-Stack Software Engineer",
    company: "Swentix (formerly Addis Software)",
    focus:
      "Building and maintaining web and mobile applications for electric mobility, including admin dashboards, driver and distributor apps, and IoT-integrated systems.",
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Seamless Technology",
    focus:
      "Developing and customizing healthcare platforms, including OpenIMIS and the National Health Data Dictionary (NHDD), with a focus on backend services, APIs, and data management.",
  },
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "Kuraz Tech",
    focus:
      "Developing user interfaces for ERP systems, restaurant management software, and SaaS applications, with an emphasis on reusable components, responsive design, and user experience.",
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16">
      <h2 className="text-center text-3xl font-black text-foreground">
        Experience
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {experiences.map((item, index) => (
          <article
            key={item.company}
            className={`rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:bg-card/70 ${
              index === 2 ? "sm:col-span-2" : ""
            }`}
          >
            <h3 className="text-lg font-bold text-foreground">
              {item.role}
            </h3>

            <p className="mt-1 text-muted">{item.company}</p>

            <p className="mt-3 leading-7 text-muted">
              {item.focus}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/resume"
          className="font-semibold text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          View full experience
        </Link>
      </div>
    </section>
  );
}