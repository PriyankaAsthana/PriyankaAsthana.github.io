import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function FloatingMenuButton({
  visible,
  open,
  onClick,
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.75,
            x: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            x: -30,
          }}
          transition={{
            duration: 0.28,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onClick}
          className="
            fixed

            left-6
            top-6

            z-[100]

            flex
            items-center
            justify-center

            h-16
            w-16

            rounded-br-[34px]
            rounded-tl-[12px]

            border
            border-white/30

            bg-white/20

            backdrop-blur-3xl

            shadow-[0_20px_60px_rgba(15,23,42,.18)]

            transition-all

            hover:border-blue-300
            hover:shadow-[0_20px_60px_rgba(37,99,235,.25)]
          "
        >
          {/* Animated Glow */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
            className="
              absolute

              inset-0

              rounded-br-[34px]
              rounded-tl-[12px]

              bg-blue-400/20

              blur-xl
            "
          />

          {/* Icon */}

          <motion.div
            animate={{
              rotate: open ? 90 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10"
          >
            {open ? (
              <X
                size={28}
                color="#2563EB"
              />
            ) : (
              <Menu
                size={28}
                color="#2563EB"
              />
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}