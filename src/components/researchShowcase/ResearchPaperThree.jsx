import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";

const paperPdf = "/papers/geoai.pdf";
const paperLink = "https://zenodo.org/records/18149564";

const tags = [
  "Healthcare AI",
  "Blood Allocation",
  "Optimization",
  "GeoAI",
];

function ResearchPaperThree({ onBack, onNext }) {
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

          h-[360px]
          w-[360px]

          md:h-[450px]
          md:w-[450px]

          lg:h-[520px]
          lg:w-[520px]

          -translate-y-1/2

          rounded-full
          bg-blue-100/50

          blur-[120px]
          md:blur-[135px]
          lg:blur-[150px]
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

          h-[300px]
          w-[300px]

          md:h-[360px]
          md:w-[360px]

          lg:h-[420px]
          lg:w-[420px]

          rounded-full
          bg-sky-100/50

          blur-[110px]
          md:blur-[125px]
          lg:blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* LEFT BUTTON — BACK TO PAPER 2 */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onBack}
        aria-label="Previous research paper"
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
          delay: 0.55,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="
          group
          absolute

          left-3
          md:left-5

          top-1/2

          z-40

          flex

          h-12
          w-12

          md:h-14
          md:w-14

          lg:h-[68px]
          lg:w-[68px]

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
          size={23}
          weight="bold"
          className="
            md:size-[26px]
            lg:size-[29px]

            transition-transform
            duration-300

            group-hover:-translate-x-1
            group-hover:scale-125
          "
        />
      </motion.button>

      {/* ================================================= */}
      {/* RIGHT BUTTON — BACK TO RESEARCH OVERVIEW */}
      {/* ================================================= */}

      <motion.button
        type="button"
        onClick={onNext}
        aria-label="Return to research overview"
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
          delay: 0.55,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="
          group
          absolute

          right-3
          md:right-5

          top-1/2

          z-40

          flex

          h-12
          w-12

          md:h-14
          md:w-14

          lg:h-[68px]
          lg:w-[68px]

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
          size={23}
          weight="bold"
          className="
            md:size-[26px]
            lg:size-[29px]

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

          gap-10
          md:gap-12

          px-16
          sm:px-20
          md:px-24

          pb-24
          md:pb-28

          pt-12
          md:pt-16

          lg:grid-cols-[1.05fr_0.78fr]
          lg:gap-24

          lg:px-28

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

              max-w-[500px]
              md:max-w-[560px]

              lg:max-w-[620px]

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
                mb-5
                md:mb-6
                lg:mb-8

                flex
                items-center

                gap-3
                md:gap-4
                lg:gap-5
              "
            >
              <span
                className="
                  text-[10px]
                  md:text-xs
                  lg:text-sm

                  font-bold
                  uppercase

                  tracking-[0.3em]
                  md:tracking-[0.35em]
                  lg:tracking-[0.4em]

                  text-blue-600
                "
              >
                Paper 03 / 03
              </span>

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 85,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="
                  h-px
                  bg-blue-400
                "
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
                max-w-[500px]
                md:max-w-[560px]

                lg:max-w-[620px]

                text-[2rem]
                sm:text-[2.2rem]
                md:text-[2.45rem]

                lg:text-[2.8rem]

                font-black

                leading-[1.08]

                tracking-[-0.03em]

                text-slate-950

                xl:text-[3.35rem]
              "
            >
              Intelligent Blood Allocation
              Using GeoAI
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
                mt-5
                md:mt-6
                lg:mt-7

                max-w-[500px]
                md:max-w-[550px]

                lg:max-w-[580px]

                text-sm
                sm:text-base
                md:text-lg

                lg:text-lg

                leading-6
                sm:leading-7
                md:leading-8

                text-slate-600

                xl:text-xl
                xl:leading-9
              "
            >
              Exploring intelligent and location-aware approaches for
              improving blood allocation and healthcare resource
              distribution.
            </motion.p>

            {/* TAGS */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                mt-5
                md:mt-6
                lg:mt-7

                flex
                flex-wrap

                gap-2
                md:gap-3
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

                    px-3
                    py-1.5

                    md:px-4
                    md:py-2

                    text-[11px]
                    md:text-sm

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
                mt-7
                md:mt-8
                lg:mt-10

                h-px

                w-full
                md:w-[90%]
                lg:w-[88%]

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
              className="
                mt-8
                md:mt-10
                lg:mt-16
              "
            >
              <p
                className="
                  text-base
                  md:text-lg
                  lg:text-xl

                  text-slate-900
                "
              >
                <span className="font-semibold text-slate-500">
                  Author:
                </span>

                <span
                  className="
                    ml-2
                    md:ml-3

                    font-bold
                    text-slate-950
                  "
                >
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

                mt-6
                md:mt-7
                lg:mt-8

                inline-flex

                min-w-[150px]
                md:min-w-[170px]

                lg:min-w-[190px]

                items-center
                justify-center

                gap-2
                md:gap-3
                lg:gap-4

                rounded-full

                bg-blue-600

                px-6
                py-3

                md:px-8
                md:py-4

                lg:px-10
                lg:py-5

                text-sm
                md:text-base
                lg:text-lg

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
                size={18}
                weight="bold"
                className="
                  md:size-[21px]
                  lg:size-[23px]

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

              max-w-[300px]
              sm:max-w-[330px]
              md:max-w-[360px]

              lg:max-w-[430px]

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

                inset-5
                md:inset-7
                lg:inset-8

                -z-10

                rounded-[30px]
                lg:rounded-[40px]

                bg-blue-200/40

                blur-[40px]
                md:blur-[48px]
                lg:blur-[55px]
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

                rounded-[10px]
                lg:rounded-[12px]

                border
                border-slate-200

                bg-white

                p-3
                md:p-4
                lg:p-5

                shadow-[0_30px_80px_rgba(15,23,42,0.15)]
              "
            >
              {/* ACTUAL PAPER */}

              <div
                className="
                  group

                  relative

                  h-[330px]
                  sm:h-[360px]
                  md:h-[420px]

                  lg:h-[500px]

                  w-full
                  min-w-0

                  overflow-hidden

                  border
                  border-slate-200

                  bg-slate-100
                "
              >
                {/* PDF VIEWPORT */}

                <div
                  className="
                    absolute
                    inset-0

                    overflow-hidden
                  "
                >
                  <iframe
                    src={`${paperPdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title="Blood allocation research paper preview"
                    scrolling="no"
                    tabIndex={-1}
                    className="
                      pointer-events-none

                      block

                      h-full

                      w-[calc(100%+18px)]
                      md:w-[calc(100%+20px)]
                      lg:w-[calc(100%+24px)]

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

                {/* HOVER VIEW PAPER BUTTON */}

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

                    gap-2
                    md:gap-3

                    whitespace-nowrap

                    rounded-full

                    border
                    border-white/80

                    bg-white/95

                    px-4
                    py-2.5

                    md:px-5
                    md:py-3

                    lg:px-6
                    lg:py-3.5

                    text-xs
                    md:text-sm
                    lg:text-base

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
                    size={17}
                    weight="bold"
                    className="
                      md:size-[19px]
                      lg:size-[20px]
                    "
                  />
                </a>
              </div>

              {/* BOTTOM INFORMATION */}

              <div
                className="
                  w-full
                  min-w-0

                  px-1
                  md:px-2

                  pb-1
                  md:pb-2

                  pt-3
                  md:pt-4
                  lg:pt-5
                "
              >
                <p
                  className="
                    break-words

                    text-sm
                    md:text-base

                    font-bold

                    leading-5
                    md:leading-6

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

                    text-xs
                    md:text-sm

                    leading-5
                    md:leading-6

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
      {/* PROGRESS DOTS — THIRD ACTIVE */}
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

          bottom-5
          md:bottom-7
          lg:bottom-8

          left-1/2

          z-30

          flex

          -translate-x-1/2

          items-center

          gap-3
          md:gap-4
        "
      >
        {/* PAPER 01 */}

        <div
          className="
            h-2
            w-2

            md:h-2.5
            md:w-2.5

            rounded-full

            bg-slate-300
          "
        />

        {/* PAPER 02 */}

        <div
          className="
            h-2
            w-2

            md:h-2.5
            md:w-2.5

            rounded-full

            bg-slate-300
          "
        />

        {/* PAPER 03 ACTIVE */}

        <motion.div
          layout
          className="
            h-2
            w-9

            md:h-2.5
            md:w-11

            rounded-full

            bg-blue-600

            shadow-[0_0_12px_rgba(37,99,235,0.45)]
          "
        />
      </motion.div>
    </motion.section>
  );
}

export default ResearchPaperThree;