import { Routes, Route } from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import Resume from "../Pages/Resume";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:slug" element={<ProjectDetails />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}