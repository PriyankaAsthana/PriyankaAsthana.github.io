import { useState } from "react";
import { motion } from "framer-motion";

import certifications from "../../data/certificationData";

import ArchiveStack from "./ArchiveStack";
import ArchiveList from "./ArchiveList";
import PaperEngine from "./PaperEngine";
import Navigation from "./Navigation";

export default function CertificationArchive() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const currentPaper =
  currentIndex >= 0
    ? certifications[currentIndex]
    : null;
  const viewingCertificate = currentIndex !== -1;

  const isLastCertificate =
  currentIndex === certifications.length - 1;
  /* ==========================================
      NEXT
  ========================================== */

  function handleNext() {
  if (currentIndex === -1) {
    setCurrentIndex(0);
    return;
  }

  if (currentIndex < certifications.length - 1) {
    setCurrentIndex(currentIndex + 1);
  }
}

function restartArchive() {
  setCurrentIndex(-1);
}
  /* ==========================================
      PREVIOUS
  ========================================== */

  function handlePrevious() {
  if (currentIndex === 0) {
    setCurrentIndex(-1);
    return;
  }

  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
}

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50
        pt-36 pb-12
      "
    >
      {/* ======================================
            BACKGROUND
      ====================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2

            h-[900px]
            w-[900px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-blue-400/8

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-48
            top-10

            h-[450px]
            w-[450px]

            rounded-full

            border
            border-blue-200/40
          "
        />

        <div
          className="
            absolute
            -right-56
            bottom-0

            h-[560px]
            w-[560px]

            rounded-full

            border
            border-blue-200/40
          "
        />

      </div>

      {/* ======================================
            HEADING
      ====================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .6,
        }}
        className="
          relative
          z-30
          text-center
        "
      >

        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[.45em]
            text-blue-600
          "
        >
          Certifications
        </p>

        <h2
          className="
            mt-3
            font-serif
            text-6xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          Professional Archive
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-[2020px]

            text-lg
            leading-8

            text-slate-500
          "
        >
          Browse certifications exactly like
          pulling professional documents
          from an archive drawer.
        </p>

      </motion.div>

      {/* ======================================
            MAIN LAYOUT
      ====================================== */}

      {/* ======================================
    MAIN LAYOUT
====================================== */}

<div
  className="
    relative
    z-20
    mx-auto

    mt-16

    w-full
    max-w-[1650px]

    origin-top

    /* MOBILE */
    min-h-[550px]
    scale-[0.70]

    /* SMALL TABLET */
    sm:min-h-[540px]
    sm:scale-[0.82]

    /* TABLET */
    md:min-h-[600px]
    md:scale-[0.90]

    /* DESKTOP — KEEP EXACTLY AS BEFORE */
    lg:mt-24
    lg:min-h-[680px]
    lg:scale-100
  "
>

        {/* LEFT STACK */}

<div
  className="
    absolute

    left-1/2
    -translate-x-[62%]

    sm:-translate-x-[68%]

    lg:left-10
    lg:translate-x-0

    top-8

    z-10
  "
>
  <ArchiveStack
    remaining={
      currentIndex === -1
        ? certifications.length
        : certifications.length - currentIndex - 1
    }
    blurred={viewingCertificate}
  />
</div>
{/* PAPER */}

<div
  className="
    absolute
    left-[calc(53%+18px)]
    top-[90px]

    z-30

    flex
    justify-center

    w-[520px]

    -translate-x-1/2

    /* DESKTOP — KEEP EXACTLY AS BEFORE */
    lg:left-1/2
    lg:-translate-x-[228px]
  "
>
  <div className="pointer-events-auto">
    <PaperEngine
      certificate={currentPaper}
      onClose={restartArchive}
    />
  </div>
</div>
        {/* RIGHT LIST */}

<div
  className="
    hidden
    lg:block

    absolute

    right-40
    top-5

    z-10
  "
>
  <ArchiveList
    covered={viewingCertificate}
    active={currentPaper}
  />
</div>

        {/* NAVIGATION */}

        <Navigation
  showPrevious={viewingCertificate}
  showNext={true}
  isLastCertificate={isLastCertificate}
  viewingCertificate={viewingCertificate}
  onPrevious={handlePrevious}
  onNext={handleNext}
  onFinish={restartArchive}
  onClose={restartArchive}
/>

      </div>
    </section>
  );
}