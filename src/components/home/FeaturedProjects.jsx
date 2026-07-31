import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  GithubLogo,
  TrendUp,
} from "@phosphor-icons/react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    number: "01",
    name: "KASHIVANI",
    short: "RAG • NLP",

    title:
      "Domain-Specific RAG Pipeline for Cultural Heritage",

    date: "Sep 2025 – Mar 2026",

    tags: [
      "RAG",
      "FAISS",
      "RAGAS",
      "Embeddings",
      "LLM",
    ],

    description:
      "Designed and built an end-to-end RAG pipeline for Varanasi cultural heritage knowledge, covering ingestion, chunking, embedding, FAISS-based retrieval, and LLM-powered generation.",

    impact: "40% reduction in hallucinations",

    live: "https://kashivani.onrender.com/",

    github:
      "https://github.com/PriyankaAsthana/KashiVani_RAG",
  },

  {
    id: 2,
    number: "02",
    name: "DIAGNOSEAI",
    short: "MULTI-AGENT • HEALTHCARE",

    title:
      "Multi-Agent Medical Symptom Assessment System",

    date: "Apr 2025 – Sep 2025",

    tags: [
      "LLM Agents",
      "LangChain",
      "NLP",
      "Healthcare AI",
      "Voice AI",
    ],

    description:
      "Architected a voice-first multi-agent medical system with NLP-based symptom routing, specialist LLM agents, structured handoffs, context management, and automated clinical report generation.",

    impact:
      "92% disease detection accuracy across 500 simulated scenarios",

    live:
      "https://diagnoseai-ai-medical-system.onrender.com/",

    github:
      "https://github.com/PriyankaAsthana/DiagnoseAI---AI-MEDICAL-DIAGNOSIS-SYSTEM-",
  },

  {
    id: 3,
    number: "03",
    name: "RAKT",
    short: "GEOAI • OPTIMIZATION",

    title:
      "Tokenized GeoAI Emergency Blood Allocation Framework",

    date: "Dec 2024 – May 2025",

    tags: [
      "GeoAI",
      "K-Means",
      "Haversine",
      "Optimization",
      "Emergency Systems",
    ],

    description:
      "Engineered a spatial-temporal emergency allocation system using GPS clustering, haversine distance, real e-Raktkosh inventory data, and time-bound token reservation to prevent concurrent allocation conflicts.",

    impact:
      "100% high-priority allocation • 6.6% distance reduction",

    live: null,

    github:
      "https://github.com/PriyankaAsthana/RAKT_Blood_Bank_Management",
  },
];

/* =========================================================
   SVG DISC GEOMETRY

   This is the important fix.

   We are NOT using CSS clip-path triangles anymore.

   Each sector is an actual SVG pie sector with:
   - curved outer edge
   - straight radial boundaries
   - exact 120 degree division
========================================================= */

const CX = 300;
const CY = 300;
const R = 285;

function polarToCartesian(cx, cy, radius, angle) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
}

function createSectorPath(startAngle, endAngle) {
  const start = polarToCartesian(
    CX,
    CY,
    R,
    startAngle
  );

  const end = polarToCartesian(
    CX,
    CY,
    R,
    endAngle
  );

  const largeArcFlag =
    endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${CX} ${CY}`,
    `L ${start.x} ${start.y}`,
    `A ${R} ${R} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

/*
   Sector positions:

            KASHIVANI
               01

        RAKT        DIAGNOSEAI
         03             02
*/

const sectors = [
  {
    projectIndex: 0,

    // top sector
    start: -60,
    end: 60,

    textX: 300,
    textY: 165,
  },

  {
    projectIndex: 1,

    // bottom-right
    start: 60,
    end: 180,

    textX: 425,
    textY: 390,
  },

  {
    projectIndex: 2,

    // bottom-left
    start: 180,
    end: 300,

    textX: 175,
    textY: 390,
  },
];

/* =========================================================
   PROJECT DISC
========================================================= */

function ProjectDisc({
  activeProject,
  setActiveProject,
}) {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* =================================================
          OUTER AMBIENT GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-100/30
          blur-[55px]
        "
      />

      {/* =================================================
          OUTER ORBIT 1
      ================================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[690px]
          w-[690px]
          rounded-full
          border
          border-blue-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-7px]
            h-[14px]
            w-[14px]
            -translate-x-1/2
            rounded-full
            bg-blue-600
            shadow-[0_0_18px_rgba(37,99,235,0.65)]
          "
        />

        <div
          className="
            absolute
            bottom-[70px]
            left-[75px]
            h-[10px]
            w-[10px]
            rounded-full
            bg-blue-500
          "
        />
      </motion.div>

      {/* =================================================
          OUTER ORBIT 2
      ================================================= */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[730px]
          w-[730px]
          rounded-full
          border
          border-dashed
          border-blue-100/80
        "
      >
        <div
          className="
            absolute
            right-[55px]
            top-[125px]
            h-[7px]
            w-[7px]
            rounded-full
            bg-blue-400
          "
        />

        <div
          className="
            absolute
            bottom-[100px]
            right-[20px]
            h-[6px]
            w-[6px]
            rounded-full
            bg-blue-300
          "
        />
      </motion.div>

      {/* =================================================
          MAIN DISC
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          h-[590px]
          w-[590px]
          overflow-visible
          rounded-full
          shadow-[0_30px_80px_rgba(37,99,235,0.13)]
        "
      >
        <svg
          viewBox="0 0 600 600"
          className="
            absolute
            inset-0
            h-full
            w-full
            overflow-visible
          "
        >
          <defs>
            <filter
              id="activeGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feDropShadow
                dx="0"
                dy="12"
                stdDeviation="15"
                floodColor="#2563eb"
                floodOpacity="0.22"
              />
            </filter>

            <linearGradient
              id="activeGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#3478f6"
              />

              <stop
                offset="100%"
                stopColor="#1d5df0"
              />
            </linearGradient>
          </defs>

          {/* base circle */}

          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="#ffffff"
            stroke="#dbeafe"
            strokeWidth="2"
          />

          {/* =============================================
              REAL CIRCULAR SECTORS
          ============================================= */}

          {sectors.map((sector) => {
            const project =
              projects[sector.projectIndex];

            const isActive =
              activeProject === sector.projectIndex;

            return (
              <motion.path
                key={project.id}
                d={createSectorPath(
                  sector.start,
                  sector.end
                )}
                initial={false}
                animate={{
                  fill: isActive
                    ? "url(#activeGradient)"
                    : "#ffffff",

                  scale: isActive ? 1.025 : 1,
                }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: `${CX}px ${CY}px`,
                  cursor: "pointer",
                }}
                stroke={
                  isActive
                    ? "#2563eb"
                    : "#dbeafe"
                }
                strokeWidth="2"
                filter={
                  isActive
                    ? "url(#activeGlow)"
                    : undefined
                }
                onMouseEnter={() =>
                  setActiveProject(
                    sector.projectIndex
                  )
                }
              />
            );
          })}

          {/* =============================================
              SECTOR TEXT
          ============================================= */}

          {sectors.map((sector) => {
            const project =
              projects[sector.projectIndex];

            const isActive =
              activeProject === sector.projectIndex;

            return (
              <g
                key={`text-${project.id}`}
                pointerEvents="none"
              >
                <motion.text
                  x={sector.textX}
                  y={sector.textY - 36}
                  textAnchor="middle"
                  initial={false}
                  animate={{
                    fill: isActive
                      ? "#ffffff"
                      : "#2563eb",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  fontSize="21"
                  fontWeight="800"
                >
                  {project.number}
                </motion.text>

                <motion.text
                  x={sector.textX}
                  y={sector.textY}
                  textAnchor="middle"
                  initial={false}
                  animate={{
                    fill: isActive
                      ? "#ffffff"
                      : "#0f172a",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  fontSize="24"
                  fontWeight="800"
                >
                  {project.name}
                </motion.text>

                <motion.text
                  x={sector.textX}
                  y={sector.textY + 31}
                  textAnchor="middle"
                  initial={false}
                  animate={{
                    fill: isActive
                      ? "#dbeafe"
                      : "#64748b",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  fontSize="10"
                  fontWeight="700"
                  letterSpacing="2"
                >
                  {project.short}
                </motion.text>
              </g>
            );
          })}

          {/* center button */}

          <circle
            cx={CX}
            cy={CY}
            r="35"
            fill="#2563eb"
          />

          <circle
            cx={CX}
            cy={CY}
            r="10"
            fill="#ffffff"
          />
        </svg>
      </motion.div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}

        initial={{
          opacity: 0,
          x: 35,
          scale: 0.97,
        }}

        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          x: 20,
          scale: 0.98,
        }}

        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
           relative
  flex
  min-h-0
  w-full
  max-w-[430px]
  flex-col
  overflow-hidden

  rounded-[18px]

  border
  border-blue-100
  bg-white

  px-7
  pt-7
  pb-7

  shadow-[0_18px_50px_rgba(15,23,42,0.10)]
        "
      >
        {/* subtle top glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-[250px]
            w-[250px]
            rounded-full
            bg-blue-100/45
            blur-[70px]
          "
        />

        {/* =================================================
            NUMBER
        ================================================= */}

        <div className="relative z-10">
          <span
            className="
              inline-flex
              min-w-[46px]
              items-center
              justify-center
              rounded-full
              bg-blue-600
              px-3
              py-1.5
              text-xs
              font-bold
              tracking-[0.12em]
              text-white
            "
          >
            {project.number}
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="relative z-10 mt-5">
          <h3
            className="
              font-serif
              text-[2rem]
              font-black
              leading-[0.95]
              tracking-tight
              text-slate-950
            "
          >
            {project.name}

            <ArrowUpRight
              size={22}
              weight="bold"
              className="
                ml-2
                inline
                text-blue-600
              "
            />
          </h3>

          <p
            className="
              mt-2
              max-w-[360px]
              text-[15px]
              font-semibold
              leading-1.3
              text-blue-600
            "
          >
            {project.title}
          </p>
        </div>

        {/* =================================================
            DATE
        ================================================= */}

        <span
  className="
    mt-1
    inline-flex
    rounded-full
    bg-blue-50
    px-3
    py-1
    text-[13px]
    font-semibold
    text-blue-600
  "
>
  {project.date}
</span>

        {/* =================================================
            TAGS
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-4
            flex
            flex-wrap
            gap-2
          "
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1.5
                text-[13px]
                font-semibold
                text-blue-600
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-4
            text-[15px]
            leading-6
            text-slate-600
          "
        >
          {project.description}
        </p>

        {/* =================================================
            IMPACT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-6
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-blue-100
            bg-blue-50/50
            px-4
            py-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-white
              text-blue-600
              shadow-sm
            "
          >
            <TrendUp
              size={23}
              weight="bold"
            />
          </div>

          <p
            className="
              text-[15px]
              font-bold
              leading-5
              text-blue-600
            "
          >
            {project.impact}
          </p>
        </div>

        {/* pushes buttons towards bottom */}

        

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-17
            grid
            grid-cols-2
            gap-3
          "
        >
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                y: -3,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                group
                flex
                h-[38px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-5
                text-sm
                font-bold
                text-white
                shadow-[0_12px_30px_rgba(37,99,235,0.25)]
                transition-colors
                hover:bg-blue-700
              "
            >
              Live Project

              <ArrowUpRight
                size={18}
                weight="bold"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.a>
          ) : (
            <div />
          )}

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"

            whileHover={{
              y: -3,
            }}

            whileTap={{
              scale: 0.98,
            }}

            className="
              group
              flex
              h-[38px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-blue-200
              bg-white
              px-5
              text-sm
              font-bold
              text-blue-600
              transition-all
              hover:border-blue-600
              hover:bg-blue-50
            "
          >
            <GithubLogo
              size={20}
              weight="bold"
            />

            GitHub

            <ArrowUpRight
              size={17}
              weight="bold"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   LEFT CONTENT
========================================================= */

function ProjectsIntro() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
  relative
  z-20
  flex
  flex-col
  justify-center

  translate-x-[20px]
  xl:translate-x-[40px]
"
    >
      <div
        className="
          mb-5
          inline-flex
          w-fit
          rounded-full
          bg-blue-100
          px-4
          py-1.5
          shadow-sm
        "
      >
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-blue-700
          "
        >
          Projects
        </span>
      </div>

      <h2
        className="
          font-serif
          text-[4.8rem]
          font-black
          leading-[0.82]
          tracking-[-0.045em]
          text-slate-950
          xl:text-[5.5rem]
        "
      >
        Featured
        <br />
        Projects
        <span className="text-blue-600">.</span>
      </h2>

      <p
        className="
          mt-5
          max-w-[360px]
          text-[18px]
          leading-9
          text-slate-600
        "
      >
        Research-driven systems built to solve
        real-world problems across language,
        healthcare and intelligent resource
        allocation.
      </p>

      {/* mini stat */}

      <div
        className="
          mt-7
          flex
          w-fit
          items-center
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >
        <div
          className="
            flex
            h-62px
            items-center
            border-r
            border-slate-200
            px-10
            pl-5
          "
        >
          <span
            className="
              text-3xl
              font-black
              text-blue-600
            "
          >
            03
          </span>
        </div>

        <div className="px-4">
          <p
            className="
              text-sm
              font-bold
              text-slate-900
            "
          >
            Featured systems
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN FEATURED PROJECTS SECTION
========================================================= */

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] =
    useState(0);

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-slate-50/40
        to-blue-50/30
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          bottom-[-260px]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-blue-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[230px]
          -top-[330px]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-blue-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[800px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/20
          blur-[120px]
        "
      />

      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-[1750px]
          grid-cols-1
          items-center
          gap-10
          px-6
          py-16
          md:px-10

          lg:grid-cols-[0.82fr_1.22fr_0.96fr]
          lg:px-8

          xl:grid-cols-[0.80fr_1.18fr_0.95fr]
          xl:gap-12
        "
      >
        {/* LEFT */}

        <ProjectsIntro />

        {/* CENTER */}

        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <ProjectDisc
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

          <motion.div
            animate={{
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              mt-16
              flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.32em]
              text-slate-400
            "
          >
            <span className="text-blue-600">
              ✦
            </span>

            Hover to explore
          </motion.div>
        </div>

        {/* RIGHT CARD */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            justify-center
            lg:justify-start
          "
        >
          <ProjectCard
            project={projects[activeProject]}
          />
        </div>
      </div>
    </section>
  );
}