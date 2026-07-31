import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

function BookSpine({ onClick }) {
  return (
    <motion.button
      onClick={onClick}

      initial={{
        opacity: 0,
        y: 35,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -6,
        scale: 1.02,
      }}

      whileTap={{
        scale: 0.97,
      }}

      transition={{
        duration: 0.35,
      }}

      className="
        group
        absolute
        bottom-0
        left-1/2
        z-50

        flex
        min-h-[72px]
        min-w-[320px]

        -translate-x-1/2

        items-center
        justify-center
        gap-7

        rounded-t-[32px]

        bg-gradient-to-r
        from-blue-600
        to-blue-500

        px-16
        py-7

        text-white

        shadow-[0_-15px_45px_rgba(37,99,235,0.28)]

        transition-all
        duration-300

        hover:shadow-[0_-18px_55px_rgba(37,99,235,0.38)]
      "
    >
      {/* TEXT */}

      <span
        className="
          text-base
          font-bold
          uppercase
          tracking-[0.28em]
          whitespace-nowrap
        "
      >
        View All Papers
      </span>

      {/* ARROW CIRCLE */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center

          rounded-full

          bg-white/15

          shadow-inner

          transition-all
          duration-300

          group-hover:bg-white/25
        "
      >
        <ArrowDown
          size={24}
          weight="bold"
        />
      </motion.div>
    </motion.button>
  );
}

export default BookSpine;