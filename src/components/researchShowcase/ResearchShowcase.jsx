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
  const [currentPage, setCurrentPage] =
    useState("cover");

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
              overflow-hidden

              bg-gradient-to-br
              from-white
              via-slate-50
              to-blue-50/30
            "
          >
            {/* ================================= */}
            {/* GRAPH */}
            {/* NOW BEHIND THE ENTIRE COVER */}
            {/* ================================= */}

            <AnimatedKnowledgeGraph />

            {/* ================================= */}
            {/* RESEARCH CONTENT */}
            {/* ================================= */}

            <div className="relative z-10">
              <Overview />
            </div>

            {/* ================================= */}
            {/* VIEW ALL PAPERS AREA */}
            {/* ================================= */}

            <div
              className="
                relative
                z-20

                flex
                h-[220px]
                w-full

                items-end
                justify-center
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