"use client";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import LinkButton from "../LinkButton";
import Logo from "./Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#resume", label: "Experience" },
  { url: "#projects", label: "Projects" },
  { url: "#skill", label: "Skills" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const navHandler = () => {
      setNavBackground(window.scrollY >= 90);
    };
    window.addEventListener("scroll", navHandler);
    return () => window.removeEventListener("scroll", navHandler);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.url.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`h-18 fixed z-50 w-full transition-all duration-300
        ${navBackground
          ? "bg-slate-900/90 backdrop-blur-md shadow-md shadow-black/20 border-b border-slate-800/50"
          : ""
        }`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Nav links */}
        <ul className="hidden space-x-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`relative text-base font-medium transition-colors duration-300
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
                  after:origin-left after:scale-x-0 after:bg-indigo-500
                  after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${activeSection === link.url
                    ? "text-indigo-400 after:scale-x-100"
                    : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side — social icons + CV button */}
        <div className="hidden lg:flex items-center gap-4">
          <LinkButton
            href="/documents/cv.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>

        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}