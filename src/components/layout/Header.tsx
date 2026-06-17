// src/components/layout/Header.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ThemeToggle from "../theme/ThemeToggle";

const navLinks = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="flex h-20 grid-pattern  items-center justify-between ">

        {/* LOGO */}
        <Link
          to="/"
          className="relative z-50 text-xl font-black tracking-tight text-foreground sm:text-2xl"
        >
          Siyanet
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}

          <ThemeToggle />
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative  flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-xl"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed  inset-0 transition-all duration-300 md:hidden ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {/* BACKDROP */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* MENU PANEL */}
          <div
            className={`absolute right-0 top-0 flex h-screen w-[150px] text-center flex-col border-l border-border bg-background  transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mt-24 flex flex-col gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-foreground transition hover:text-muted"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}