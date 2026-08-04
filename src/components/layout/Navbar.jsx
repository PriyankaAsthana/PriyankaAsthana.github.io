import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Moon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Publications", path: "/publications" },
  { name: "Achievements", path: "/achievements" },
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

            <button className="rounded-full bg-slate-700 p-2 transition hover:bg-slate-600">
              <Moon size={18} />
            </button>
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

      {/* ===========================================
          FLOATING HAMBURGER
      ============================================ */}

      <AnimatePresence>
        {!heroVisible &&
          !scrolling && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.7,
                x: -40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                x: -40,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setFloatingOpen(
                  !floatingOpen
                )
              }
              className="
                fixed
                left-6
                top-6
                z-[100]

                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-br-[28px]
                rounded-tl-[12px]

                border
                border-white/30

                bg-white/20

                backdrop-blur-2xl

                shadow-[0_20px_50px_rgba(15,23,42,.18)]

                transition-all

                hover:scale-105
              "
            >
              {floatingOpen ? (
                <X
                  size={28}
                  color="#2563EB"
                />
              ) : (
                <Menu
                  size={28}
                  color="#2563EB"
                />
              )}
            </motion.button>
          )}
      </AnimatePresence>

      {/* ===========================================
          FLOATING MENU
      ============================================ */}

      <AnimatePresence>
        {floatingOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-6
              top-24
              z-[99]

              w-72

              rounded-3xl

              border
              border-white/30

              bg-white/20

              p-6

              backdrop-blur-2xl

              shadow-[0_25px_70px_rgba(15,23,42,.18)]
            "
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setFloatingOpen(false)
                  }
                  className={({ isActive }) =>
                    `
                    rounded-xl
                    px-4
                    py-3
                    font-medium
                    transition-all

                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-800 hover:bg-white/40"
                    }
                  `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}