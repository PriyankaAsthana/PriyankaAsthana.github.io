import { motion } from "framer-motion";

const particles = [
  {
    left: "8%",
    top: "18%",
    size: 8,
    delay: 0,
    duration: 10,
  },
  {
    left: "20%",
    top: "72%",
    size: 12,
    delay: 1,
    duration: 14,
  },
  {
    left: "33%",
    top: "40%",
    size: 6,
    delay: 2,
    duration: 11,
  },
  {
    left: "48%",
    top: "15%",
    size: 10,
    delay: 0.5,
    duration: 16,
  },
  {
    left: "58%",
    top: "78%",
    size: 7,
    delay: 2.5,
    duration: 13,
  },
  {
    left: "68%",
    top: "32%",
    size: 11,
    delay: 1.4,
    duration: 15,
  },
  {
    left: "80%",
    top: "18%",
    size: 9,
    delay: 2,
    duration: 12,
  },
  {
    left: "90%",
    top: "66%",
    size: 13,
    delay: 0.8,
    duration: 17,
  },
];

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle, index) => (

        <motion.div
          key={index}

          initial={{
            opacity: 0,
            scale: 0,
          }}

          animate={{
            y: [0, -40, 0],
            x: [0, 12, 0],
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.35, 0.12],
          }}

          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}

          className="
            absolute
            rounded-full

            bg-gradient-to-br
            from-blue-400/40
            to-sky-300/20

            blur-[1px]
          "
        />

      ))}

      {/* Tiny Stars */}

      {[...Array(18)].map((_, index) => (

        <motion.div
          key={`star-${index}`}

          animate={{
            opacity: [0.15, 0.8, 0.15],
          }}

          transition={{
            duration: 2 + (index % 4),
            repeat: Infinity,
            delay: index * 0.25,
          }}

          style={{
            left: `${5 + index * 5}%`,
            top: `${12 + (index % 6) * 13}%`,
          }}

          className="
            absolute

            h-[2px]
            w-[2px]

            rounded-full

            bg-blue-400
          "
        />

      ))}

    </div>
  );
}