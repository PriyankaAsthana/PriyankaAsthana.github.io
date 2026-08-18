import { motion, useScroll, useSpring } from "framer-motion";

import {
  MapPin,
  Buildings,
  CalendarBlank,
  Clock,
  ChartLineUp,
  Pulse,
  ShareNetwork,
  Gauge,
  ChartPieSlice,
  ArrowUpRight,
  Brain,
} from "@phosphor-icons/react";

import { useRef } from "react";

import questLogo from "../../assets/logos/quest.jpg";
import armyLogo from "../../assets/logos/army.webp";
import bhuLogo from "../../assets/logos/bhu_logo.webp";
import bsercLogo from "../../assets/logos/BSERC_logo.webp";
import hindalcoLogo from "../../assets/logos/hindalco_logo.jpg";
import edunetLogo from "../../assets/logos/OIP_logo.webp";


/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [

  /* =========================================================
     QUEST GLOBAL
  ========================================================= */

  {
    id: "01",

    company: "Quest Global",

    role: "Data Analyst",

    date: "Dec 2026",

    duration: "Incoming | Full Time",

    logo: questLogo,

    description:
      "Selected for a production SAP data migration project: profiling and cleansing large technical asset datasets from source APM systems to maintain data quality and integrity during source-to-target mapping. Applying rule-based and NLP techniques to standardize unstructured free-text fields into structured picklist values, and building reconciliation dashboards using SQL, Python (Pandas, NumPy), and BI tools including Tableau, Power BI, and Spotfire.",

    metrics: [
      {
        icon: ChartLineUp,
        value: "SAP",
        label: "Data Migration",
      },

      {
        icon: Brain,
        value: "NLP",
        label: "Text Standardization",
      },
    ],
  },
  {
    id: "02",

    company: "Indian Army - DGIS",

    role: "AI/ML Intern",

    date: "Aug 2026 – Oct 2026",

    duration: "3 mos",

    logo: armyLogo,

    description:
      "Building an AI-based decision-support model for real-time operational data analysis, translating requirements from domain stakeholders into a working ML pipeline. Applying statistical and ML-based analysis techniques to identify patterns supporting prioritization and resource-allocation decisions.",

    metrics: [
      {
        icon: Brain,
        value: "AI/ML",
        label: "Decision Support",
      },

      {
        icon: ChartLineUp,
        value: "Real-Time",
        label: "Data Analysis",
      },
    ],
  },

  /* =========================================================
     IIT BHU
  ========================================================= */

  {
    id: "03",

    company:
      "Indian Institute of Technology (Banaras Hindu University), Varanasi",

    role: "NLP Engineer Intern",

    date: "Feb 2026 – Jul 2026",

    duration: "6 mos",

    location: "Varanasi, Uttar Pradesh, India",

    mode: "On-site",

    logo: bhuLogo,

    description:
      "Engineered NLP-driven test automation across 1,000+ text inputs, identifying and resolving 20+ parsing failures in real-time systems.",

    metrics: [
      {
        icon: ChartLineUp,
        value: "1K+",
        label: "Text Inputs",
      },

      {
        icon: Pulse,
        value: "+25%",
        label: "Reliability Improvement",
      },
    ],
  },


  /* =========================================================
     B.S.E.R.C
  ========================================================= */

  {
    id: "04",

    company:
      "Bharat Space Education Research Centre (B.S.E.R.C)",

    role: "Def-Space AI Research Intern",

    date: "Dec 2025 – Feb 2026",

    duration: "3 mos",

    location: "Delhi, India",

    mode: "Hybrid",

    logo: bsercLogo,

    description:
      "Applied ML-based sensor fusion across five experimental UAS modules in simulated space-mission environments, contributing to trajectory prediction and subsystem optimization.",

    metrics: [
      {
        icon: ShareNetwork,
        value: "5",
        label: "UAS Modules",
      },

      {
        icon: Gauge,
        value: "20%",
        label: "Latency Reduction",
      },
    ],
  },


  /* =========================================================
     HINDALCO
  ========================================================= */

  {
    id: "05",

    company: "Hindalco Industries Limited",

    role: "Business Analyst Intern",

    date: "Jul 2025",

    duration: "1 mo",

    location: "Renukut, Uttar Pradesh, India",

    mode: "On-site",

    logo: hindalcoLogo,

    description:
      "Translated enterprise requirements into ERP data pipelines and analytical dashboards while conducting system-level gap analysis across business workflows.",

    metrics: [
      {
        icon: ChartPieSlice,
        value: "10%",
        label: "Query Improvement",
      },

      {
        icon: ArrowUpRight,
        value: "25%",
        label: "Less Manual Processing",
      },
    ],
  },


  /* =========================================================
     EDUNET
  ========================================================= */

  {
    id: "06",

    company: "Edunet Foundation",

    role: "AI Intern",

    date: "Feb 2025 – May 2025",

    duration: "4 mos",

    location: "India",

    mode: "Remote",

    logo: edunetLogo,

    description:
      "Built and evaluated supervised and unsupervised ML workflows spanning classification, regression, clustering and model evaluation.",

    metrics: [
      {
        icon: Brain,
        value: "ML",
        label: "Model Development",
      },

      {
        icon: ChartPieSlice,
        value: "4",
        label: "Core AI Areas",
      },
    ],
  },
];


/* =========================================================
   METRIC BOX
========================================================= */

function MetricBox({ metric, index }) {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 6,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.3,
        delay: 0.06 + index * 0.04,
      }}

      whileHover={{
        scale: 1.015,
      }}

      className="
        flex
        h-[46px]
        min-w-0
        flex-1
        items-center
        gap-2

        rounded-[10px]

        border
        border-blue-100

        bg-blue-50/40

        px-2.5
        py-1.5

        transition-shadow

        hover:shadow-[0_6px_18px_rgba(37,99,235,0.10)]
      "
    >

      <div
        className="
          flex
          h-7
          w-7
          shrink-0

          items-center
          justify-center

          text-blue-600
        "
      >
        <Icon
          size={18}
          weight="regular"
        />
      </div>


      <div className="min-w-0">

        <p
          className="
            text-[16px]
            font-bold
            leading-none
            text-blue-600
          "
        >
          {metric.value}
        </p>


        <p
          className="
            mt-[2px]
            text-[9px]
            font-medium
            leading-tight
            text-slate-600
          "
        >
          {metric.label}
        </p>

      </div>

    </motion.div>
  );
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  experience,
  side,
}) {

  const isLeft = side === "left";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: isLeft ? -35 : 35,
        scale: 0.97,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        scale: 1.012,
      }}

      className="
        group
        relative
        z-10
        mx-auto
        
        w-full
       
        max-w-[470px]

        overflow-hidden

        rounded-[16px]

        border
        border-blue-100

        bg-white/95

        p-4

        shadow-[0_15px_40px_rgba(15,23,42,0.07)]

        backdrop-blur-xl

        transition-shadow
        duration-300

        hover:z-30
        hover:shadow-[0_20px_50px_rgba(37,99,235,0.13)]

        /* MOBILE ONLY */

        sm:max-w-[500px]
        sm:p-4
      "
    >

      {/* ==========================================
          HOVER GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -right-16
          -top-16

          h-32
          w-32

          rounded-full

          bg-blue-400/0

          blur-3xl

          transition-all
          duration-500

          group-hover:bg-blue-400/10
        "
      />


      {/* ==========================================
          CARD CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10

          flex
          h-full
          gap-4
        "
      >

        {/* ==========================================
            LOGO
        ========================================== */}

        <motion.div
          whileHover={{
            scale: 1.04,
            rotate: -2,
          }}

          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}

          className="
            flex

            h-[64px]
            w-[64px]

            shrink-0

            items-center
            justify-center

            overflow-hidden

            rounded-xl

            border
            border-blue-100

            bg-gradient-to-br
            from-blue-50
            to-slate-50

            p-2

            shadow-sm
          "
        >

          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="
              h-full
              w-full
              object-contain
            "
          />

        </motion.div>


        {/* ==========================================
            RIGHT CONTENT
        ========================================== */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
          "
        >

          {/* ID */}

          <span
            className="
              mb-1

              inline-flex
              w-fit

              rounded-full

              bg-blue-600

              px-2.5
              py-[2px]

              text-[10px]

              font-bold

              tracking-wider

              text-white
            "
          >
            {experience.id}
          </span>


          {/* COMPANY */}

          <h3
            className="
              max-w-[380px]

              text-[17px]

              font-bold

              leading-[1.1]

              tracking-[-0.02em]

              text-slate-950
            "
          >
            {experience.company}
          </h3>


          {/* ROLE */}

          <p
            className="
              mt-1

              text-[14px]

              font-semibold

              leading-tight

              text-blue-600
            "
          >
            {experience.role}
          </p>


          {/* DATE */}

          <div
            className="
              mt-2

              flex
              flex-wrap

              items-center

              gap-x-2.5
              gap-y-1

              text-[11.5px]

              text-slate-600
            "
          >

            <span
              className="
                flex
                items-center
                gap-1
              "
            >
              <CalendarBlank size={14} />

              {experience.date}
            </span>


            <span
              className="
                h-1
                w-1
                rounded-full
                bg-slate-400
              "
            />


            <span
              className="
                flex
                items-center
                gap-1
              "
            >
              <Clock size={14} />

              {experience.duration}
            </span>

          </div>


          {/* LOCATION */}

          {(experience.location ||
            experience.mode) && (

            <div
              className="
                mt-1

                flex
                flex-wrap

                items-center

                gap-x-2.5
                gap-y-1

                text-[11.5px]

                text-slate-600
              "
            >

              {experience.location && (

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <MapPin size={14} />

                  {experience.location}
                </span>

              )}


              {experience.location &&
                experience.mode && (

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-slate-400
                    "
                  />

                )}


              {experience.mode && (

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Buildings size={14} />

                  {experience.mode}
                </span>

              )}

            </div>

          )}


          {/* DIVIDER */}

          <div
            className="
              my-2

              h-px
              w-full

              bg-gradient-to-r
              from-blue-100
              via-slate-200
              to-transparent
            "
          />


          {/* DESCRIPTION */}

          <p
            className="
              text-[12.5px]

              leading-[1.45]

              text-slate-700
            "
          >
            {experience.description}
          </p>


          {/* METRICS */}

          <div
            className="
              mt-auto
              pt-3
            "
          >

            <div
              className="
                flex
                gap-2.5
              "
            >

              {experience.metrics.map(
                (metric, index) => (

                  <MetricBox
                    key={metric.label}
                    metric={metric}
                    index={index}
                  />

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </motion.article>
  );
}


/* =========================================================
   TIMELINE NODE
   DESKTOP ONLY — UNCHANGED
========================================================= */

function TimelineNode({ index }) {

  return (
    <div
      className="
        absolute

        left-1/2
        top-[42px]

        z-30

        hidden

        -translate-x-1/2

        lg:block
      "
    >

      {/* PULSE */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.35, 0.06, 0.35],
        }}

        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: index * 0.2,
        }}

        className="
          absolute
          -inset-3

          rounded-full

          border
          border-blue-400

          bg-blue-400/10
        "
      />


      {/* GLOW */}

      <div
        className="
          absolute
          -inset-4

          rounded-full

          bg-blue-500/15

          blur-xl
        "
      />


      {/* NODE */}

      <motion.div
        initial={{
          scale: 0,
        }}

        whileInView={{
          scale: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          type: "spring",
          stiffness: 260,
          damping: 16,
        }}

        whileHover={{
          scale: 1.15,
        }}

        className="
          relative

          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          border-[3px]
          border-blue-300

          bg-blue-600

          shadow-[0_0_20px_rgba(37,99,235,0.55)]
        "
      >

        <div
          className="
            h-2.5
            w-2.5

            rounded-full

            bg-white
          "
        />

      </motion.div>

    </div>
  );
}


/* =========================================================
   DESKTOP CONNECTOR
   UNCHANGED
========================================================= */

function Connector({ side }) {

  return (
    <motion.div
      initial={{
        scaleX: 0,
        opacity: 0,
      }}

      whileInView={{
        scaleX: 1,
        opacity: 1,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.45,
        delay: 0.15,
      }}

      className={`
        absolute

        top-[57px]

        hidden

        h-px
        w-[55px]

        border-t-2
        border-dotted
        border-blue-300

        lg:block

        ${
          side === "left"
            ? "left-[calc(50%+16px)] origin-left"
            : "right-[calc(50%+16px)] origin-right"
        }
      `}
    />
  );
}


/* =========================================================
   MAIN EXPERIENCE TIMELINE
========================================================= */

export default function ExperienceTimeline() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.78", "end 0.72"],
  });

  const lineProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 90,
      damping: 22,
      mass: 0.3,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"

      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50/50

        /* MOBILE */

        px-4
        pt-10
        pb-14

        /* TABLET */

        sm:px-6
        sm:pt-12
        sm:pb-16

        md:px-10
        md:pt-14
        md:pb-20

        /* DESKTOP — KEEPING ORIGINAL */

        lg:px-16
        lg:pt-8
        lg:pb-8

        xl:px-20
      "
    >

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[15%]

          h-[520px]
          w-[520px]

          -translate-x-1/2

          rounded-full

          bg-blue-300/10

          blur-[110px]
        "
      />


      <div
        className="
          pointer-events-none

          absolute

          -right-48
          -top-48

          h-[420px]
          w-[420px]

          rounded-full

          border
          border-blue-200/50
        "
      />


      <div
        className="
          pointer-events-none

          absolute

          -bottom-60
          -left-48

          h-[430px]
          w-[430px]

          rounded-full

          border
          border-blue-200/50
        "
      />


      {/* ===================================================
          DOT MATRIX
      =================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-[6%]
          top-[16%]

          hidden

          grid-cols-5

          gap-[7px]

          opacity-40

          xl:grid
        "
      >

        {Array.from({
          length: 25,
        }).map((_, i) => (

          <motion.span
            key={i}

            animate={{
              opacity: [
                0.15,
                0.7,
                0.15,
              ],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.05,
            }}

            className="
              h-[2px]
              w-[2px]

              rounded-full

              bg-blue-500
            "
          />

        ))}

      </div>


      {/* ===================================================
          HEADING
      =================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          max-w-[1120px]

          /* MOBILE */

          mb-7

          /* DESKTOP ORIGINAL */

          lg:mb-0

          lg:translate-x-[90px]

          xl:translate-x-[120px]
        "
      >

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.5,
            delay: 0.05,
          }}

          className="
            flex
            w-full

            items-center
            justify-center

            gap-[8px]

            translate-x-0

            font-serif

            text-[2.45rem]

            font-bold

            leading-none

            tracking-[-0.045em]

            text-slate-950

            sm:text-5xl
            md:text-5xl

            lg:translate-x-[100px]
          "
        >

          <span>
            Experience
          </span>

          <span className="text-blue-600">
            Timeline
          </span>

        </motion.h2>

      </div>


      {/* ===================================================
          TIMELINE
      =================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          /* GAP: Experience Timeline heading → first card */

          mt-20

          sm:mt-24

          md:mt-28

          w-full

          max-w-[1120px]

          px-2

          pb-16

          /* EXTRA HEIGHT FOR MOBILE/TABLET */

          min-h-[1000px]

          /* DESKTOP — COMPLETELY UNCHANGED */

          lg:mt-5

          lg:min-h-0

          lg:px-0

          lg:pb-3

          lg:translate-x-[300px]

          xl:translate-x-[200px]
        "
      >

        {/* =================================================
            STATIC CENTER LINE — DESKTOP ONLY
        ================================================= */}

        <div
          className="
            absolute

            bottom-0
            left-1/2
            top-0

            hidden

            w-[2px]

            -translate-x-1/2

            bg-blue-100

            lg:block
          "
        />


        {/* =================================================
            SCROLL PROGRESS LINE — DESKTOP ONLY
        ================================================= */}

        <motion.div
          style={{
            scaleY: lineProgress,
          }}

          className="
            absolute

            bottom-0
            left-1/2
            top-0

            hidden

            w-[3px]

            -translate-x-1/2

            origin-top

            bg-gradient-to-b
            from-blue-600
            via-blue-400
            to-blue-200

            shadow-[0_0_14px_rgba(37,99,235,0.45)]

            lg:block
          "
        />


        {/* =================================================
            EXPERIENCE ROWS
        ================================================= */}

        <div
          className="
            /* MOBILE / TABLET */

            flex
            flex-col

            gap-14

            px-0

            /* DESKTOP — UNCHANGED */

            lg:space-y-3
            lg:gap-0
            lg:px-0
          "
        >

          {experiences.map(
            (experience, index) => {

              const side =
                index % 2 === 0
                  ? "left"
                  : "right";

              return (

                <div
                  key={experience.id}

                  className="
                    relative

                    /* MOBILE / TABLET */

                    flex
                    w-full
                    justify-center

                    /* DESKTOP — ORIGINAL STRUCTURE */

                    lg:grid
                    lg:grid-cols-[1fr_76px_1fr]
                    lg:items-start
                  "
                >

                  {/* =========================================
                      MOBILE CONNECTOR AREA
                  ========================================= */}

                  {index <
                    experiences.length - 1 && (

                    <motion.div
                      initial={{
                        scaleY: 0,
                        opacity: 0,
                      }}

                      whileInView={{
                        scaleY: 1,
                        opacity: 1,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}

                      transition={{
                        duration: 0.6,
                        delay: 0.15,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}

                      className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-full

                        z-20

                        h-14
                        w-[2px]

                        -translate-x-1/2

                        origin-top

                        bg-gradient-to-b
                        from-blue-600
                        via-blue-400
                        to-blue-200

                        shadow-[0_0_12px_rgba(37,99,235,0.45)]

                        lg:hidden
                      "
                    />

                  )}


                  {/* =========================================
                      MOBILE TIMELINE NODE
                  ========================================= */}

                  {index <
                    experiences.length - 1 && (

                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}

                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}

                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 16,
                        delay: 0.2,
                      }}

                      className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-full

                        z-30

                        mt-[22px]

                        flex

                        h-8
                        w-8

                        -translate-x-1/2

                        items-center
                        justify-center

                        rounded-full

                        border-[3px]
                        border-blue-300

                        bg-blue-600

                        shadow-[0_0_20px_rgba(37,99,235,0.55)]

                        lg:hidden
                      "
                    >

                      <div
                        className="
                          h-2.5
                          w-2.5

                          rounded-full

                          bg-white
                        "
                      />

                    </motion.div>

                  )}


                  {/* =========================================
                      LEFT CARD
                  ========================================= */}

                  {side === "left" ? (

                    <div
                      className="
                         mx-auto
    flex
    w-full
    max-w-full
    justify-center

    lg:mx-0
    lg:justify-end
    lg:pr-6
                      "
                    >

                      <div
                        className="
                          /* MOBILE / TABLET */

                          w-full
                          max-w-[500px]

                          /* DESKTOP — ORIGINAL */

                          lg:max-w-[440px]
                        "
                      >

                        <ExperienceCard
                          experience={experience}
                          side="left"
                        />

                      </div>

                    </div>

                  ) : (

                    <div className="hidden lg:block" />

                  )}


                  {/* =========================================
                      CENTER — DESKTOP ONLY
                  ========================================= */}

                  <div
                    className="
                      relative

                      hidden

                      h-full

                      lg:block
                    "
                  >

                    <TimelineNode
                      index={index}
                    />

                  </div>


                  {/* =========================================
                      RIGHT CARD
                  ========================================= */}

                  {side === "right" ? (

                    <div
                      className="
                        mx-auto
    flex
    w-full
    max-w-full
    justify-center

    lg:mx-0
    lg:justify-start
    lg:pl-6
                      "
                    >

                      <div
                        className="
                          /* MOBILE / TABLET */

                          w-full
                          max-w-[500px]

                          /* DESKTOP — ORIGINAL */

                          lg:max-w-[440px]
                        "
                      >

                        <ExperienceCard
                          experience={experience}
                          side="right"
                        />

                      </div>

                    </div>

                  ) : (

                    <div className="hidden lg:block" />

                  )}


                  {/* =========================================
                      DESKTOP CONNECTOR — ORIGINAL
                  ========================================= */}

                  <Connector
                    side={side}
                  />

                </div>

              );
            }
          )}

        </div>


        {/* =================================================
            END NODE — DESKTOP ONLY
        ================================================= */}

        <motion.div
          initial={{
            scale: 0,
          }}

          whileInView={{
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            type: "spring",
            stiffness: 240,
          }}

          className="
            absolute

            -bottom-1
            left-1/2

            hidden

            h-4
            w-4

            -translate-x-1/2

            rounded-full

            border-[4px]
            border-blue-300

            bg-white

            shadow-[0_0_16px_rgba(37,99,235,0.4)]

            lg:block
          "
        />

      </div>

    </section>
  );
}