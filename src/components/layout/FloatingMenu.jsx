import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  House,
  FileText,
  User,
  Flask,
  Folder,
  Briefcase,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  GraduationCap,
} from "@phosphor-icons/react";

const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: House,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: FileText,
  },
  {
    name: "About",
    path: "/about",
    icon: User,
  },
  {
    name: "Research",
    path: "/research",
    icon: Flask,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Folder,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: Briefcase,
  },

  {
    name: "Contact",
    path: "/contact",
    icon: EnvelopeSimple,
  },
];

export default function FloatingMenu({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Blur */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[98]

              backdrop-blur-sm
            "
          />

          {/* Panel */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed

              left-6
              top-24

              z-[99]

              w-[320px]

              overflow-hidden

              rounded-[34px]

              border
              border-white/30

              bg-white/20

              backdrop-blur-3xl

              shadow-[0_30px_80px_rgba(15,23,42,.18)]
            "
          >
            {/* Header */}

            <div
              className="
                border-b
                border-white/20

                px-7
                py-6
              "
            >
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.35em]

                  text-blue-600
                "
              >
                Navigation
              </p>

              <h2
                className="
                  mt-2

                  text-2xl

                  font-bold

                  text-slate-900
                "
              >
                Explore
              </h2>
            </div>

            {/* Links */}

            <div
              className="
                space-y-2

                p-5
              "
            >
              {navLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.05,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({
                        isActive,
                      }) =>
                        `
                        flex
                        items-center
                        gap-4

                        rounded-2xl

                        px-5
                        py-4

                        transition-all

                        ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg"
                            : "text-slate-700 hover:bg-white/50 hover:translate-x-2"
                        }
                      `
                      }
                    >
                      <Icon
                        size={20}
                      />

                      <span className="font-medium">
                        {item.name}
                      </span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}

            <div
              className="
                mx-6

                h-px

                bg-white/30
              "
            />

            {/* Social */}

            <div
              className="
                flex
                justify-center
                gap-5

                p-6
              "
            >
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl

                  bg-white/40

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-blue-100
                "
              >
                <GithubLogo size={20} weight="duotone" />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl

                  bg-white/40

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-blue-100
                "
              >
                <LinkedinLogo size={20} weight="duotone" />
              </a>

              <a
                href="https://scholar.google.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl

                  bg-white/40

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-blue-100
                "
              >
                <GraduationCap
                  size={20}
                  weight="duotone"
                />
              </a>

              <a
                href="mailto:asthanapriyanka829@gmail.com"
                className="
                  rounded-xl

                  bg-white/40

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-blue-100
                "
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}