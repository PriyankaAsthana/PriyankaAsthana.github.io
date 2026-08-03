import { motion } from "framer-motion";

const paperColors = [
  "#FFFFFF",
  "#F8FAFF",
  "#FFF8F6",
  "#F8FFF8",
  "#FFFDF5",
  "#FAF8FF",
];

export default function ArchiveStack({
  remaining,
  blurred,
}) {
  const visible = Math.min(6, remaining);

  return (
    <motion.div
  animate={{
    opacity: blurred ? 0.22 : 1,
    scale: blurred ? 0.97 : 1,
    filter: blurred
      ? "blur(8px)"
      : "blur(0px)",
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative
    h-[640px]
    w-[560px]
  "
>
      {/* Glow */}

      <div
        className="
          absolute
          left-34
          top-14

          h-[520px]
          w-[340px]

          rounded-full

          bg-blue-500/10

          blur-[80px]
        "
      />

      {/* Back Sheets */}

      {Array.from({ length: visible }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            x: 0 + index * 28,
            y: 14 + index * 8,
            rotate: -2 + index * 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 130,
            damping: 18,
          }}
          style={{
            background: paperColors[index % paperColors.length],
            zIndex: index,
          }}
          className="
            absolute

            left-20
            top-0

            h-[540px]
            w-[380px]

            rounded-[24px]

            border
            border-slate-200

            shadow-[0_18px_40px_rgba(15,23,42,.07)]
          "
        />
      ))}

      {/* Main Folder */}

      <motion.div
        whileHover={
  blurred
    ? {}
    : {
        y: -5,
        rotate: -1,
        scale: 1.01,
      }
}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="
          absolute

          left-65
          top-20

          z-20

          h-[500px]
          w-[310px]

          overflow-hidden

          rounded-[10px]

          border
          border-slate-200

          bg-white

          shadow-[0_30px_70px_rgba(15,23,42,.12)]
        "
      >
        {/* Folder Tab */}

        <div
          className="
            absolute

            left-34
            -top-10

            flex
            h-10
            w-36

            items-center
            justify-center

            rounded-t-2xl

            bg-blue-600

            text-[12px]
            tracking-[0.35em]
            font-bold

            tracking-[.35em]

            text-white
          "
        >
          CERTS
        </div>

        {/* Corner Fold */}

        <div
          className="
            absolute
            right-0
            top-0

            h-20
            w-20

            overflow-hidden
          "
        >
          <div
            className="
              absolute

              right-[-42px]
              top-[-42px]

              h-24
              w-24

              rotate-45

              bg-slate-100

              shadow-inner
            "
          />
        </div>

        {/* Folder Content */}

        <div
          className="
            flex
            h-full
            flex-col

            p-9
          "
        >
          <p
            className="
              text-xs
              
              font-semibold

              uppercase

              tracking-[.45em]

              text-blue-600
            "
          >
            Portfolio
          </p>

          <h2
            className="
              mt-6

              font-serif

              text-[46px]

              font-bold

              leading-[1.08]

              tracking-tight

              text-slate-900
            "
          >
            Certification
            <br />
            Archive
          </h2>

          <p
            className="
              mt-6

              text-[15px]

              leading-8

              text-slate-500
            "
          >
            Cloud AI, machine learning,
            software engineering,
            leadership and research
            credentials collected
            throughout my journey.
          </p>

          <div
            className="
              mt-8

              h-px

              bg-gradient-to-r
              from-blue-200
              to-transparent
            "
          />

          <div className="mt-auto">
            <p
              className="
                text-xs

                uppercase

                tracking-[.35em]

                text-slate-400
              "
            >
              Remaining
            </p>

            <h3
              className="
                mt-3

                text-6xl

                font-black

                text-blue-600
              "
            >
              {remaining}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              certificates waiting
              inside archive
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}