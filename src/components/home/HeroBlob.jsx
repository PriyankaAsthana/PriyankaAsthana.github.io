import { motion } from "framer-motion";

export default function HeroBlob() {
  return (
    <>
      {/* =====================================
            BACKGROUND GLOW
      ===================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          h-[340px]
w-[330px]

sm:h-[430px]
sm:w-[420px]

md:h-[500px]
md:w-[480px]

lg:h-[540px]
lg:w-[520px]

          rounded-full

          bg-blue-500/20

          blur-[110px]

          translate-x-3
translate-y-3

sm:translate-x-6
sm:translate-y-5

lg:translate-x-10
lg:translate-y-8

          -z-30
        "
      />

      {/* =====================================
            OUTER RING
      ===================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[320px]
w-[320px]

sm:h-[400px]
sm:w-[400px]

md:h-[470px]
md:w-[470px]

lg:h-[520px]
lg:w-[520px]

          rounded-full

          border

          border-blue-200/20

          -z-20
        "
      />

      {/* =====================================
            INNER RING
      ===================================== */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[320px]
w-[335px]

sm:h-[390px]
sm:w-[405px]

md:h-[460px]
md:w-[475px]

lg:h-[500px]
lg:w-[520px]

          rounded-full

          border

          border-blue-300/20

          -z-20
        "
      />

      {/* =====================================
            FLOATING PARTICLES
      ===================================== */}

      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, index % 2 === 0 ? 12 : -12, 0],
            opacity: [0.25, 0.8, 0.25],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeInOut",
          }}
          style={{
            left: `${15 + index * 8}%`,
            top: `${10 + (index % 5) * 18}%`,
          }}
          className="
            absolute

            h-2
            w-2

            rounded-full

            bg-blue-400

            shadow-[0_0_18px_rgba(59,130,246,.9)]

            -z-10
          "
        />
      ))}

      {/* =====================================
            MORPHING BLOB
      ===================================== */}

      <motion.div
        animate={{
          rotate: [6, 12, 6],

          scale: [1, 1.04, 1],

          borderRadius: [
            "45% 55% 67% 33% / 38% 32% 68% 62%",
            "58% 42% 54% 46% / 44% 36% 64% 56%",
            "38% 62% 50% 50% / 60% 32% 68% 40%",
            "45% 55% 67% 33% / 38% 32% 68% 62%",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          h-[320px]
w-[335px]

sm:h-[390px]
sm:w-[405px]

md:h-[460px]
md:w-[475px]

lg:h-[500px]
lg:w-[520px]

          bg-gradient-to-br
          from-blue-700
          via-blue-600
          to-cyan-500

          translate-x-10
          translate-y-8

          shadow-[0_40px_100px_rgba(37,99,235,.40)]

          -z-10
        "
      />

      {/* =====================================
            LIGHT SWEEP
      ===================================== */}

      <motion.div
        animate={{
          x: [-260, 260],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[330px]

sm:h-[400px]

md:h-[470px]

lg:h-[520px]
          w-24

          rotate-12

          bg-white/20

          blur-2xl

          -z-10
        "
      />
    </>
  );
}