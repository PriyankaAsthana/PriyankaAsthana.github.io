import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { stats } from "../../data/stats";

function QuickStats() {
  return (
    <section
      id="stats"
      className="
        min-h-screen
        bg-gradient-to-b
        from-white
        to-slate-50
        flex
        items-center
      "
    >
      <div className="w-full pt-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            About Me
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Journey at a Glance
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-9xl
              px-6
              text-center
              text-xl
              leading-9
              text-slate-600
            "
          >
            A snapshot of my academic achievements, research contributions,
            <br className="hidden md:block" />
            and professional journey in Artificial Intelligence.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-24
            grid
            grid-cols-1
            justify-items-center
            gap-x-16
            gap-y-16
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default QuickStats;