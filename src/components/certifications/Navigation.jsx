import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
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
      {/* =====================================================
          PREVIOUS
          MOBILE:
          Sits immediately beside the LEFT edge of certificate

          DESKTOP:
          EXACT SAME POSITION AS BEFORE
      ===================================================== */}

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
              z-[90]

              /* =========================
                 MOBILE / TABLET
              ========================= */

              left-[calc(50%-285px)]
              top-[340px]

              -translate-x-1/2
              -translate-y-1/2

              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-full
              border
              border-blue-200

              bg-white/95
              backdrop-blur-xl

              shadow-[0_18px_45px_rgba(37,99,235,.14)]

              /* =========================
                 DESKTOP — UNCHANGED
              ========================= */

              lg:left-[calc(50%-340px)]
              lg:top-1/2

              lg:h-16
              lg:w-16
            "
          >
            <motion.div whileHover={{ x: -2 }}>
              <ArrowLeft
                size={26}
                weight="bold"
                className="text-blue-600"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>


      {/* =====================================================
          NEXT
          MOBILE:
          Sits immediately beside the RIGHT edge of certificate

          DESKTOP:
          ORIGINAL POSITIONING IS PRESERVED
      ===================================================== */}

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
              z-[90]

              /* =========================
                 MOBILE / TABLET
              ========================= */

              left-[calc(50%+285px)]
              top-[340px]

              -translate-x-1/2
              -translate-y-1/2

              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-blue-600
              to-blue-500

              text-white

              shadow-[0_22px_60px_rgba(37,99,235,.32)]

              /* =========================
                 DESKTOP — POSITION UNCHANGED
              ========================= */

              lg:top-1/2
              lg:left-[calc(50%+340px)]

              lg:h-16
              lg:w-16
            "
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


      {/* =====================================================
          CLOSE
          KEEPING YOUR EXISTING DESIGN
      ===================================================== */}

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


      {/* =====================================================
          LEFT GLOW
          UNCHANGED
      ===================================================== */}

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


      {/* =====================================================
          RIGHT GLOW
          UNCHANGED
      ===================================================== */}

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