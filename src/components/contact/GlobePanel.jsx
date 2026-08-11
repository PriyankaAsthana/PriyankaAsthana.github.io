import { motion } from "framer-motion";
import Earth from "./Earth";

export default function GlobePanel() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative

        flex

        items-center
        justify-center

        w-full
        h-full
      "
    >
      {/* ===============================
            EARTH CONTAINER
      =============================== */}

      <div
  className="
    relative

    flex
    items-center
    justify-center

    h-[360px]
    w-[360px]

    lg:h-[500px]
    lg:w-[500px]

    overflow-visible
  "
>
        <Earth />
      </div>
    </motion.div>
  );
}