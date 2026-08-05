import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

function BookSpine({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
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
      whileHover={{
        y: -5,
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        z-30

        flex
        min-w-[365px]
        items-center
        justify-center
        gap-7

        rounded-full

        bg-blue-600

        px-12
        py-6

        text-white

        shadow-[0_-12px_45px_rgba(37,99,235,0.25)]

        transition-colors
        duration-300

        hover:bg-blue-700
      "
    >
      <span
        className="
          text-base
          font-bold
          uppercase
          tracking-[0.28em]
        "
      >
        View All Papers
      </span>

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          bg-white/15

          transition-all
          duration-300

          group-hover:bg-white
          group-hover:text-blue-600
        "
      >
        <ArrowDown
          size={25}
          weight="bold"
          className="
            transition-transform
            duration-300
            group-hover:translate-y-1
          "
        />
      </div>
    </motion.button>
  );
}

export default BookSpine;