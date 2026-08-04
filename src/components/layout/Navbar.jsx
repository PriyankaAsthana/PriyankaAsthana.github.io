import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import FloatingMenuButton from "./FloatingMenuButton";
import FloatingMenu from "./FloatingMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
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
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-400"
                    : "text-gray-300 transition hover:text-blue-400"
                }
              >
                {item.name}
              </NavLink>
            ))}

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
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={({ isActive }) =>
                  `block px-6 py-4 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
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
