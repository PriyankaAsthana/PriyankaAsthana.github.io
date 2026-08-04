import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X
} from "@phosphor-icons/react";

export default function Navigation({
  showPrevious,
  showNext,
  viewingCertificate,
  isLastCertificate,
  onPrevious,
  onNext,
  onFinish,
  onClose,
}) {
  return (
    <>
      {/* PREVIOUS */}

      <AnimatePresence>

        {showPrevious && (

          <motion.button

            initial={{
              opacity: 0,
              x: -30,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              x: -30,
              scale: 0.8,
            }}

            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}

            whileHover={{
              scale: 1.08,
              y: -3,
            }}

            whileTap={{
              scale: 0.94,
            }}

            onClick={onPrevious}

            className="
              absolute
              left-[calc(50%-340px)]
              top-1/2
              z-[90]

              -translate-x-full
              -translate-y-1/2

              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              border
              border-blue-200

              bg-white/90

              backdrop-blur-xl

              shadow-[0_18px_45px_rgba(37,99,235,.14)]
            "
          >
            <motion.div
              whileHover={{ x: -2 }}
            >
              <ArrowLeft
                size={26}
                weight="bold"
                className="text-blue-600"
              />
            </motion.div>

          </motion.button>

        )}

      </AnimatePresence>

      {/* NEXT */}

      <AnimatePresence>

        {showNext && (

          <motion.button

            initial={{
              opacity: 0,
              x: 30,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              x: 30,
              scale: 0.8,
            }}

            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}

            whileHover={{
              scale: 1.08,
              y: -3,
            }}

            whileTap={{
              scale: 0.94,
            }}

            onClick={() => {

  if (isLastCertificate) {
    onFinish();
    return;
  }

  onNext();

}}


            className="
  absolute
  top-1/2
  z-[90]

  -translate-y-1/2

  flex
  h-16
  w-16

  items-center
  justify-center

  rounded-full

  bg-gradient-to-br
  from-blue-600
  to-blue-500

  text-white

  shadow-[0_22px_60px_rgba(37,99,235,.32)]
"
style={{
  left: viewingCertificate
    ? "calc(50% + 340px)"
    : "calc(100% - 110px)",
}}
          >
            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            >
              <ArrowRight
                size={26}
                weight="bold"
              />
            </motion.div>

          </motion.button>

        )}

      </AnimatePresence>
      {/* CLOSE */}

<AnimatePresence>
  {viewingCertificate && (
    <motion.button
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 30,
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.94,
      }}
      onClick={onClose}
      className="
        absolute
        left-1/2
        top-[610px]
        z-[90]

        -translate-x-1/2

        flex
        h-14
        w-44

        items-center
        justify-center
        gap-3

        rounded-full

        border
        border-blue-200

        bg-white/95

        shadow-[0_20px_45px_rgba(37,99,235,.12)]

        backdrop-blur-xl
      "
    >
      <X
        size={20}
        weight="bold"
        className="text-blue-600"
      />

      <span className="font-semibold text-slate-700">
        Close
      </span>
    </motion.button>
  )}
</AnimatePresence>

      {/* LEFT GLOW */}

      <div
        className="
          pointer-events-none

          absolute
          left-[calc(50%-380px)]
          top-1/2

          h-28
          w-28

          -translate-y-1/2

          rounded-full

          bg-blue-300/15

          blur-[70px]
        "
      />

      {/* RIGHT GLOW */}

      <div
        className="
          pointer-events-none

          absolute
          left-[calc(50%+300px)]
          top-1/2

          h-28
          w-28

          -translate-y-1/2

          rounded-full

          bg-blue-500/18

          blur-[70px]
        "
      />

    </>
  );
}