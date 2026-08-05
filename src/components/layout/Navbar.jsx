import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import FloatingMenuButton from "./FloatingMenuButton";
import FloatingMenu from "./FloatingMenu";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Resume", pdf: "/resume-Priyanka.pdf" },
  { name: "About", id: "stats" },
  { name: "Research", id: "research" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [heroVisible, setHeroVisible] =
    useState(true);

  const [scrolling, setScrolling] =
    useState(false);

  const [floatingOpen, setFloatingOpen] =
    useState(false);

  const timeout = useRef();

  // =====================================
  // Detect Hero Visibility
  // =====================================

  useEffect(() => {
    const hero =
      document.getElementById("hero");

    if (!hero) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setHeroVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.25,
        }
      );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // =====================================
  // Detect Scrolling
  // =====================================

  useEffect(() => {
    function handleScroll() {
      setScrolling(true);

      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        setScrolling(false);
      }, 300);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* ===========================================
          ORIGINAL NAVBAR (UNCHANGED)
      ============================================ */}

      <motion.header
        animate={{
          y: heroVisible ? 0 : -120,
          opacity: heroVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-lg"
      >
        <div className="mx-auto flex h-20 w-full max-w-9xl items-center justify-around px-8 lg:px-12">
          <NavLink
            to="/"
            className="text-3xl font-bold text-blue-400"
          >
            PA
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
  {navLinks.map((item) =>
    item.pdf ? (
      <a
        key={item.name}
        href={item.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition hover:text-blue-400"
      >
        {item.name}
      </a>
    ) : (
      <button
        key={item.name}
        onClick={() =>
          document
            .getElementById(item.id)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
        }
        className="text-gray-300 transition hover:text-blue-400"
      >
        {item.name}
      </button>
    )
  )}
</nav>

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-slate-800 lg:hidden">
            {navLinks.map((item) =>
  item.pdf ? (
    <a
      key={item.name}
      href={item.pdf}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMobileOpen(false)}
      className="block px-6 py-4 text-gray-300 hover:bg-slate-700"
    >
      {item.name}
    </a>
  ) : (
    <button
      key={item.name}
      onClick={() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        setMobileOpen(false);
      }}
      className="block w-full px-6 py-4 text-left text-gray-300 hover:bg-slate-700"
    >
      {item.name}
    </button>
  )
)}
          </div>
        )}
      </motion.header>

      <FloatingMenuButton
  visible={!heroVisible && !scrolling}
  open={floatingOpen}
  onClick={() =>
    setFloatingOpen(!floatingOpen)
  }
/>

<FloatingMenu
  open={floatingOpen}
  onClose={() =>
    setFloatingOpen(false)
  }
/>

      
    </>
  );
}
