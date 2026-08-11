import { motion } from "framer-motion";
import {
  ArrowRight,
  DownloadSimple,
} from "@phosphor-icons/react";

export default function ContactButton() {
  return (
    <div
      className="
        flex
        flex-col
        items-center

        w-full

        pt-6
        pb-14
      "
    >
      {/* ==========================
            TEXT
      ========================== */}

      <div className="text-center">
        <h2
          className="
            -mt-15

            font-serif
            text-2xl
            font-bold
            leading-tight
            tracking-tight
            text-slate-900
          "
        >
          Have an opportunity,
          research project,
          or an ambitious idea?
        </h2>

        <p
          className="
            mt-0
            text-lg
            text-slate-500
          "
        >
          Let's build something meaningful together.
        </p>
      </div>

      {/* ==========================
            BUTTONS
      ========================== */}

      <div
        className="
          mt-5

          flex
          items-center
          justify-center

          gap-6
          flex-wrap

          w-full

          pt-6
          pb-10
        "
      >
        {/* ==========================
              CONTACT BUTTON
        ========================== */}

        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=asthanapriyanka829@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            relative

            inline-flex
            items-center
            justify-center

            gap-5

            overflow-hidden

            rounded-[8px]

            bg-gradient-to-r
            from-blue-600
            via-blue-500
            to-cyan-500

            px-10
            py-5

            text-lg
            font-semibold
            text-white

            shadow-[0_20px_60px_rgba(37,99,235,.35)]
          "
        >
          {/* Shine */}

          <motion.div
            animate={{
              x: [-250, 250],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-24

              rotate-12

              bg-white/20

              blur-xl
            "
          />

          <span className="relative z-10">
            Let's Build Together
          </span>

          <motion.div
            whileHover={{
              x: 6,
            }}
            className="relative z-10"
          >
            <ArrowRight
              size={24}
              weight="bold"
            />
          </motion.div>
        </motion.a>

        {/* ==========================
              DOWNLOAD BUTTON
        ========================== */}

        <motion.a
          href="/resume-Priyanka.pdf"
          download
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            inline-flex
            items-center
            justify-center

            gap-4

            rounded-xl

            border
            border-blue-200

            bg-white/90

            px-10
            py-5

            text-lg
            font-semibold
            text-slate-700

            backdrop-blur-xl

            shadow-[0_15px_40px_rgba(15,23,42,.08)]

            transition-all

            hover:border-blue-500
            hover:text-blue-600

            hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]
          "
        >
          <DownloadSimple
            size={22}
            weight="bold"
          />

          <span>
            Download Resume
          </span>
        </motion.a>
      </div>
    </div>
  );
}