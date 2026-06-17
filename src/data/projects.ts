import { cbhiImages } from "../assets/CBHI";
import { dodaiImages } from "../assets/DODAI";
import { elitaImages } from "../assets/ELITA";
import { nhddImages } from "../assets/NHDD";

export type Project = {
  slug: string;
  title: string;
  company: string;
  role: string;
  shortDescription: string;
  description: string;
  liveUrl?: string;
  technologies: string[];
  images: string[];
  contributions: string[];
  platforms?: string[];
  type?: string;
};

export const projects: Project[] = [
  {
    slug: "national-health-data-dictionary",
    title: "National Health Data Dictionary (NHDD)",
    company: "Seamless Technology",
    role: "Backend Developer",
    shortDescription:
      "A national healthcare data standardization platform designed to manage health data definitions, approval workflows, publishing processes, and structured reporting systems",
    description:
"Served as the Backend Developer for a large scale governmental healthcare platform focused on structured national health data and workflow driven operations. Designed backend architecture, developed scalable REST APIs, implemented core business logic, and optimized system performance based on data access and creation patterns to ensure maintainability, reliability, and efficient large scale operational workflows.",

   technologies: [
"Django",
"Django REST Framework",
"PostgreSQL",
"Session Authentication",
"REST APIs",
],
    images: nhddImages,
   contributions: [
"Led backend development for the platform",
"Designed and developed scalable REST APIs",
"Implemented business workflows and operational logic",
"Built role-based access and permission systems",
"Developed backend architecture and database structures",
"Worked on system scalability, maintainability, and performance",
"Collaborated with frontend and product teams on feature implementation",
],

  },
  {
    slug: "community-based-health-insurance",
    title: "Community-Based Health Insurance (CBHI)",
    company: "Seamless Technology (OpenIMIS Customization)",
    role: "Full Stack Developer",
    shortDescription:
      "A customized healthcare insurance management platform built from OpenIMIS for localized insurance workflows.",
    description:
      "Contributed to frontend and backend development, feature customization, workflow improvements, and platform modernization for a healthcare insurance management platform built from OpenIMIS. The implementation focused on localized operational requirements.",
    technologies: ["React", "Django", "OpenIMIS", "Graphql", "Docker"],
    images: cbhiImages,
    contributions: [
      "System customization and feature development",
      "Frontend workflow implementation",
      "Backend integration",
      "Refactoring and maintainability enhancements",
    ],
  },
  {
    slug: "dodai-e-mobility-platform",
    title: "Dodai E-Mobility Platform",
    company: "Dodai",
    role: "Frontend Developer",
    shortDescription:
      "A multi-platform e-mobility ecosystem with an admin dashboard and apps for drivers, swappers, and distributors.",
    description:
      "Worked on scalable frontend systems, operational workflows, dashboard interfaces, and application features supporting real-time business operations and multi-role platform management. The platform includes an administrative dashboard plus driver, swapper, and distributor applications.",
    technologies: ["React", "React Native", "TypeScript", "Redux", "REST APIs", "Material UI",],
    images: dodaiImages,
    contributions: [
      "Admin dashboard development",
      "Multi-role application workflows",
      "Responsive frontend systems",
      "Real-time operational interfaces",
      "State management and API integration",
      "Feature implementation and maintenance",
    ],
    platforms: [
      "Admin Dashboard",
      "Driver App",
      "Swapper App",
      "Distributor App",
    ],
    type: "mobile",
  },
  {
    slug: "eliita-erp-system",
    title: "Eliita ERP System",
    company: "Eliita",
    role: "Frontend Developer",
    shortDescription:
      "An ERP platform for warehouse management, payroll, sales, and operational business workflows.",
    description:
      "Worked on frontend architecture, feature development, dashboard systems, and operational modules for an enterprise resource planning platform. The work covered warehouse, payroll, sales, and operational workflows with emphasis on scalability, maintainability, and efficient business process management.",
    technologies: ["React", "TypeScript",   "Redux Toolkit Query"],
    images: elitaImages,
    contributions: [
      "ERP dashboard and module development",
      "Warehouse and sales workflow implementation",
      "Payroll and operational management features",
      "Frontend architecture improvements",
      "Scalable UI system development",
      "System maintenance and optimization",
    ],
  },
];
