import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Overview from "./Overview";
import BookSpine from "./BookSpine";
import AnimatedKnowledgeGraph from "./AnimatedKnowledgeGraph";

import ResearchPaperOne from "./ResearchPaperOne";
import ResearchPaperTwo from "./ResearchPaperTwo";
import ResearchPaperThree from "./ResearchPaperThree";


function ResearchShowcase() {
  const [currentPage, setCurrentPage] = useState("cover");


  return (
    <section
      id="research"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >

      <AnimatePresence mode="sync">


        {/* ================================= */}
        {/* RESEARCH COVER */}
        {/* ================================= */}

        {currentPage === "cover" && (
          <motion.div
            key="cover"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -60,
            }}

            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              relative
              w-full

              min-h-[860px]
              sm:min-h-[980px]
              md:min-h-[900px]
              lg:min-h-[780px]

              overflow-hidden

              bg-gradient-to-br
              from-white
              via-slate-50
              to-blue-50/30
            "
          >


            {/* ================================= */}
            {/* GRAPH */}
            {/* ================================= */}

            <AnimatedKnowledgeGraph />


            {/* ================================= */}
            {/* RESEARCH CONTENT */}
            {/* ================================= */}

            <div
              className="
                relative
                z-10

                w-full

                px-4
                sm:px-6
                md:px-8
                lg:px-0
              "
            >

              {/* =================================
                  SMALL PHONE ONLY
                  SHRINK OVERVIEW CONTENT
              ================================= */}

              <div
                className="
                  origin-top

                  scale-[0.82]

                  sm:scale-100
                "
              >
                <Overview />
              </div>

            </div>


            {/* ================================= */}
            {/* VIEW ALL PAPERS AREA */}
            {/* ================================= */}

            <div
              className="
                relative
                z-20

                flex
                w-full

                h-[0px]
                sm:h-[190px]
                md:h-[205px]
                lg:h-[220px]

                items-end
                justify-center

                pb-6
                sm:pb-7
                md:pb-8
                lg:pb-0

                /* VERY SMALL PHONES ONLY */
                -translate-y-10
                sm:translate-y-0
              "
            >

              <BookSpine
                onClick={() =>
                  setCurrentPage("paper1")
                }
              />

            </div>


          </motion.div>
        )}


        {/* ================================= */}
        {/* PAPER ONE */}
        {/* ================================= */}

        {currentPage === "paper1" && (
          <motion.div
            key="paper1"

            initial={{
              opacity: 0,
              y: 45,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              x: -45,
            }}

            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              min-h-screen
              w-full
              overflow-hidden
            "
          >

            <ResearchPaperOne
              onBack={() =>
                setCurrentPage("cover")
              }

              onNext={() =>
                setCurrentPage("paper2")
              }
            />

          </motion.div>
        )}


        {/* ================================= */}
        {/* PAPER TWO */}
        {/* ================================= */}

        {currentPage === "paper2" && (
          <motion.div
            key="paper2"

            initial={{
              opacity: 0,
              x: 45,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: -45,
            }}

            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              min-h-screen
              w-full
              overflow-hidden
            "
          >

            <ResearchPaperTwo
              onBack={() =>
                setCurrentPage("paper1")
              }

              onNext={() =>
                setCurrentPage("paper3")
              }
            />

          </motion.div>
        )}


        {/* ================================= */}
        {/* PAPER THREE */}
        {/* ================================= */}

        {currentPage === "paper3" && (
          <motion.div
            key="paper3"

            initial={{
              opacity: 0,
              x: 45,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              y: 45,
            }}

            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              min-h-screen
              w-full
              overflow-hidden
            "
          >

            <ResearchPaperThree
              onBack={() =>
                setCurrentPage("paper2")
              }

              onNext={() =>
                setCurrentPage("cover")
              }
            />

          </motion.div>
        )}


      </AnimatePresence>

    </section>
  );
}


export default ResearchShowcase;