import { motion, AnimatePresence } from "framer-motion";

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
  { name: "Home", id: "hero", icon: House },
  {name: "Resume",path: "/resume-Priyanka.pdf",icon: FileText},
  { name: "About", id: "stats", icon: User },
  { name: "Research", id: "research", icon: Flask },
  { name: "Projects", id: "projects", icon: Folder },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Certifications", id: "certifications", icon: GraduationCap },
  { name: "Contact", id: "contact", icon: EnvelopeSimple },
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

              rounded-[10px]

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
        delay: index * 0.05,
      }}
    >
      {item.id ? (
        <button
          onClick={() => {
            document
              .getElementById(item.id)
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });

            onClose();
          }}
          className="
            flex
            w-full
            items-center
            gap-4

            rounded-2xl

            px-5
            py-4

            text-left
            text-slate-700

            transition-all

            hover:bg-white/50
            hover:translate-x-2
          "
        >
          <Icon size={20} />
          <span className="font-medium">
            {item.name}
          </span>
        </button>
      ) : (
          <a
  href={item.path}
  target="_blank"
  rel="noopener noreferrer"
  onClick={onClose}
  className="
    flex
    w-full
    items-center
    gap-4

    rounded-2xl

    px-5
    py-4

    text-slate-700

    transition-all

    hover:bg-white/50
    hover:translate-x-2
  "
>
  <Icon size={20} />

  <span className="font-medium">
    {item.name}
  </span>
</a>
      )}
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
                href="https://github.com/PriyankaAsthana"
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
                href="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/"
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
                href="https://scholar.google.com/citations?user=_cNMAsEc3DcC&hl=en"
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=asthanapriyanka829@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
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