import { motion } from "framer-motion";

const topics = [
  "Natural Language Processing",
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Semantic Learning",
  "Healthcare AI",
  "GeoAI",
];

const papers = [
  {
    number: "01",
    title:
      "Contextual Embedding Bias Predicts LLM Near-Synonym Confusion Where Isolated Geometry Fails",
  },
  {
    number: "02",
    title:
      "Embedding Model Selection for Domain-Specific Retrieval-Augmented Generation: A Comparative Study on Indian Cultural Heritage Corpora",
  },
  {
    number: "03",
    title:
      "A Spatial–Temporal GeoAI Framework for Emergency Blood Allocation with Time-Bound Reservation",
  },
];

function Overview() {
  return (
    <div className="relative z-10 bg-transparent">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-20

          px-8
          pt-14
          pb-28

          md:px-14

          lg:grid-cols-[1.3fr_0.7fr]
          lg:px-[90px]

          xl:px-[110px]

          2xl:px-[125px]
        "
      >
        {/* ============================= */}
        {/* LEFT SIDE */}
        {/* ============================= */}

        <div className="flex justify-center lg:translate-x-16">
          <div className="w-full max-w-[760px]">

            {/* RESEARCH BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="mb-8"
            >
              <div
                className="
                  inline-flex
                  rounded-full
                  bg-blue-100
                  px-5
                  py-2
                  shadow-sm
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-blue-700
                  "
                >
                  Research
                </span>
              </div>
            </motion.div>

            {/* MAIN TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.045em]
                
                text-slate-950

                lg:text-7xl
                xl:text-[5.6rem]
              "
            >
              Research that
              <br />
              solves
              <br />
              real problems.
            </motion.h2>

            {/* ============================= */}
            {/* SELECTED PAPERS */}
            {/* ============================= */}

            <div className="mt-20">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                }}
                className="
                  mb-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-slate-400
                "
              >
                Selected Papers
              </motion.p>

              <div className="pt-12 space-y-5">
                {papers.map((paper, index) => (
                  <motion.div
                    key={paper.number}
                    initial={{
                      opacity: 0,
                      x: -35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.12,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.01,
                    }}
                    className="
                      group

                      flex
                      min-h-[84px]
                      w-full
                      items-center

                      rounded-2xl

                      border
                      border-slate-200/70

                      bg-white/75

                      px-7
                      py-4

                      shadow-sm

                      backdrop-blur-md

                      transition-all
                      duration-300

                      hover:border-blue-200
                      hover:bg-white/95
                      hover:shadow-xl
                      hover:shadow-blue-100/50
                    "
                  >
                    {/* NUMBER */}

                    <div
                      className="
                        flex
                        w-[62px]
                        shrink-0
                        items-center
                      "
                    >
                      <span
                        className="
                          text-xl
                          font-bold
                          tracking-[0.08em]
                          text-blue-600
                        "
                      >
                        {paper.number}
                      </span>
                    </div>

                    {/* DIVIDER */}

                    <div
                      className="
                        mr-7
                        h-10
                        w-px
                        shrink-0
                        bg-slate-300

                        transition-colors

                        group-hover:bg-blue-300
                      "
                    />

                    {/* PAPER TITLE */}

                    <p
                      className="
                        pr-4

                        text-lg
                        font-semibold
                        leading-7

                        text-slate-800

                        transition-colors
                        duration-300

                        group-hover:text-blue-700

                        lg:text-xl
                      "
                    >
                      {paper.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* RIGHT SIDE */}
        {/* ============================= */}

        <div className="relative lg:ml-6 lg:-mt-8">

          {/* TITLE */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mb-7
              text-3xl
              font-bold
              tracking-tight
              text-slate-950
            "
          >
            Research Areas
          </motion.h3>

          {/* ============================= */}
          {/* RESEARCH AREAS */}
          {/* ============================= */}

          <div className="w-full max-w-[380px] space-y-4">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.3 + index * 0.09,
                }}
                whileHover={{
                  x: 7,
                  scale: 1.015,
                }}
                className="
                  group

                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  border
                  border-slate-200

                  bg-white/80

                  px-5
                  py-4

                  shadow-sm

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:border-blue-400
                  hover:bg-white
                  hover:shadow-xl
                  hover:shadow-blue-100/40
                "
              >
                {/* BLUE NODE */}

                <div
                  className="
                    relative
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      absolute
                      h-5
                      w-5
                      rounded-full
                      bg-blue-400/20
                      blur-[4px]
                    "
                  />

                  <div
                    className="
                      relative
                      h-3
                      w-3
                      rounded-full
                      bg-blue-600
                      shadow-[0_0_12px_rgba(37,99,235,0.75)]
                    "
                  />
                </div>

                <span
                  className="
                    text-lg
                    font-semibold
                    text-slate-800

                    transition-colors

                    group-hover:text-blue-700
                  "
                >
                  {topic}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ============================= */}
          {/* STATS */}
          {/* ============================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.85,
              duration: 0.5,
            }}
            className="
              mt-14
              flex
              items-start
              gap-9
            "
          >
            {/* PUBLICATIONS */}

            <div>
              <p className="text-3xl font-bold text-blue-600">
                3
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Publications
              </p>
            </div>

            <div className="h-14 w-px bg-slate-200" />

            {/* PATENT */}

            <div>
              <p className="text-3xl font-bold text-blue-600">
                1
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Patent
              </p>
            </div>

            <div className="h-14 w-px bg-slate-200" />

            {/* UNDER REVIEW */}

            <div>
              <p className="text-3xl font-bold text-blue-600">
                1
              </p>

              <p
                className="
                  mt-1
                  whitespace-nowrap
                  text-sm
                  text-slate-500
                "
              >
                Under Review
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Overview;