import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MapPin,
  Globe,
  ClockCountdown,
  Sparkle,
} from "@phosphor-icons/react";

const statuses = [
  "AVAILABLE",
  "ONLINE",
  "READY TO BUILD",
];

export default function StatusCard() {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev + 1) % statuses.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        relative
        w-full
        max-w-[390px]
        overflow-hidden

        rounded-[10px]

        border
        border-blue-100

        bg-white/90

        p-8

        shadow-[0_30px_70px_rgba(15,23,42,.08)]

        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16

          h-44
          w-44

          rounded-full

          bg-blue-400/10

          blur-[70px]
        "
      />

      {/* Status */}

      <div className="flex items-center gap-3">

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-3
            w-3

            rounded-full

            bg-green-500
          "
        />

        <motion.p
          key={status}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            text-sm

            font-bold

            tracking-[0.35em]

            text-green-600
          "
        >
          {statuses[status]}
        </motion.p>

      </div>

      {/* Heading */}

      <h2
        className="
          mt-8

          font-serif

          text-4xl

          font-bold

          leading-tight

          text-slate-900
        "
      >
        Open for
        <br />
        Opportunities
      </h2>

      {/* Divider */}

      <div
        className="
          my-8

          h-px

          bg-gradient-to-r

          from-blue-200

          to-transparent
        "
      />

      {/* Info */}

      <div className="space-y-6">

        <div className="flex items-start gap-4">

          <MapPin
            size={24}
            weight="duotone"
            className="text-blue-600"
          />

          <div>

            <p className="text-sm text-slate-400">
              Location
            </p>

            <h3 className="font-semibold text-slate-800">
              Varanasi, India
            </h3>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <Globe
            size={24}
            weight="duotone"
            className="text-blue-600"
          />

          <div>

            <p className="text-sm text-slate-400">
              Interested In
            </p>

            <h3 className="font-semibold text-slate-800">
              AI • Research • Software Engineering
            </h3>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <Sparkle
            size={24}
            weight="duotone"
            className="text-blue-600"
          />

          <div>

            <p className="text-sm text-slate-400">
              Open To
            </p>

            <h3 className="font-semibold text-slate-800">
              International Collaboration
            </h3>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <ClockCountdown
            size={24}
            weight="duotone"
            className="text-blue-600"
          />

          <div>

            <p className="text-sm text-slate-400">
              Average Response
            </p>

            <h3 className="font-semibold text-slate-800">
              Within 24 Hours
            </h3>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          mt-10

          rounded-2xl

          border

          border-blue-100

          bg-blue-50/70

          p-5
        "
      >
        <p
          className="
            text-xs

            uppercase

            tracking-[0.3em]

            text-blue-600
          "
        >
          CURRENT FOCUS
        </p>

        <h3
          className="
            mt-3

            text-lg

            font-semibold

            text-slate-900
          "
        >
          AI Research • NLP • LLM Engineering
        </h3>
      </div>

    </motion.div>
  );
}