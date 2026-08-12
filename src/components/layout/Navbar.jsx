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

    <div className="relative z-10 px-4 py-3">

      {navLinks.map((item, index) =>
        item.pdf ? (
          <motion.a
            key={item.name}
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
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
              group
              relative
              mb-1
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              px-5
              py-4
              text-center
              text-gray-300
              transition-all
              duration-300
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            {/* Hover indicator */}
            <span
              className="
                absolute
                left-0
                top-1/2

                h-0
                w-1

                -translate-y-1/2

                rounded-full

                bg-blue-400

                transition-all
                duration-300

                group-hover:h-7
              "
            />

            <span
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              {item.name}
            </span>
          </motion.a>
        ) : (
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
              group
              relative
              mb-1
              flex
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              px-5
              py-4
              text-center
              text-gray-300
              transition-all
              duration-300
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            {/* Blue active/hover indicator */}
            <span
              className="
                absolute
                left-0
                top-1/2

                h-0
                w-1

                -translate-y-1/2

                rounded-full

                bg-blue-400

                transition-all
                duration-300

                group-hover:h-7
              "
            />

            <span
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              {item.name}
            </span>
          </motion.button>
        )
      )}

    </div>
  </motion.div>
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
