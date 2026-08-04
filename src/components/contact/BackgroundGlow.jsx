import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* ======================================
            MAIN CENTER GLOW
      ====================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
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

          bg-blue-500/10

          blur-[140px]
        "
      />

      {/* ======================================
            LEFT GLOW
      ====================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -left-44
          top-12

          h-[460px]
          w-[460px]

          rounded-full

          bg-blue-300/20

          blur-[110px]
        "
      />

      {/* ======================================
            RIGHT GLOW
      ====================================== */}

      <motion.div
        animate={{
          y: [0, 28, 0],
          x: [0, -18, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -right-48
          bottom-0

          h-[520px]
          w-[520px]

          rounded-full

          bg-sky-300/15

          blur-[120px]
        "
      />

      {/* ======================================
            TOP RING
      ====================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          left-[-240px]
          top-[120px]

          h-[500px]
          w-[500px]

          rounded-full

          border

          border-blue-200/30
        "
      />

      {/* ======================================
            BOTTOM RING
      ====================================== */}

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          right-[-260px]
          bottom-[-120px]

          h-[620px]
          w-[620px]

          rounded-full

          border

          border-blue-100/30
        "
      />

      {/* ======================================
            LIGHT BEAM
      ====================================== */}

      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scaleY: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-0

          h-full
          w-[2px]

          -translate-x-1/2

          bg-gradient-to-b
          from-transparent
          via-blue-400
          to-transparent
        "
      />

    </div>
  );
}