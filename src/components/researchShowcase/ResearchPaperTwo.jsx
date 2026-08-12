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
      {/* LEFT BUTTON — BACK TO PAPER 2 */}
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
          left-3
          sm:left-4
          md:left-5
          top-1/2
          z-40

          flex
          h-11
          w-11
          sm:h-12
          sm:w-12
          md:h-14
          md:w-14

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
          lg:h-[68px]
          lg:w-[68px]

          xl:left-10
        "
      >
        <ArrowLeft
          size={22}
          weight="bold"
          className="
            transition-transform
            duration-300
            group-hover:-translate-x-1
            group-hover:scale-125

            sm:size-[24px]
            md:size-[26px]
            lg:size-[29px]
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
          right-3
          sm:right-4
          md:right-5
          top-1/2
          z-40

          flex
          h-11
          w-11
          sm:h-12
          sm:w-12
          md:h-14
          md:w-14

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
          lg:h-[68px]
          lg:w-[68px]

          xl:right-10
        "
      >
        <ArrowRight
          size={22}
          weight="bold"
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:scale-125

            sm:size-[24px]
            md:size-[26px]
            lg:size-[29px]
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

          px-14
          pb-20
          pt-12

          sm:gap-12
          sm:px-16
          sm:pb-20
          sm:pt-14

          md:gap-14
          md:px-20
          md:pb-24
          md:pt-14

          lg:grid-cols-[1.05fr_0.78fr]
          lg:gap-24
          lg:px-28
          lg:pb-28
          lg:pt-16

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
              max-w-[520px]

              sm:max-w-[560px]
              md:max-w-[590px]

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
                flex
                items-center
                gap-3

                sm:mb-6
                sm:gap-4

                md:mb-7
                md:gap-4

                lg:mb-8
                lg:gap-5
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.3em]

                  md:text-sm
                  md:tracking-[0.35em]

                  lg:tracking-[0.4em]
                "
              >
                Paper 03 / 03
              </span>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 85 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="
                  h-px
                  w-12
                  bg-blue-400

                  sm:w-16
                  md:w-20

                  lg:w-auto
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
                max-w-[520px]

                text-[1.8rem]
                font-black
                leading-[1.1]
                tracking-[-0.025em]
                text-slate-950

                sm:text-[2.1rem]

                md:text-[2.4rem]

                lg:max-w-[620px]
                lg:text-[2.8rem]
                lg:leading-[1.07]
                lg:tracking-[-0.035em]

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
                max-w-[500px]

                text-sm
                leading-6
                text-slate-600

                sm:mt-6
                sm:text-base
                sm:leading-7

                md:mt-7
                md:text-lg
                md:leading-8

                lg:max-w-[580px]
                lg:text-lg
                lg:leading-8

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                mt-5
                flex
                flex-wrap
                gap-2

                sm:mt-6
                sm:gap-2.5

                md:mt-7
                md:gap-3

                lg:mt-7
                lg:gap-3
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

                    text-[11px]
                    font-medium
                    text-blue-700
                    shadow-sm
                    backdrop-blur

                    sm:px-3.5
                    sm:py-1.5
                    sm:text-xs

                    md:px-4
                    md:py-2
                    md:text-sm

                    lg:px-4
                    lg:py-2
                    lg:text-sm
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
                mt-7
                h-px
                w-full
                bg-slate-200

                sm:mt-8
                sm:w-[92%]

                md:mt-9
                md:w-[90%]

                lg:mt-10
                lg:w-[88%]
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

                sm:mt-10

                md:mt-12

                lg:mt-16
              "
            >
              <p
                className="
                  text-sm
                  text-slate-900

                  sm:text-base

                  md:text-lg

                  lg:text-xl
                "
              >
                <span className="font-semibold text-slate-500">
                  Author:
                </span>

                <span className="ml-2 font-bold text-slate-950 sm:ml-3">
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
                inline-flex
                min-w-[150px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-blue-600

                px-6
                py-3

                text-sm
                font-bold
                text-white

                shadow-[0_12px_32px_rgba(37,99,235,0.30)]
                transition-all
                duration-300

                sm:mt-7
                sm:min-w-[170px]
                sm:px-7
                sm:py-3.5
                sm:text-base

                md:mt-8
                md:min-w-[180px]
                md:px-8
                md:py-4
                md:text-base

                lg:min-w-[190px]
                lg:px-10
                lg:py-5
                lg:text-lg

                hover:bg-blue-700
                hover:shadow-[0_18px_40px_rgba(37,99,235,0.38)]
              "
            >
              View Paper

              <ArrowUpRight
                size={18}
                weight="bold"
                className="
                  transition-transform
                  duration-300

                  sm:size-[20px]

                  md:size-[21px]

                  lg:size-[23px]

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
              max-w-[285px]
              min-w-0

              sm:max-w-[320px]

              md:max-w-[370px]

              lg:max-w-[430px]
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
                inset-6
                -z-10
                rounded-[30px]
                bg-blue-200/40
                blur-[45px]

                md:inset-7
                md:rounded-[35px]
                md:blur-[50px]

                lg:inset-8
                lg:rounded-[40px]
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
                border
                border-slate-200
                bg-white

                p-3

                sm:rounded-[11px]
                sm:p-4

                md:rounded-[12px]
                md:p-5

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

                  w-full
                  min-w-0
                  overflow-hidden

                  border
                  border-slate-200
                  bg-slate-100

                  sm:h-[380px]

                  md:h-[440px]

                  lg:h-[500px]
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

                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/80
                    bg-white/95

                    px-4
                    py-2.5

                    text-xs
                    font-semibold
                    text-blue-600

                    opacity-0
                    shadow-[0_12px_35px_rgba(15,23,42,0.20)]
                    backdrop-blur-md

                    transition-all
                    duration-300

                    sm:gap-2.5
                    sm:px-5
                    sm:py-3
                    sm:text-sm

                    md:px-6
                    md:py-3.5
                    md:text-sm

                    lg:gap-3
                    lg:px-6
                    lg:py-3.5
                    lg:text-base

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
                    className="sm:size-[18px] lg:size-[20px]"
                  />
                </a>
              </div>

              {/* BOTTOM INFORMATION */}

              <div
                className="
                  w-full
                  min-w-0

                  px-1
                  pb-1
                  pt-3

                  sm:px-1.5
                  sm:pb-1.5
                  sm:pt-4

                  md:px-2
                  md:pb-2
                  md:pt-5
                "
              >
                <p
                  className="
                    break-words
                    text-xs
                    font-bold
                    leading-5
                    text-slate-900

                    sm:text-sm
                    sm:leading-5

                    md:text-base
                    md:leading-6
                  "
                >
                  View full paper
                </p>

                <p
                  className="
                    mt-1
                    max-w-full
                    break-words
                    text-[11px]
                    leading-5
                    text-slate-500

                    sm:text-xs

                    md:text-sm
                    md:leading-6
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
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-3

          sm:bottom-6
          sm:gap-3.5

          md:bottom-7
          md:gap-4

          lg:bottom-8
        "
      >
        <div
          className="
            h-2
            w-2
            rounded-full
            bg-slate-300

            sm:h-2.5
            sm:w-2.5
          "
        />

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-slate-300

            sm:h-2.5
            sm:w-2.5
          "
        />

        <motion.div
          layout
          className="
            h-2
            w-8
            rounded-full
            bg-blue-600
            shadow-[0_0_12px_rgba(37,99,235,0.45)]

            sm:h-2.5
            sm:w-9

            md:w-10

            lg:w-11
          "
        />
      </motion.div>
    </motion.section>
  );
}

export default ResearchPaperThree;