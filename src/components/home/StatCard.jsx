import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";

function StatCard({ stat, index }) {
  const Icon = stat.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-60 w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500"
    >
      {/* Background */}

      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]"
      />

      <div className="relative z-10 flex h-full items-center justify-center p-8">

  <AnimatePresence mode="wait">

    {!hovered ? (

      <motion.div
        key="default"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .25 }}
        className="flex flex-col items-center text-center"
      >
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.color}`}
        >
          <Icon
            size={30}
            weight="fill"
            className="text-white"
          />
        </div>

        <h3 className="mt-6 text-5xl font-bold text-slate-900">
          {stat.value}
          {stat.suffix}
        </h3>

        <h4 className="mt-2 text-xl font-semibold">
          {stat.title}
        </h4>

      </motion.div>

    ) : (

      <motion.div
        key="hover"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: .3 }}
        className="text-left text-white"
      >

        <h3 className="mb-5 text-2xl font-bold">
          {stat.title}
        </h3>

        <ul className="space-y-3">

          {stat.points.map(point => (

            <li
              key={point}
              className="flex gap-2"
            >
              <ArrowUpRight size={18}/>
              {point}
            </li>

          ))}

        </ul>

      </motion.div>

    )}

  </AnimatePresence>

</div>
    </motion.div>
  );
}

export default StatCard;