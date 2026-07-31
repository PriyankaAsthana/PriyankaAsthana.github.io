import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Overview from "./Overview";
import BookSpine from "./BookSpine";
import ResearchPaperOne from "./ResearchPaperOne";

function ResearchShowcase() {
  const [currentPage, setCurrentPage] = useState("cover");

  return (
    <section
      id="research"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        [perspective:1600px]
      "
    >
      <AnimatePresence mode="wait">

        {/* ================================================= */}
        {/* RESEARCH OVERVIEW */}
        {/* ================================================= */}

        {currentPage === "cover" && (
          <motion.div
            key="cover"
            className="relative min-h-screen w-full"
            initial={{
              opacity: 0,
              y: -80,
              rotateX: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -180,
              rotateX: 8,
              scale: 0.97,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Overview />

            <BookSpine
              onClick={() => setCurrentPage("paper1")}
            />
          </motion.div>
        )}

        {/* ================================================= */}
        {/* PAPER 01 */}
        {/* ================================================= */}

        {currentPage === "paper1" && (
          <motion.div
            key="paper1"
            className="min-h-screen w-full"
            initial={{
              opacity: 0,
              y: 180,
              rotateX: -8,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -120,
              scale: 0.98,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ResearchPaperOne
              onBack={() => setCurrentPage("cover")}

              onNext={() => {
                /*
                  Paper 02 will go here.

                  Later:
                  setCurrentPage("paper2");
                */
              }}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}

export default ResearchShowcase;