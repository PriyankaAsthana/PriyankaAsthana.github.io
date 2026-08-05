import { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  GithubLogo,
  LinkedinLogo,
  GraduationCap,
  EnvelopeSimple,
  FilePdf,
} from "@phosphor-icons/react";

export default function Footer() {
  // ===========================================
  // MOUSE GLOW
  // ===========================================

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  // ===========================================
  // STARS (React 19 SAFE)
  // ===========================================
  const stars = useMemo(
  () =>
    Array.from({ length: 22 }, (_, i) => ({
      left: (i * 37) % 100,
      top: (i * 53) % 100,
      duration: 8 + (i % 8),
      delay: i % 6,
    })),
  []
);
  // ===========================================
  // FLOATING PARTICLES (React 19 SAFE)
  // ===========================================

  const particles = useMemo(
  () =>
    Array.from({ length: 14 }, (_, i) => ({
      left: 8 + ((i * 17) % 84),
      bottom: (i * 9) % 35,
      duration: 5 + (i % 5),
      delay: i * 0.4,
    })),
  []
);

  return (
    <footer
      onMouseMove={(e) => {
        const rect =
          e.currentTarget.getBoundingClientRect();

        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="
        relative

        overflow-hidden

        bg-[#050B18]

        py-20
      "
    >
      {/* =======================================
          MOUSE GLOW
      ======================================== */}

      <motion.div
        animate={{
          x: mouse.x - 180,
          y: mouse.y - 180,
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 28,
        }}
        className="
          pointer-events-none

          absolute

          h-[360px]
          w-[360px]

          rounded-full

          bg-blue-500/15

          blur-[130px]
        "
      />

      {/* =======================================
          ANIMATED TOP BORDER
      ======================================== */}

      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-0

          h-[2px]
          w-full

          bg-[length:300%_100%]

          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
        "
      />

      {/* =======================================
          AI GRID
      ======================================== */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "0px 60px",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          opacity-[0.05]

          [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]

          [background-size:42px_42px]
        "
      />

      {/* =======================================
          LEFT BLUE GLOW
      ======================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute

          -left-32
          bottom-0

          h-[340px]
          w-[340px]

          rounded-full

          bg-blue-600/20

          blur-[150px]
        "
      />

      {/* =======================================
          RIGHT BLUE GLOW
      ======================================== */}

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.14, 0.3, 0.14],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute

          -right-20
          top-0

          h-[340px]
          w-[340px]

          rounded-full

          bg-blue-500/20

          blur-[150px]
        "
      />

      {/* =======================================
          GLOWING STARS
      ======================================== */}

      {stars.map((star, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -70],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          className="
            absolute

            h-1.5
            w-1.5

            rounded-full

            bg-blue-400

            blur-[1px]
          "
        />
      ))}

      {/* =======================================
          FLOATING PARTICLES
      ======================================== */}

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50],
            opacity: [0, 0.45, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.left}%`,
            bottom: `${particle.bottom}%`,
          }}
          className="
            absolute

            h-3
            w-3

            rounded-full

            bg-blue-500/30

            blur-sm
          "
        />
      ))}

      {/* =======================================
          CONTENT
      ======================================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          flex

          max-w-7xl

          flex-col

          gap-16

          px-10

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
                {/* =======================================
            LEFT : QUOTE
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            max-w-xl

            lg:pl-8
          "
        >
          <div
            className="
              mb-6

              text-6xl

              font-black

              leading-none

              text-blue-500
            "
          >
            ❝
          </div>

          <h2
            className="
              font-serif

              text-4xl

              leading-tight

              tracking-tight

              text-white

              lg:text-6xl
            "
          >
            The best way to
            <br />
            predict the future
            <br />
            is to invent it.
          </h2>

          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              mt-8

              text-2xl

              text-blue-400
            "
          >
            — Alan Kay
          </motion.p>
        </motion.div>

        {/* =======================================
            DIVIDER
        ======================================== */}

        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            hidden

            h-64
            w-px

            origin-center

            bg-gradient-to-b
            from-transparent
            via-blue-500/60
            to-transparent

            lg:block
          "
        />

        {/* =======================================
            RIGHT SIDE
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          flex-col
          text-center
          lg:items-end
          lg:text-right
          lg:ml-32
          xl:ml-58
          "
        >
          <div className="space-y-3">
  <p
    className="
      text-sm
      uppercase
      tracking-[0.55em]
      text-blue-400
    "
  >
    AI RESEARCHER
    <span className="mx-4 text-blue-500">|</span>
    SOFTWARE ENGINEER
  </p>

  <h2
    className="
      text-5xl
      font-light
      tracking-[0.28em]
      text-white
    "
  >
    PRIYANKA
  </h2>

  <h2
    className="
      text-5xl
      font-light
      tracking-[0.28em]
      text-blue-400
    "
  >
    ASTHANA
  </h2>
</div>

<div
  className="
    mt-12

    flex
    flex-wrap
    justify-center
    gap-5

    lg:justify-end
  "
>
            <FooterButton
              href="https://github.com/PriyankaAsthana"
            >
              <GithubLogo
                size={22}
                weight="duotone"
              />
            </FooterButton>

            <FooterButton
              href="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/"
            >
              <LinkedinLogo
                size={22}
                weight="duotone"
              />
            </FooterButton>

            <FooterButton
              href="https://scholar.google.com/citations?user=_cNMAsEc3DcC&hl=en"
            >
              <GraduationCap
                size={22}
                weight="duotone"
              />
            </FooterButton>

            <FooterButton
              href="/resume-Priyanka.pdf"
            >
              <FilePdf
                size={22}
                weight="duotone"
              />
            </FooterButton>

            <FooterButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asthanapriyanka829@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
            >
              <EnvelopeSimple
                size={22}
                weight="duotone"
              />
            </FooterButton>
          </div>
        </motion.div>

      </div>
            {/* =======================================
          COPYRIGHT
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          relative
          z-20

          mx-auto
          mt-16

          max-w-10xl

          border-t
          border-white/10

          pt-8

          text-center
        "
      >
        <p
          className="
            text-sm
            justify-center
            tracking-[0.18em]

            text-slate-400
          "
        >
          © 2026 Priyanka Asthana 
        </p>
      </motion.div>
    </footer>
  );
}

/* ===========================================
   FOOTER BUTTON
=========================================== */

function FooterButton({
  href,
  children,
}) {
  return (
    <motion.a
      href={href}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel="noreferrer"

      whileHover={{
        y: -6,
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
        group

        relative

        flex
        h-16
        w-16

        items-center
        justify-center

        overflow-hidden

        rounded-2xl

        border
        border-white/15

        bg-white/8

        text-white

        backdrop-blur-2xl

        transition-all
        duration-300

        hover:border-blue-400/40

        hover:shadow-[0_0_35px_rgba(59,130,246,.35)]
      "
    >
      {/* Glass Shimmer */}

      <div
        className="
          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r

          from-transparent
          via-white/25
          to-transparent

          transition-transform
          duration-1000

          group-hover:translate-x-full
        "
      />

      {/* Glow */}

      <div
        className="
          absolute

          h-12
          w-12

          rounded-full

          bg-blue-500/0

          blur-xl

          transition-all
          duration-500

          group-hover:bg-blue-500/30
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10

          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        {children}
      </div>
    </motion.a>
  );
}