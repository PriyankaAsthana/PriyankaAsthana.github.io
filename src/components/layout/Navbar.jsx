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
  // NAVBAR REF
  // Used to detect clicks outside navbar
  // =====================================

  const navbarRef = useRef(null);

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

  // =====================================
  // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  // =====================================

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        mobileOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ===========================================
          ORIGINAL NAVBAR
      ============================================ */}

      <motion.header
        ref={navbarRef}
        animate={{
          y: heroVisible ? 0 : -120,
          opacity: heroVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          sticky
          top-0
          z-50
          w-full
          bg-slate-900
          text-white
          shadow-lg
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-9xl
            items-center
            justify-around
            px-8
            lg:px-12
          "
        >

          {/* LOGO */}

          <NavLink
            to="/"
            className="
              text-3xl
              font-bold
              text-blue-400
            "
          >
            PA
          </NavLink>

          {/* ===========================================
              DESKTOP NAVIGATION
          ============================================ */}

          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >
            {navLinks.map((item) =>
              item.pdf ? (
                <a
                  key={item.name}
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    transition
                    hover:text-blue-400
                  "
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
                  className="
                    text-gray-300
                    transition
                    hover:text-blue-400
                  "
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* ===========================================
              MOBILE HAMBURGER
          ============================================ */}

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

        {/* ===========================================
            MOBILE MENU
        ============================================ */}

        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scaleY: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scaleY: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              relative
              overflow-hidden

              border-t
              border-white/10

              bg-slate-900/95
              backdrop-blur-xl

              shadow-[0_20px_50px_rgba(0,0,0,0.35)]

              lg:hidden
            "
          >

            {/* Subtle blue glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-24

                h-48
                w-48

                rounded-full

                bg-blue-500/20

                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                bottom-0

                h-40
                w-40

                rounded-full

                bg-blue-400/10

                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10

                px-4
                py-4
              "
            >

              {navLinks.map((item, index) =>
                item.pdf ? (

                  /* ================================
                     RESUME
                  ================================= */

                  <motion.a
                    key={item.name}
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setMobileOpen(false)
                    }

                    initial={{
                      opacity: 0,
                      x: -15,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: index * 0.035,
                      duration: 0.2,
                    }}

                    whileTap={{
                      scale: 0.98,
                    }}

                    className="
                      mb-2

                      flex
                      w-full
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-white/30

                      bg-white/[0.04]

                      px-5
                      py-4

                      text-center
                      font-medium
                      text-gray-200

                      transition-all
                      duration-300

                      hover:border-white/60
                      hover:bg-white/[0.10]
                      hover:text-white
                    "
                  >
                    {item.name}
                  </motion.a>

                ) : (

                  /* ================================
                     OTHER NAV ITEMS
                  ================================= */

                  <motion.button
                    key={item.name}

                    initial={{
                      opacity: 0,
                      x: -15,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: index * 0.035,
                      duration: 0.2,
                    }}

                    whileTap={{
                      scale: 0.98,
                    }}

                    onClick={() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });

                      setMobileOpen(false);
                    }}

                    className="
                      mb-2

                      flex
                      w-full
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-white/30

                      bg-white/[0.04]

                      px-5
                      py-4

                      text-center
                      font-medium
                      text-gray-200

                      transition-all
                      duration-300

                      hover:border-white/60
                      hover:bg-white/[0.10]
                      hover:text-white
                    "
                  >
                    {item.name}
                  </motion.button>
                )
              )}

            </div>
          </motion.div>
        )}
      </motion.header>

      {/* ===========================================
          FLOATING MENU BUTTON
      ============================================ */}

      <FloatingMenuButton
        visible={
          !heroVisible && !scrolling
        }
        open={floatingOpen}
        onClick={() =>
          setFloatingOpen(!floatingOpen)
        }
      />

      {/* ===========================================
          FLOATING MENU
      ============================================ */}

      <FloatingMenu
        open={floatingOpen}
        onClose={() =>
          setFloatingOpen(false)
        }
      />
    </>
  );
}