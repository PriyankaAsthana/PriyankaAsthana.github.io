import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";

const paperPdf = "/papers/model_sel.pdf";
const paperLink = "https://zenodo.org/records/20399130";

const tags = [
  "RAG",
  "LLMs",
  "Cultural Corpora",
  "Retrieval",
];

function ResearchPaperTwo({ onBack, onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50/40
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.38, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[48%]
          h-[520px]
          w-[520px]
          -translate-y-1/2
          rounded-full
          bg-blue-100/50
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[42%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-sky-100/50
          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* PREVIOUS BUTTON */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onBack}
        aria-label="Previous research paper"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.55,
        }}
        whileTap={{ scale: 0.9 }}
        className="
          group
          absolute
          left-6
          top-1/2
          z-40
          flex
          h-[68px]
          w-[68px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-2
          border-blue-600
          bg-blue-600
          text-white
          shadow-[0_12px_35px_rgba(37,99,235,0.22)]
          transition-all
          duration-300

          hover:scale-110
          hover:bg-transparent
          hover:text-blue-600
          hover:shadow-[0_18px_45px_rgba(37,99,235,0.20)]

          lg:left-8
          xl:left-10
        "
      >
        <ArrowLeft
          size={29}
          weight="bold"
          className="
            transition-transform
            duration-300
            group-hover:-translate-x-1
            group-hover:scale-125
          "
        />
      </motion.button>

      {/* ================================================= */}
      {/* NEXT BUTTON */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onNext}
        aria-label="Next research paper"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.55,
        }}
        whileTap={{ scale: 0.9 }}
        className="
          group
          absolute
          right-6
          top-1/2
          z-40
          flex
          h-[68px]
          w-[68px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-2
          border-blue-600
          bg-blue-600
          text-white
          shadow-[0_12px_35px_rgba(37,99,235,0.22)]
          transition-all
          duration-300

          hover:scale-110
          hover:bg-transparent
          hover:text-blue-600
          hover:shadow-[0_18px_45px_rgba(37,99,235,0.20)]

          lg:right-8
          xl:right-10
        "
      >
        <ArrowRight
          size={29}
          weight="bold"
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:scale-125
          "
        />
      </motion.button>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-[1420px]
          grid-cols-1
          items-center
          gap-16

          px-28
          pb-28
          pt-16

          lg:grid-cols-[1.05fr_0.78fr]
          lg:gap-24

          xl:px-36
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-[620px]
              lg:pr-4
            "
          >
            {/* PAPER NUMBER */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                mb-8
                flex
                items-center
                gap-5
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.4em]
                  text-blue-600
                "
              >
                Paper 02 / 03
              </span>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 85 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="h-px bg-blue-400"
              />
            </motion.div>

            {/* TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                max-w-[620px]
                text-[2.8rem]
                font-black
                leading-[1.07]
                tracking-[-0.035em]
                text-slate-950

                xl:text-[3.35rem]
              "
            >
              Embedding Model Selection for Domain-Specific Retrieval-Augmented Generation
            </motion.h2>

            {/* SUBTITLE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                mt-7
                max-w-[580px]
                text-lg
                leading-8
                text-slate-600

                xl:text-xl
                xl:leading-9
              "
            >
              A Comparative Study on Indian Cultural Heritage Corpora:
              Retrieval-Augmented Generation for domain-specific cultural
              corpora and knowledge-intensive language model systems.
            </motion.p>

            {/* TAGS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45 + index * 0.07,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    cursor-default
                    rounded-full
                    border
                    border-blue-100
                    bg-blue-50/80
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                    shadow-sm
                    backdrop-blur
                  "
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* DIVIDER */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                mt-10
                h-px
                w-[88%]
                bg-slate-200
              "
            />

            {/* AUTHOR */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.6,
              }}
              className="mt-16"
            >
              <p className="text-xl text-slate-900">
                <span className="font-semibold text-slate-500">
                  Author:
                </span>

                <span className="ml-3 font-bold text-slate-950">
                  Priyanka Asthana
                </span>
              </p>
            </motion.div>

            {/* VIEW PAPER */}

            <motion.a
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.7,
              }}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                mt-8
                inline-flex
                min-w-[190px]
                items-center
                justify-center
                gap-4
                rounded-full
                bg-blue-600
                px-10
                py-5
                text-lg
                font-bold
                text-white
                shadow-[0_12px_32px_rgba(37,99,235,0.30)]
                transition-all
                duration-300

                hover:bg-blue-700
                hover:shadow-[0_18px_40px_rgba(37,99,235,0.38)]
              "
            >
              View Paper

              <ArrowUpRight
                size={23}
                weight="bold"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:scale-110
                "
              />
            </motion.a>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE — PAPER PREVIEW */}
        {/* ================================================= */}

        <div className="flex justify-center lg:justify-start">
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[430px]
              min-w-0
            "
          >
            {/* BACKGROUND GLOW */}

            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-8
                -z-10
                rounded-[40px]
                bg-blue-200/40
                blur-[55px]
              "
            />

            {/* OUTER WHITE CARD */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                w-full
                min-w-0
                rounded-[12px]
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_30px_80px_rgba(15,23,42,0.15)]
              "
            >
              {/* ACTUAL PAPER */}

              <div
                className="
                  group
                  relative
                  h-[500px]
                  w-full
                  min-w-0
                  overflow-hidden
                  border
                  border-slate-200
                  bg-slate-100
                "
              >
                {/* STATIC PDF VIEWPORT */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                  "
                >
                  <iframe
                    src={`${paperPdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title="RAG and Cultural Corpora paper preview"
                    scrolling="no"
                    tabIndex={-1}
                    className="
                      pointer-events-none
                      block
                      h-full
                      w-[calc(100%+24px)]
                      select-none
                      border-0
                    "
                  />
                </div>

                {/* HOVER DARKENING */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-slate-950/0
                    transition-all
                    duration-300
                    group-hover:bg-slate-950/10
                  "
                />

                {/* CLICKABLE HOVER BUTTON */}

                <a
                  href={paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open full research paper"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20

                    flex
                    -translate-x-1/2
                    -translate-y-[35%]
                    items-center
                    gap-3

                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/80
                    bg-white/95
                    px-6
                    py-3.5

                    font-semibold
                    text-blue-600

                    opacity-0
                    shadow-[0_12px_35px_rgba(15,23,42,0.20)]
                    backdrop-blur-md

                    transition-all
                    duration-300

                    group-hover:-translate-y-1/2
                    group-hover:opacity-100

                    hover:scale-105
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  View Paper

                  <ArrowUpRight
                    size={20}
                    weight="bold"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>

              {/* BOTTOM INFORMATION */}

              <div
                className="
                  w-full
                  min-w-0
                  px-2
                  pb-2
                  pt-5
                "
              >
                <p
                  className="
                    break-words
                    text-base
                    font-bold
                    leading-6
                    text-slate-900
                  "
                >
                  View full paper
                </p>

                <p
                  className="
                    mt-1
                    max-w-full
                    break-words
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Open on Zenodo
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* PROGRESS DOTS — SECOND ACTIVE */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.9,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-4
        "
      >
        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-slate-300
          "
        />

        <motion.div
          layout
          className="
            h-2.5
            w-11
            rounded-full
            bg-blue-600
            shadow-[0_0_12px_rgba(37,99,235,0.45)]
          "
        />

        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-slate-300
          "
        />
      </motion.div>
    </motion.section>
  );
}

export default ResearchPaperTwo;