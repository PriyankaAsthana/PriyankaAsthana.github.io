import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";

const nearsy = "/papers/nearsy.pdf";

const tags = [
  "NLP",
  "Embeddings",
  "Semantic Geometry",
  "Evaluation",
];

function ResearchPaperOne({ onBack, onNext }) {
  return (
    <motion.div
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
      {/* SOFT BACKGROUND DECORATION */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-blue-100/40
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
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
          h-[400px]
          w-[400px]
          rounded-full
          bg-sky-100/40
          blur-[130px]
        "
      />

      {/* ================================================= */}
      {/* LEFT NAVIGATION BUTTON */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onBack}
        aria-label="Back to research overview"
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.65,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          group
          absolute
          left-8
          top-1/2
          z-40
          flex
          h-[72px]
          w-[72px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white/90
          text-blue-600
          shadow-[0_12px_35px_rgba(15,23,42,0.10)]
          backdrop-blur-xl
          transition-all
          duration-300

          hover:scale-110
          hover:border-blue-200
          hover:bg-blue-50/70
          hover:shadow-[0_16px_40px_rgba(37,99,235,0.16)]

          lg:left-10
          xl:left-14
        "
      >
        <ArrowLeft
          size={30}
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
      {/* RIGHT NAVIGATION BUTTON */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onNext}
        aria-label="Next research paper"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.65,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          group
          absolute
          right-8
          top-1/2
          z-40
          flex
          h-[72px]
          w-[72px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white/90
          text-blue-600
          shadow-[0_12px_35px_rgba(15,23,42,0.10)]
          backdrop-blur-xl
          transition-all
          duration-300

          hover:scale-110
          hover:border-blue-200
          hover:bg-blue-50/70
          hover:shadow-[0_16px_40px_rgba(37,99,235,0.16)]

          lg:right-10
          xl:right-14
        "
      >
        <ArrowRight
          size={30}
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
          max-w-[1450px]
          grid-cols-1
          items-center
          gap-16

          px-28
          pb-28
          pt-16

          lg:grid-cols-[1.08fr_0.82fr]
          lg:gap-20

          xl:px-36
        "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
              max-w-[650px]
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
                mb-9
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
                Paper 01 / 03
              </span>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 90 }}
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
                max-w-[650px]
                text-[3rem]
                font-black
                leading-[1.08]
                tracking-[-0.035em]
                text-slate-950

                xl:text-[3.55rem]
              "
            >
              Contextual Embedding Bias Predicts LLM Near-Synonym Confusion
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
                max-w-[610px]
                text-lg
                leading-8
                text-slate-600

                xl:text-xl
                xl:leading-9
              "
            >
              Where Isolated Geometry Fails: Evidence from Domain-Specific
              Medical and Cultural Heritage Corpora
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
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                my-8
                h-px
                w-[90%]
                bg-slate-200
              "
            />

            {/* AUTHOR */}

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
                delay: 0.6,
              }}
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.38em]
                  text-slate-400
                "
              >
                Author
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                Priyanka Asthana
              </h3>
            </motion.div>

            {/* VIEW PAPER BUTTON */}

            <motion.a
              href={nearsy}
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
                y: -3,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-blue-600
                px-7
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-[0_10px_28px_rgba(37,99,235,0.28)]
                transition-colors
                duration-300
                hover:bg-blue-700
              "
            >
              View Paper

              <ArrowUpRight
                size={20}
                weight="bold"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.a>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE — SMALLER PAPER PREVIEW */}
        {/* ================================================= */}

        <div className="flex justify-center lg:justify-start">
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              w-full
              max-w-[470px]
            "
          >
            {/* GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.25, 0.45, 0.25],
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
                blur-[50px]
              "
            />

            {/* CARD */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200/80
                bg-white
                shadow-[0_28px_75px_rgba(15,23,42,0.14)]
              "
            >
              {/* ========================================= */}
              {/* NO "PAPER PREVIEW" HEADER ANYMORE */}
              {/* ========================================= */}

              <div
                className="
                  relative
                  h-[500px]
                  overflow-hidden
                  bg-white
                "
              >
                <iframe
                  src={`${nearsy}#page=1&toolbar=0&navpanes=0&scrollbar=1`}
                  title="Near-Synonym Bench paper preview"
                  className="
                    h-full
                    w-full
                    border-0
                  "
                />

                {/* very subtle bottom fade */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-8
                    bg-gradient-to-t
                    from-white/20
                    to-transparent
                  "
                />
              </div>

              {/* FOOTER */}

              <a
                href={nearsy}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-100
                  bg-white
                  px-6
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                "
              >
                <div>
                  <p
                    className="
                      text-base
                      font-semibold
                      text-slate-900
                    "
                  >
                    View full paper
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                    "
                  >
                    Open the complete PDF
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={20}
                    weight="bold"
                  />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM PROGRESS DOTS */}
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
          bottom-9
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-4
        "
      >
        {/* ACTIVE PAPER */}

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

        {/* PAPER 02 */}

        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-slate-300
          "
        />

        {/* PAPER 03 */}

        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-slate-300
          "
        />
      </motion.div>
    </motion.div>
  );
}

export default ResearchPaperOne;